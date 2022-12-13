import React from "react";
import logo from "../assets/images/logo-dark.png";
import UserProfile from "./UserProfile";
import userProfileImage from "../assets/images/user-1.jpeg";
import SideNavItems from "./SideNavItems";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ContentPasteOutlinedIcon from "@mui/icons-material/ContentPasteOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";

export default function SideNav() {
  const userdetailsprops = {
    name: "Ayushi",
    image: userProfileImage,
    imageHeight: "46",
    imageWidth: "46",
    designation: "Admin Head",
    settingIconStyle: "sidenavIcon",
    logoutIconStyle: "activeIcon",
  };

  const sidenavitemsprops = [
    {
      id: "navigation",
      heading: "NAVIGATION",
      items: [
        {
          id: "Dashboard",
          icon: DashboardOutlinedIcon,
          label: "Dashboard",
          itemsIconstyle: "sidenavIcon",
          counter: 10,
          slug: "dashboard",
        },
      ],
    },
    {
      id: "apps",
      heading: "Apps",
      items: [
        {
          id: "Calender",
          icon: CalendarTodayOutlinedIcon,
          label: "Calender",
          itemsIconstyle: "sidenavIcon",
          counter: 2,
          slug: "calender",
        },
        {
          id: "Chat",
          icon: ForumOutlinedIcon,
          label: "Chat",
          itemsIconstyle: "sidenavIcon",
          counter: 3,
          slug: "chat",
        },
        {
          id: "Email",
          icon: EmailOutlinedIcon,
          label: "Email",
          itemsIconstyle: "sidenavIcon",
          counter: 10,
          slug: "email",
        },
        {
          id: "Tasks",
          icon: ContentPasteOutlinedIcon,
          label: "Tasks",
          itemsIconstyle: "sidenavIcon",
          subMenuItems: {
            items: [
              {
                id: "contactList",
                label: "Contacts",
                counter: 12,
                slug: "contacts",
              },
            ],
          },
        },
        {
          id: "Projects",
          icon: BusinessCenterOutlinedIcon,
          label: "Projects",
          itemsIconstyle: "sidenavIcon",
          subMenuItems: {
            items: [
              {
                id: "contactList",
                label: "ProjectsList",
                icon: BusinessCenterOutlinedIcon,
                itemsIconstyle: "sidenavIcon",
                subMenuItems: {
                  items: [
                    {
                      id: "project",
                      label: "Projec dad",
                      counter: 12,
                      icon: BusinessCenterOutlinedIcon,
                      itemsIconstyle: "sidenavIcon",
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          id: "Contacts",
          icon: AutoStoriesOutlinedIcon,
          label: "Contacts",
          itemsIconstyle: "sidenavIcon",
          counter: 12,
        },
      ],
    },
    {
      id: "apps",
      heading: "Apps",
      items: [
        {
          id: "Calender",
          icon: CalendarTodayOutlinedIcon,
          label: "Calender",
          itemsIconstyle: "sidenavIcon",
          counter: 2,
        },
        {
          id: "Chat",
          icon: ForumOutlinedIcon,
          label: "Chat",
          itemsIconstyle: "sidenavIcon",
          counter: 3,
        },
        {
          id: "Email",
          icon: EmailOutlinedIcon,
          label: "Email",
          itemsIconstyle: "sidenavIcon",
          counter: 10,
        },
        {
          id: "Tasks",
          icon: ContentPasteOutlinedIcon,
          label: "Tasks",
          itemsIconstyle: "sidenavIcon",
          subMenuItems: {
            items: [
              {
                id: "contactList",
                label: "Contacts",
                counter: 12,
              },
            ],
          },
        },
        {
          id: "Projects",
          icon: BusinessCenterOutlinedIcon,
          label: "Projects",
          itemsIconstyle: "sidenavIcon",
          subMenuItems: {
            items: [
              {
                id: "contactList",
                label: "ProjectsList",
                icon: BusinessCenterOutlinedIcon,
                itemsIconstyle: "sidenavIcon",
                subMenuItems: {
                  items: [
                    {
                      id: "project",
                      label: "Projec dad",
                      counter: 12,
                      icon: BusinessCenterOutlinedIcon,
                      itemsIconstyle: "sidenavIcon",
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          id: "Contacts",
          icon: AutoStoriesOutlinedIcon,
          label: "Contacts",
          itemsIconstyle: "sidenavIcon",
          counter: 12,
        },
      ],
    },
  ];
  return (
    <div className="sidenavConatiner flex flex-col">
      <div className="adminLogo flex justify-center py-4">
        <img src={logo} alt="" />
      </div>
      <div className="adminDetails flex justify-center">
        <UserProfile {...userdetailsprops} />
      </div>
      <nav className="sidenavItems">
        {sidenavitemsprops.map((item) => {
          return <SideNavItems {...item} />;
        })}
      </nav>
    </div>
  );
}
