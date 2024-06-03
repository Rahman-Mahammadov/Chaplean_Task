import { Outlet } from "react-router-dom";
import {
  Footer,
  LeftSideBar,
  Navbar,
  RightSidebar,
  SubHeader,
} from "../Components";

const Layout = () => {
  return (
    <>
      <Navbar />
      <SubHeader />
      <div className="flex mt-14 pt-4 md:pt-0 ">
        <LeftSideBar className="fixed left-0 top-0 w-60 " />

        <div className="flex-grow ml-60 mr-60 max-[900px]:m-0 bg-primary">
          <Outlet />
        </div>
        <RightSidebar className="fixed right-0 top-0 h-full w-60" />
      </div>

      <Footer />
    </>
  );
};

export default Layout;
