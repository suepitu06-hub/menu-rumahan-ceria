import { createFileRoute, Link } from "@tanstack/react-router";
import { useLiveQuery } from "dexie-react-hooks";
import { Settings as SettingsIcon, CalendarDays, ShoppingCart, Wallet } from "lucide-react";
import { db, getSettings } from "@/database/db";
import { getMenuById, estimateTotal } from "@/hooks/planner";
import { PageShell, formatRp } from "@/components/PageShell";
import { DAYS } from "@/types";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [{ title: "Dapur Planner — Dashboard" }],
  }),
  component: Dashboard,
});

function Dashboard() {
  const settings = useLiveQuery(() => getSettings(), []);
  const plans = useLiveQuery(() => db.mealPlans.toArray(), []);
  const shopping = useLiveQuery(() => db.shoppingList.toArray(), []);

  const todayName = DAYS[(new Date().getDay() + 6) % 7];
  const today = plans?.find((p) => p.day === todayName);

  const estimasi = estimateTotal(shopping ?? []);
  const budget = settings?.weeklyBudget ?? 0;
  const sisa = budget - estimasi;

  const uncheckedCount = (shopping ?? []).filter((s) => !s.checked).length;
  const totalCount = (shopping ?? []).length;

  return (
    <PageShell
      title="Dapur Planner"
      right={
        <Link to="/pengaturan" className="p-2 rounded-full hover:bg-accent">
          <SettingsIcon className="h-5 w-5 text-foreground" />
        </Link>
      }
    >
      <div className="rounded-3xl bg-primary text-primary-foreground p-5 shadow-sm">
        <div className="flex items-center gap-2 text-sm opacity-90 mb-1">
          <CalendarDays className="h-4 w-4" /> Menu Hari Ini · {todayName}
        </div>
        {today ? (
          <div className="space-y-2 mt-3">
            <Row label="Sarapan" value={getMenuById(today.breakfast)?.name} />
            <Row label="Makan Siang" value={getMenuById(today.lunch)?.name} />
            <Row label="Makan Malam" value={getMenuById(today.dinner)?.name} />
          </div>
        ) : (
          <div className="mt-3 text-sm opacity-90">Belum ada menu minggu ini</div>
        )}
      </div>

      <div className="rounded-3xl bg-card border border-border p-5">
        <div className="flex items-center gap-2 text-sm font-semibold mb-3">
          <Wallet className="h-4 w-4 text-primary" /> Budget Mingguan
        </div>
        <div className="space-y-1.5 text-sm">
          <BudgetRow label="Budget" value={formatRp(budget)} />
          <BudgetRow label="Estimasi Belanja" value={formatRp(estimasi)} />
          <BudgetRow
            label="Sisa Budget"
            value={formatRp(sisa)}
            tone={sisa < 0 ? "danger" : "success"}
          />
        </div>
        {sisa < 0 && (
          <div className="mt-3 rounded-xl bg-destructive/10 text-destructive text-xs px-3 py-2 font-medium">
            Estimasi melebihi budget
          </div>
        )}
      </div>

      <div className="rounded-3xl bg-card border border-border p-5">
        <div className="flex items-center gap-2 text-sm font-semibold mb-2">
          <ShoppingCart className="h-4 w-4 text-primary" /> Belanja
        </div>
        {totalCount === 0 ? (
          <p className="text-sm text-muted-foreground">Belum ada daftar belanja</p>
        ) : (
          <p className="text-sm text-muted-foreground">
            {uncheckedCount} dari {totalCount} item belum dicentang
          </p>
        )}
      </div>

      <Link
        to="/planner"
        className="block text-center rounded-2xl bg-primary text-primary-foreground py-4 font-semibold shadow-sm active:scale-[0.98] transition"
      >
        Buat Menu Mingguan
      </Link>
    </PageShell>
  );
}

function Row({ label, value }: { label: string; value?: string }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="opacity-80">{label}</span>
      <span className="font-medium">{value ?? "—"}</span>
    </div>
  );
}
function BudgetRow({ label, value, tone }: { label: string; value: string; tone?: "danger" | "success" }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-muted-foreground">{label}</span>
      <span
        className={`font-semibold ${
          tone === "danger" ? "text-destructive" : tone === "success" ? "text-primary" : ""
        }`}
      >
        {value}
      </span>
    </div>
  );
}
