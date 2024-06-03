import SideLinks from "../LeftSidebar.jsx/SideLinks";
import { LinksArray2 } from "../../constants";
import searchIcon from "../../assets/images/iconamoon_search-light.png";

const index = () => {
  return (
    <div className="right-0 bg-primary h-screen pt-10 pr-[2%] w-64 fixed max-[900px]:translate-x-full transition-all">
      <div className="w-full flex justify-start relative">
        <input
          type="text"
          className="bg-gray-600 placeholder-white py-1 px-2 pl-8 outline-none rounded-full text-link w-full"
          placeholder="Search"
        />
        <img
          src={searchIcon}
          alt="search"
          className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white"
        />
      </div>
      <SideLinks sideLinks={LinksArray2} />
    </div>
  );
};

export default index;
