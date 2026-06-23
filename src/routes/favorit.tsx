import { createFileRoute } from "@tanstack/react-router";
import { useLiveQuery } from "dexie-react-hooks";
import { Heart, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { db } from "@/database/db";
import { PageShell } from "@/components/PageShell";
import { MENU_MASTER } from "@/data/menu_master";
import { getMenuById } from "@/hooks/planner";

export const Route = createFileRoute("/favorit")({
  head: () => ({ meta: [{ title: "Favorit — Dapur Planner" }] }),
  component: FavoritPage,
});

function FavoritPage() {
  const favs = useLiveQuery(() => db.favorites.toArray(), []);
  const [open, setOpen] = useState(false);

  const favIds = new Set((favs ?? []).map((f) => f.menuId));

  const add = async (menuId: number) => {
    if (favIds.has(menuId)) return;
    await db.favorites.add({ menuId });
  };
  const remove = async (id: number) => {
    await db.favorites.delete(id);
  };

  return (
    <PageShell
      title="Menu Favorit"
      right={
        <button
          onClick={() => setOpen((o) => !o)}
          className="p-2 rounded-full bg-primary text-primary-foreground"
        >
          <Plus className="h-4 w-4" />
        </button>
      }
    >
      {open && (
        <div className="rounded-3xl bg-card border border-border p-4">
          <div className="text-sm font-semibold mb-2">Pilih menu untuk ditambahkan</div>
          <div className="max-h-72 overflow-y-auto divide-y divide-border">
            {MENU_MASTER.map((m) => {
              const already = favIds.has(m.id);
              return (
                <button
                  key={m.id}
                  onClick={() => add(m.id)}
                  disabled={already}
                  className="w-full flex items-center justify-between py-2.5 text-left text-sm disabled:opacity-40"
                >
                  <span>{m.name}</span>
                  <span className="text-xs text-muted-foreground capitalize">{m.category.replace("_", " ")}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {!favs?.length ? (
        <div className="text-center py-16">
          <div className="text-6xl mb-3">❤️</div>
          <p className="text-muted-foreground">Belum ada menu favorit</p>
        </div>
      ) : (
        <div className="space-y-2">
          {favs.map((f) => {
            const m = getMenuById(f.menuId);
            if (!m) return null;
            return (
              <div
                key={f.id}
                className="flex items-center gap-3 rounded-2xl bg-card border border-border p-4"
              >
                <div className="h-10 w-10 rounded-xl bg-accent text-primary grid place-items-center">
                  <Heart className="h-5 w-5 fill-current" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-sm">{m.name}</div>
                  <div className="text-xs text-muted-foreground capitalize">
                    {m.category.replace("_", " ")} · {m.ingredients.length} bahan
                  </div>
                </div>
                <button
                  onClick={() => remove(f.id!)}
                  className="p-2 rounded-lg text-destructive hover:bg-destructive/10"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            );
          })}
        </div>
      )}
    </PageShell>
  );
}
