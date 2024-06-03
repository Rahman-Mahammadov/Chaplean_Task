import React, { useState } from "react";
import { Box, Drawer, List } from "@mui/material";
import SideLinks from "../LeftSidebar.jsx/SideLinks";
import searchIcon from "../../assets/images/iconamoon_search-light.png";
import { LinksArray2 } from "../../constants";
const Search = () => {
  const [state, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState(open);
  };
  return (
    <React.Fragment>
      <div>
        <h4
          onClick={toggleDrawer(true)}
          style={{
            color: "gainsboro",
            fontFamily: "sans-serif",
            cursor: "pointer",
          }}
        >
          Search
        </h4>
      </div>
      <Drawer anchor={"right"} open={state} onClose={toggleDrawer(false)}>
        <Box
          sx={{ backgroundColor: "#141526", width: 300, height: "100%" }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <div className="pl-6 pt-6">
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
          </List>
        </Box>
      </Drawer>
    </React.Fragment>
  );
};

export default Search;
