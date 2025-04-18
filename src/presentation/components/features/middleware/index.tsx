// src/middleware/RouteMiddleware.tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router';

const RouteMiddleware = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  useEffect(() => {
    // Logic that runs on every page refresh or navigation
    console.log('Page loaded at:', location.pathname);

    // Example: auth check, track analytics, etc.
    // checkToken(); or analytics.track(location.pathname);

  }, [location.pathname]);

  return <>{children}</>;
};

export default RouteMiddleware;
