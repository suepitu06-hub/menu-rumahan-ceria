import type { ReactNode } from "react";

export function PageShell({
  title,
  right,
  children,
}: {
  title: string;
  right?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background pb-24">
      <header className="sticky top-0 z-20 bg-background/80 backdrop-blur border-b border-border">
        <div className="mx-auto max-w-md px-5 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-foreground">{title}</h1>
          {right}
        </div>
      </header>
      <main className="mx-auto max-w-md px-5 py-5 space-y-4">{children}</main>
    </div>
  );
}

export function formatRp(n: number) {
  return "Rp " + n.toLocaleString("id-ID");
}
