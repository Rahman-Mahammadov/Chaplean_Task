/* eslint-disable no-unused-vars */
import { useState } from "react";
import { NavLink } from "react-router-dom";
import hamburger from "../../assets/images/hamburger.png";
import closeButton from "../../assets/images/closeButton.png";
import Button from "../Button";
export const LinksArray = [
  {
    id: 1,
    linkText: "What is Chaplean",
    route: "/",
  },
  {
    id: 2,
    linkText: "Our difference",
    route: "/ourdifference",
  },
  {
    id: 3,
    linkText: "Pricing",
    route: "/pricing",
  },
  {
    id: 4,
    linkText: "Docs",
    route: "/docs",
  },
];
const Links = () => {
  const [linksHidden, setLinksHidden] = useState(false);

  const toggleNav = () => {
    setLinksHidden(!linksHidden);
  };

  return (
    <div>
      <div
        className={`flex justify-end items-center bg-secondary navbar-responsive ${
          !linksHidden && "max-[824px]:translate-x-full"
        } transition-all`}
      >
        <div>
          <ul className="flex gap-9 max-[824px]:flex-col max-[824px]:items-center max-[824px]:gap-4">
            {LinksArray.map((link) => {
              return (
                <>
                  <div key={link.id}>
                    <div onClick={toggleNav}>
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
                    </div>
                  </div>
                </>
              );
            })}
          </ul>
        </div>
        <div className="ml-9 max-[824px]:ml-0 max-[824px]:mt-4">
          <Button bg={"bg-primaryBlue"} text={"Contact us"} />
        </div>

        <img
          src={closeButton}
          width={30}
          height={30}
          alt="close"
          className="absolute top-5 right-5 cursor-pointer min-[824px]:hidden"
          onClick={toggleNav}
        />
      </div>

      <img
        src={hamburger}
        alt="hamburger"
        width={40}
        height={50}
        className="min-[824px]:hidden cursor-pointer"
        onClick={toggleNav}
      />
    </div>
  );
};

export default Links;
