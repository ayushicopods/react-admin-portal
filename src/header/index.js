import React from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import "./header.css";
import userProfileImage from "../assets/images/user-1.jpeg";
import { CLICK_HERE, PROFILE_PICTURE } from "../constants/constants";

function Header({
  UserName,
  UserProfilePicture,
  Width,
  Height,
  headerHeading,
}) {
  return (
    <header
      className="headerContainer"
      tabIndex="0"
      aria-label={`you are under header`}
    >
      <h1 className="headerLeft">
        {headerHeading ? headerHeading : "Dashboard"}
      </h1>

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
  );
}

export default Header;
