import RouteMiddleware from "@/presentation/components/features/middleware";
import Footer from "@/presentation/components/ui/footer";
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
        <Footer>
          <Footer.WrapperContent>
            <Footer.WrapperContent.Title></Footer.WrapperContent.Title>
            <Footer.WrapperContent.ContentList></Footer.WrapperContent.ContentList>
          </Footer.WrapperContent>
          <Footer.CopyRight></Footer.CopyRight>
        </Footer>
      </RouteMiddleware>
    </div>
  )
}
