import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import { Suspense } from 'react';

import './index.css';
import '@assets/styles/global.css';
import { landingRoutes } from './app/router/landing';
import Loader from './presentation/components/ui/loader';

const router = createBrowserRouter([
 ...landingRoutes
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Suspense fallback={<Loader />}>
        <RouterProvider router={router} />
      </Suspense>
  </StrictMode>,
)
