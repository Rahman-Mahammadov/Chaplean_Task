import { Button } from "..";
import Logo from "../Navbar/Logo";
import { LinksArray } from "../Navbar/Links";
import { NavLink } from "react-router-dom";
import { RiDownload2Fill } from "react-icons/ri";

const index = () => {
  return (
    <div className="flex flex-col-reverse mt-48">
      <div className="bg-gray-600 w-full z-20 absolute padding-x pt-10  ">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-12">
            <Logo />

            <ul>
              {LinksArray.map((link) => {
                return (
                  <>
                    <div></div>
                    <NavLink
                      to={link.route}
                      className={({ isActive, isPending, isTransitioning }) =>
                        [
                          `text-sm font-poppins  ${
                            isActive ? "text-primaryBlue" : "text-link"
                          } `,
                          //   isTransitioning ? "transition-all" : "",
                        ].join(" ")
                      }
                    >
                      {link.linkText}
                    </NavLink>
                  </>
                );
              })}
            </ul>
          </div>
          <Button
            bg={"bg-primary hover:bg-primaryBlue transition-all"}
            color={"text-text hover:text-black"}
            text={
              <div className="flex items-center gap-3 px-2 py-2 duration-300">
                <RiDownload2Fill />

                <h2>Download</h2>
              </div>
            }
          />
        </div>
      </div>
      <p className="bg-primary w-full p-0 z-20 text-text text-xs text-center">
        Privacy & Policy - Cookies
      </p>
    </div>
  );
};

export default index;
