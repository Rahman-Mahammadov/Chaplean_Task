import Menu from "./Menu";
import Search from "./Search";

const index = () => {
  return (
    <div className="bg-gray-600 w-full text-xs font-poppins fixed top-16 text-link min-[900px]:hidden flex justify-between padding-x py-2">
      <Menu />
      <Search />
    </div>
  );
};

export default index;
