import React, { useContext, useState } from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import "./header.css";
import userProfileImage from "../assets/images/user-1.jpeg";
import { CLICK_HERE, PROFILE_PICTURE } from "../constants/constants";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Logout from "@mui/icons-material/Logout";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { headerContext } from "../context/header";

function Header({ UserName, UserProfilePicture, Width, Height }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const { headerTitle } = useContext(headerContext);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    console.log(event.currentTarget);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <header
        className="headerContainer"
        tabIndex="0"
        aria-label={`you are under header`}
      >
        <h1 className="headerLeft">{headerTitle}</h1>

        <ul className="headerRight">
          <li
            className="searchField"
            tabIndex="0"
            aria-label={`${CLICK_HERE} to see notification`}
          >
            <form>
              <input
                placeholder="Search..."
                type="text"
                size="15"
                autoFocus
                aria-label={`type something to search globally`}
              />
              <button type="submit" tabIndex="-1">
                <SearchIcon sx={{ color: "#6d757d", fontSize: "14.4px" }} />
              </button>
            </form>
          </li>
          <li tabIndex="0" aria-label={`${CLICK_HERE} to see notification`}>
            <NotificationsNoneIcon
              sx={{
                fontSize: "28px",
                color: "#6d757d",
                cursor: "pointer",
              }}
            />
          </li>
          <li
            className="userProfileInHeader"
            tabIndex="0"
            aria-label={`${CLICK_HERE} to see user setting`}
            onClick={handleClick}
            onKeyUp={(event) => {
              if (event.keyCode === 13) {
                handleClick(event);
              }
            }}
          >
            <img
              src={userProfileImage}
              width="32"
              height="32"
              alt={PROFILE_PICTURE}
            />
            <span className="userNameInHeader">Nowak</span>
            <ExpandMoreIcon sx={{ cursor: "pointer", fontSize: "14.4px" }} />
          </li>
          <li tabIndex="0" aria-label={`${CLICK_HERE} for header setting`}>
            <SettingsOutlinedIcon
              style={{
                fontSize: "28px",
                color: "#6d757d",
                cursor: "pointer",
                fontWeight: "100",
              }}
            />
          </li>
        </ul>
      </header>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: -22,
          horizontal: 55,
        }}
        PaperProps={{
          sx: {
            minWidth: "10.625rem",
            boxShadow: "0px 0px 35px 0px rgba(154, 161, 171, 0.15);",
          },
        }}
      >
        <h6 className="menuItemHeading">Welcome !</h6>
        <MenuItem className="menuItems" tabIndex={1}>
          <ListItemIcon style={{ minWidth: "1.563rem" }}>
            <PersonOutlineOutlinedIcon fontSize="0.9rem" />
          </ListItemIcon>
          <span className="menuItemLabel"> My Account</span>
        </MenuItem>
        <MenuItem className="menuItems" tabIndex={1}>
          <ListItemIcon style={{ minWidth: "1.563rem" }}>
            <LockOutlinedIcon fontSize="0.9rem" />
          </ListItemIcon>
          <span className="menuItemLabel"> Lock Screen</span>
        </MenuItem>
        <Divider />
        <MenuItem className="menuItems" tabIndex={0}>
          <ListItemIcon style={{ minWidth: "1.563rem" }}>
            <Logout fontSize="0.9rem" />
          </ListItemIcon>
          <span className="menuItemLabel"> Logout</span>
        </MenuItem>
      </Menu>
    </>
  );
}

export default Header;
