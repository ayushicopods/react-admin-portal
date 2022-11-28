import React from "react";
import "../src/App.css";
import SideNav from "./side-nav";

function App() {
  return (
    <div className="mainContainer flex">
      <div className="sidenav w-60">
        <SideNav />
      </div>
      <div className="dashboard flex-1 card h-screen"></div>
    </div>
  );
}

export default App;
