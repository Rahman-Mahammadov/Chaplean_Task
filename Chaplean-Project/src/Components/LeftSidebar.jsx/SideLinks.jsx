/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import arrow from "../../assets/images/arrow.png";

const SideLinks = (props) => {
  const LinksArray = [
    {
      id: 1,
      menu: "Getting Started",
      subMenus: ["Installation", "Project Structure"],
      hasSubmenus: false,
    },
    {
      id: 2,
      menu: "Building Your Application",
      subMenus: ["Routing", "Data Fetching", "Rendering"],
      hasSubmenus: true,
    },
  ];
  return (
    <>
      {props.sideLinks.map((links) => {
        return (
          <>
            <div className="font-poppins text-xs text-link mt-5 ">
              <h2 className="font-semibold mb-5 cursor-pointer">
                {links.menu}
              </h2>
              <ul>
                {links.subMenus.map((link) => {
                  return (
                    <>
                      <div className="flex justify-between mb-3 items-center max-[900px]:justify-between ">
                        <li className="text-sm text-[#BBBBBB] hover:text-white cursor-pointer">
                          {link}
                        </li>
                        {links.hasSubmenus && (
                          <>
                            <div className="w-2 h-3 cursor-pointer">
                              <img
                                src={arrow}
                                alt="arrow"
                                className="w-full h-full"
                              />
                            </div>
                          </>
                        )}
                      </div>
                    </>
                  );
                })}
              </ul>
            </div>
          </>
        );
      })}
    </>
  );
};

export default SideLinks;
