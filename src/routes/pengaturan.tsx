import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, Shield } from "lucide-react";
import { db, getSettings, DEFAULT_SETTINGS } from "@/database/db";
import { PageShell } from "@/components/PageShell";
import type { Settings } from "@/types";

export const Route = createFileRoute("/pengaturan")({
  head: () => ({ meta: [{ title: "Pengaturan — Dapur Planner" }] }),
  component: PengaturanPage,
});

const SIZES = ["1", "2", "3", "4", "5+"];

function PengaturanPage() {
  const [s, setS] = useState<Settings>(DEFAULT_SETTINGS);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    getSettings().then(setS);
  }, []);

  const update = <K extends keyof Settings>(k: K, v: Settings[K]) => {
    setS((prev) => ({ ...prev, [k]: v }));
  };

  const save = async () => {
    await db.settings.put(s);
    setSaved(true);
    setTimeout(() => setSaved(false), 1800);
  };

  return (
    <PageShell
      title="Pengaturan"
      right={
        <Link to="/" className="p-2 rounded-full hover:bg-accent">
          <ArrowLeft className="h-5 w-5" />
        </Link>
      }
    >
      <div className="rounded-3xl bg-card border border-border p-5 space-y-3">
        <div className="text-sm font-semibold">Jumlah Anggota Keluarga</div>
        <div className="grid grid-cols-5 gap-2">
          {SIZES.map((n) => (
            <button
              key={n}
              onClick={() => update("familySize", n)}
              className={`py-2.5 rounded-xl text-sm font-semibold border transition ${
                s.familySize === n
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-muted text-foreground border-transparent"
              }`}
            >
              {n}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-3xl bg-card border border-border p-5 space-y-2">
        <div className="text-sm font-semibold">Budget Mingguan</div>
        <div className="flex items-center gap-2 rounded-xl bg-muted px-3 py-2.5">
          <span className="text-sm text-muted-foreground">Rp</span>
          <input
            type="number"
            value={s.weeklyBudget}
            onChange={(e) => update("weeklyBudget", Number(e.target.value) || 0)}
            className="flex-1 bg-transparent outline-none text-sm font-semibold"
          />
        </div>
      </div>

      <div className="rounded-3xl bg-card border border-border p-5 space-y-3">
        <div className="text-sm font-semibold">Preferensi Bahan</div>
        {[
          { k: "preferAyam", label: "Ayam" },
          { k: "preferIkan", label: "Ikan" },
          { k: "preferSayur", label: "Sayur" },
          { k: "preferTelur", label: "Telur" },
        ].map((p) => (
          <label key={p.k} className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={s[p.k as keyof Settings] as boolean}
              onChange={(e) => update(p.k as keyof Settings, e.target.checked as never)}
              className="h-5 w-5 rounded accent-primary"
            />
            <span className="text-sm">{p.label}</span>
          </label>
        ))}
      </div>

      <Link
        to="/kebijakan-privasi"
        className="flex items-center gap-3 rounded-2xl bg-card border border-border p-4 active:scale-[0.98] transition"
      >
        <Shield className="h-5 w-5 text-primary" />
        <span className="flex-1 text-sm font-semibold">Kebijakan Privasi</span>
        <ArrowLeft className="h-4 w-4 text-muted-foreground rotate-180" />
      </Link>

      <button
        onClick={save}
        className="w-full rounded-2xl bg-primary text-primary-foreground py-4 font-semibold active:scale-[0.98] transition"
      >
        Simpan Pengaturan
      </button>
      {saved && (
        <div className="rounded-xl bg-accent text-accent-foreground text-sm text-center px-4 py-2.5">
          Pengaturan tersimpan
        </div>
      )}
    </PageShell>
  );
}
