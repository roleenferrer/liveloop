import React from "react";
import Map from "./Map.jsx";
import NavMobile from "./NavMobile.js";
import List from "@mui/icons-material/List";
import { IconButton, Menu } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { blueGrey } from "@mui/material/colors";

/* Makes the whole page the map with a navigation bar on top
 * By clicking on the list icon, a drop down menu appears showing
 * paths to the features implemented for this application
 */
const HomeMobile = ({ location, zoom }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const useStyles = makeStyles({
    menubar: {
      backgroundColor: blueGrey[900],
      display: "flex",
    },
  });
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.menubar}>
        <IconButton
          size="small"
          onClick={handleClick}
          aria-controls={open ? "drop-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <List style={{ fontSize: 40, color: "white" }} />
        </IconButton>
        {/* The dropdown menu settings */}
        <Menu
          anchorEl={anchorEl}
          id="drop-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.40))",
              mt: 1.25,
              backgroundColor: blueGrey[900],
              "& .MuiAvatar-root": {
                width: 30,
                height: 3,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                left: 14,
                width: 10,
                height: 10,
                bgcolor: blueGrey[900],
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
        >
          {/* Open the mobile version of the navigation */}
          <NavMobile />
        </Menu>
      </div>
      <div>
        <Map location={location} zoomLevel={zoom}></Map>
      </div>
    </React.Fragment>
  );
};

export default HomeMobile;
