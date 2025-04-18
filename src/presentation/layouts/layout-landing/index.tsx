import RouteMiddleware from "@/presentation/components/features/middleware";
import Navbar from "@/presentation/components/ui/navbar";
import { Outlet } from "react-router";

export default function LandingLayout() {
  return (
    <div>
      <RouteMiddleware>
        <Navbar>
          <Navbar.Title />
          <Navbar.Nav />
        </Navbar>
        <Outlet />
      </RouteMiddleware>
    </div>
  )
}
