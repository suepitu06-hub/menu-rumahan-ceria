import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";

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
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

const queryClient = new QueryClient();

function RootComponent() {
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
      <BottomNav />
    </QueryClientProvider>
  );
}
