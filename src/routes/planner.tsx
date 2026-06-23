import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Sparkles, Save } from "lucide-react";
import { db } from "@/database/db";
import { PageShell } from "@/components/PageShell";
import { MENU_MASTER } from "@/data/menu_master";
import {
  generateWeeklyPlan,
  savePlans,
  generateShoppingFromPlans,
  getMenuById,
} from "@/hooks/planner";
import type { MealPlan } from "@/types";
import { DAYS } from "@/types";

export const Route = createFileRoute("/planner")({
  head: () => ({ meta: [{ title: "Planner — Dapur Planner" }] }),
  component: PlannerPage,
});

function PlannerPage() {
  const [plans, setPlans] = useState<MealPlan[]>([]);
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    db.mealPlans.toArray().then((p) => {
      if (p.length) setPlans(p);
      else setPlans(DAYS.map((d) => ({ day: d, breakfast: null, lunch: null, dinner: null })));
    });
  }, []);

  const handleGenerate = async () => {
    const p = await generateWeeklyPlan();
    setPlans(p);
    setStatus("Menu otomatis berhasil dibuat");
  };

  const handleSave = async () => {
    await savePlans(plans);
    await generateShoppingFromPlans(plans);
    setStatus("Planner & daftar belanja tersimpan");
  };

  const updateMeal = (day: string, slot: "breakfast" | "lunch" | "dinner", id: number) => {
    setPlans((prev) => prev.map((p) => (p.day === day ? { ...p, [slot]: id } : p)));
  };

  return (
    <PageShell title="Planner Mingguan">
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={handleGenerate}
          className="rounded-2xl bg-primary text-primary-foreground py-3 font-semibold flex items-center justify-center gap-2 active:scale-[0.98] transition"
        >
          <Sparkles className="h-4 w-4" /> Generate
        </button>
        <button
          onClick={handleSave}
          className="rounded-2xl bg-secondary text-secondary-foreground py-3 font-semibold flex items-center justify-center gap-2 active:scale-[0.98] transition"
        >
          <Save className="h-4 w-4" /> Simpan
        </button>
      </div>

      {status && (
        <div className="rounded-xl bg-accent text-accent-foreground text-sm px-4 py-2.5">
          {status}
        </div>
      )}

      <div className="space-y-3">
        {plans.map((p) => (
          <div key={p.day} className="rounded-3xl bg-card border border-border p-4">
            <div className="text-sm font-bold text-primary mb-3">{p.day}</div>
            <div className="space-y-2">
              <MealSelect label="Sarapan" value={p.breakfast} onChange={(id) => updateMeal(p.day, "breakfast", id)} />
              <MealSelect label="Siang" value={p.lunch} onChange={(id) => updateMeal(p.day, "lunch", id)} />
              <MealSelect label="Malam" value={p.dinner} onChange={(id) => updateMeal(p.day, "dinner", id)} />
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}

function MealSelect({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number | null;
  onChange: (id: number) => void;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-16 text-xs text-muted-foreground">{label}</div>
      <select
        value={value ?? ""}
        onChange={(e) => onChange(Number(e.target.value))}
        className="flex-1 rounded-xl bg-muted px-3 py-2 text-sm font-medium border border-transparent focus:border-primary outline-none"
      >
        <option value="">— pilih menu —</option>
        {MENU_MASTER.map((m) => (
          <option key={m.id} value={m.id}>
            {m.name}
          </option>
        ))}
      </select>
    </div>
  );
}

// silence unused
void getMenuById;
