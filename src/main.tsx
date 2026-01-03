import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { landingRoutes } from "./app/router/landing";
import Loader from "./presentation/components/ui/loader";

import "@assets/styles/global.css";
import "./index.css";

const queryClient = new QueryClient();

const router = createBrowserRouter([...landingRoutes]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<Loader />}>
        <RouterProvider router={router} />
      </Suspense>
    </QueryClientProvider>
  </StrictMode>
);
