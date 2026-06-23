import { Link, useRouterState } from "@tanstack/react-router";
import { Home, CalendarDays, ShoppingCart, Heart } from "lucide-react";

const items = [
  { to: "/", label: "Dashboard", icon: Home },
  { to: "/planner", label: "Planner", icon: CalendarDays },
  { to: "/belanja", label: "Belanja", icon: ShoppingCart },
  { to: "/favorit", label: "Favorit", icon: Heart },
] as const;

export function BottomNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <nav className="fixed bottom-0 inset-x-0 z-30 bg-card border-t border-border">
      <div className="mx-auto max-w-md grid grid-cols-4">
        {items.map(({ to, label, icon: Icon }) => {
          const active = pathname === to;
          return (
            <Link
              key={to}
              to={to}
              className={`flex flex-col items-center gap-1 py-3 text-xs font-medium transition-colors ${
                active ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <Icon className={`h-5 w-5 ${active ? "stroke-[2.5]" : ""}`} />
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
