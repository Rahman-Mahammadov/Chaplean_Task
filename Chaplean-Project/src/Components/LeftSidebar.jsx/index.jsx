import SideBarButton from "./SideBarButton";
import SideLinks from "./SideLinks";
import { LinksArray1 } from "../../constants";

const index = () => {
  return (
    <div className="h-screen w-64 bg-primary fixed max-[900px]:-translate-x-full max-[900px]:w-screen max-[900px]:h-screen transition-all">
      <div className=" px-[5%] w-64  pt-10 max-[900px]:w-full">
        <SideBarButton />
        <SideLinks sideLinks={LinksArray1} />
      </div>
    </div>
  );
};

export default index;
