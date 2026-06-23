import { createFileRoute } from "@tanstack/react-router";
import { useLiveQuery } from "dexie-react-hooks";
import { RotateCcw, Check } from "lucide-react";
import { db, getSettings } from "@/database/db";
import { PageShell, formatRp } from "@/components/PageShell";
import { estimateTotal } from "@/hooks/planner";
import { priceOf } from "@/data/menu_master";

export const Route = createFileRoute("/belanja")({
  head: () => ({ meta: [{ title: "Belanja — Dapur Planner" }] }),
  component: BelanjaPage,
});

const ORDER = ["Protein", "Sayuran", "Bumbu", "Karbohidrat"] as const;

function BelanjaPage() {
  const items = useLiveQuery(() => db.shoppingList.toArray(), []);
  const settings = useLiveQuery(() => getSettings(), []);

  const list = items ?? [];
  const total = list.length;
  const done = list.filter((i) => i.checked).length;
  const estimasi = estimateTotal(list);
  const sisa = (settings?.weeklyBudget ?? 0) - estimasi;
  const over = sisa < 0;

  const toggle = async (id: number, checked: boolean) => {
    await db.shoppingList.update(id, { checked: !checked });
  };

  const reset = async () => {
    await Promise.all(list.map((i) => db.shoppingList.update(i.id!, { checked: false })));
  };

  if (!list.length) {
    return (
      <PageShell title="Daftar Belanja">
        <div className="text-center py-16">
          <div className="text-6xl mb-3">🛒</div>
          <p className="text-muted-foreground">Belum ada daftar belanja</p>
          <p className="text-xs text-muted-foreground mt-1">
            Buat planner terlebih dahulu untuk menghasilkan daftar belanja
          </p>
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell title="Daftar Belanja">
      <div className="rounded-3xl bg-card border border-border p-5 space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Progress</span>
          <span className="font-semibold">
            {done} / {total} item
          </span>
        </div>
        <div className="h-2 rounded-full bg-muted overflow-hidden">
          <div
            className="h-full bg-primary transition-all"
            style={{ width: `${total ? (done / total) * 100 : 0}%` }}
          />
        </div>
        {done === total && (
          <div className="flex items-center gap-2 text-primary text-sm font-medium pt-1">
            <Check className="h-4 w-4" /> Belanja selesai
          </div>
        )}
      </div>

      <div className="rounded-3xl bg-card border border-border p-5 text-sm space-y-1.5">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Estimasi Belanja</span>
          <span className="font-semibold">{formatRp(estimasi)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Sisa Budget</span>
          <span className={`font-semibold ${over ? "text-destructive" : "text-primary"}`}>
            {formatRp(sisa)}
          </span>
        </div>
        {over && (
          <div className="mt-2 rounded-xl bg-destructive/10 text-destructive text-xs px-3 py-2 font-medium">
            Estimasi melebihi budget
          </div>
        )}
      </div>

      {ORDER.map((cat) => {
        const group = list.filter((i) => i.category === cat);
        if (!group.length) return null;
        return (
          <div key={cat} className="rounded-3xl bg-card border border-border p-4">
            <div className="text-sm font-bold text-primary mb-2">{cat}</div>
            <div className="divide-y divide-border">
              {group.map((i) => (
                <label
                  key={i.id}
                  className="flex items-center gap-3 py-2.5 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={i.checked}
                    onChange={() => toggle(i.id!, i.checked)}
                    className="h-5 w-5 rounded accent-primary"
                  />
                  <span className={`flex-1 text-sm ${i.checked ? "line-through text-muted-foreground" : ""}`}>
                    {i.name}
                  </span>
                  <span className="text-xs text-muted-foreground">{formatRp(priceOf(i.name))}</span>
                </label>
              ))}
            </div>
          </div>
        );
      })}

      <button
        onClick={reset}
        className="w-full rounded-2xl border border-border bg-card py-3 text-sm font-semibold flex items-center justify-center gap-2"
      >
        <RotateCcw className="h-4 w-4" /> Reset Checklist
      </button>
    </PageShell>
  );
}
