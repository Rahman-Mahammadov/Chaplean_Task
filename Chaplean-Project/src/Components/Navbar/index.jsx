import Links from "./Links";
import Logo from "./Logo";

const index = () => {
  return (
    <div className="bg-secondary flex justify-between py-3 items-center max-container padding-x fixed w-full top-0 z-10">
      <Logo />

      <Links />
    </div>
  );
};

export default index;
