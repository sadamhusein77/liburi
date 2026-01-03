import { lazy } from "react";
import LandingLayout from "@/presentation/layouts/layout-landing";

const Home = lazy(() => import("@/presentation/pages/Home"))
const AboutUs = lazy(() => import("@/presentation/pages/AboutUs"))
const Detail = lazy(() => import("@/presentation/pages/Detail"))
const Booking = lazy(() => import("@/presentation/pages/Booking"))
const BrowseBy = lazy(() => import("@/presentation/pages/BrowseBy"))
const Stories = lazy(() => import("@/presentation/pages/Stories"))
const StoryDetail = lazy(() => import("@/presentation/pages/StoryDetail"))
const Agents = lazy(() => import("@/presentation/pages/Agents"))
const CategoryDetail = lazy(() => import("@/presentation/pages/CategoryDetail"))
const UnderDevelopment = lazy(() => import("@/presentation/pages/UnderDevelopment"))

export const landingRoutes = [
    {
        Component: LandingLayout,
        children: [
            { index: true, Component: Home },
            { path: "about", Component: AboutUs },
            { path: "detail/:id", Component: Detail },
            { path: "booking", Component: Booking },
            { path: "browse-by", Component: BrowseBy },
            { path: "category/:slug", Component: CategoryDetail },
            { path: "stories", Component: Stories },
            { path: "stories/:slug", Component: StoryDetail },
            { path: "agents", Component: Agents },
            { path: "under-development", Component: UnderDevelopment },
        ],
    }
]