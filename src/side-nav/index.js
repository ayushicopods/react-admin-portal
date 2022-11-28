import React from "react";
import logo from "../assets/images/logo-dark.png";
import UserProfile from "./UserProfile";
import userProfileImage from "../assets/images/user-1.jpeg";

export default function SideNav() {
  const props = {
    name: "Ayushi",
    image: userProfileImage,
    designation: "Admin Head",
  };
  return (
    <div className="sidenavConatiner flex flex-col">
      <div className="adminLogo flex justify-center py-4">
        <img src={logo} alt="" />
      </div>
      <div className="adminDetails flex justify-center">
        <UserProfile {...props} />
      </div>
      <div className="sidenavItems"></div>
    </div>
  );
}
