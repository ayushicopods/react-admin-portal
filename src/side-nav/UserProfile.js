import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { Tooltip } from "@mui/material";
import "./sidenav.css";
import { CLICK_HERE, PROFILE_PICTURE } from "../constants/constants";

function UserProfile({
  image,
  imageHeight,
  imageWidth,
  name,
  designation,
  settingIconStyle,
  logoutIconStyle,
}) {
  return (
    <div className="userProfile">
      <div className="userProfileImage">
        <img
          src={image}
          tabIndex="0"
          alt={PROFILE_PICTURE + name}
          width={imageWidth}
          height={imageHeight}
        />
      </div>
      <p className="userName" tabIndex="0" aria-label={"user" + name}>
        {name}
      </p>
      <p
        className="userDesignation"
        tabIndex="0"
        aria-label={"logged in as " + designation}
      >
        {designation}
      </p>
      <div className="iconsContainer">
        <a href="" tabIndex="0" aria-label={CLICK_HERE + "for user setting"}>
          <Tooltip title="setting">
            <SettingsIcon className={settingIconStyle} />
          </Tooltip>
        </a>
        <a href="" aria-label={CLICK_HERE + "to log out"} tabIndex="0">
          <Tooltip title="logout">
            <PowerSettingsNewIcon className={logoutIconStyle} />
          </Tooltip>
        </a>
      </div>
    </div>
  );
}

export default UserProfile;
