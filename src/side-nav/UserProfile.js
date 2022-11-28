import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import "./sidenav.css";
import { Icon } from "@mui/material";

function UserProfile({ image, name, designation }) {
  return (
    <div className="userProfile">
      <div className="userProfileImage">
        <img src={image} alt="" width={46} height={46} />
      </div>
      <p className="userName">{name}</p>
      <p className="userDesignation">{designation}</p>
      <div className="iconsContainer">
        <a href="">
          <SettingsIcon style={{ fontSize: 15, color: "#98a6ad" }} />
        </a>
        <a href="">
          <PowerSettingsNewIcon style={{ fontSize: 15, color: "#74b7f7" }} />
        </a>
      </div>
    </div>
  );
}

export default UserProfile;
