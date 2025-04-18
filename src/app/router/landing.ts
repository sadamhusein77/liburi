import { lazy } from "react";
import LandingLayout from "@/presentation/layouts/layout-landing";

const Home = lazy(() => import("@/presentation/pages/Home"))
const AboutUs = lazy(() => import("@/presentation/pages/AboutUs"))

export const landingRoutes = [
    {
        Component: LandingLayout,
        children: [
            { index: true, Component: Home },
            { path: "about", Component: AboutUs },
        ],
    }
]