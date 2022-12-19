import React from "react";
import SideNavItems from "../side-nav/SideNavItems";

import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ContentPasteOutlinedIcon from "@mui/icons-material/ContentPasteOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import { BrowserRouter as Router } from "react-router-dom";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Side Nav ",
  component: SideNavItems,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const TemplateOne = (args) => (
  <div>
    {sidenavitemsprops.map((item, index) => (
      <Router>
        <SideNavItems key={index} {...item} {...args} />
      </Router>
    ))}
  </div>
);

const TemplateTwo = (args) => (
  <div
    style={{
      width: "250px",
    }}
  >
    {sidenavitemsprops.map((item, index) => (
      <Router>
        <SideNavItems key={index} {...item} {...args} />
      </Router>
    ))}
  </div>
);
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
        subMenuItems: {
          items: [
            {
              id: "contactList",
              label: "ProjectsList",
              counter: 12,
            },
          ],
        },
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
                    label: "Projecd",
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

export const Default = TemplateOne.bind({});
export const WithWidth = TemplateTwo.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
