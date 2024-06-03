import React, { useState } from "react";
import { Box, Drawer, List } from "@mui/material";
import SideBarButton from "../LeftSidebar.jsx/SideBarButton";
import SideLinks from "../LeftSidebar.jsx/SideLinks";
import { LinksArray1 } from "../../constants";

const Menu = () => {
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
          menu
        </h4>
      </div>
      <Drawer anchor={"left"} open={state} onClose={toggleDrawer(false)}>
        <Box
          sx={{ backgroundColor: "#141526", width: 300, height: "100%" }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <>
              <div className=" px-[5%] w-64  pt-10 max-[900px]:w-full">
                <SideBarButton />
                <SideLinks sideLinks={LinksArray1} />
              </div>
            </>
          </List>
        </Box>
      </Drawer>
    </React.Fragment>
  );
};

export default Menu;
