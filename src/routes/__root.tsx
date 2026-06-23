import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

import appCss from "../styles.css?url";
import { BottomNav } from "@/components/BottomNav";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center">
        <div className="text-6xl mb-3">🍳</div>
        <h1 className="text-xl font-semibold">Halaman tidak ditemukan</h1>
      </div>
    </div>
  );
}

function ErrorComponent({ error }: { error: Error }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 text-center">
      <div>
        <h1 className="text-xl font-semibold">Terjadi kesalahan</h1>
        <p className="text-sm text-muted-foreground mt-2">{error.message}</p>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=1" },
      { title: "Dapur Planner" },
      { name: "description", content: "Perencana menu mingguan keluarga Indonesia, 100% offline." },
      { name: "theme-color", content: "#7BC196" },
      { property: "og:title", content: "Dapur Planner" },
      { name: "twitter:title", content: "Dapur Planner" },
      { property: "og:description", content: "Perencana menu mingguan keluarga Indonesia, 100% offline." },
      { name: "twitter:description", content: "Perencana menu mingguan keluarga Indonesia, 100% offline." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/1fbd93d2-f0f4-49cc-95a3-b0e8244b0bf5/id-preview-3ad709bd--8dd0c689-6fc8-441e-ba44-43c18329f201.lovable.app-1782195514099.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/1fbd93d2-f0f4-49cc-95a3-b0e8244b0bf5/id-preview-3ad709bd--8dd0c689-6fc8-441e-ba44-43c18329f201.lovable.app-1782195514099.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

const queryClient = new QueryClient();

function RootComponent() {
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
      <BottomNav />
    </QueryClientProvider>
  );
}
