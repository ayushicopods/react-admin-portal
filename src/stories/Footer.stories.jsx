import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "../footer";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Footer",
  component: Footer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <div style={{ backgroundColor: "#ebeff2" }}>
    <Router>
      <Footer />
    </Router>
  </div>
);
export const FooterComponent = Template.bind({});
