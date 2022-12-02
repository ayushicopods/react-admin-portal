import React from "react";
import "../src/App.css";
import Header from "./header";
import SideNav from "./side-nav";

function App() {
  return (
    <div className="mainContainer flex min-h-screen">
      <div className="sidenav w-60">
        <SideNav />
      </div>
      <div className="dashboard flex-1 bg-body-background">
        <Header />
      </div>
    </div>
  );
}

export default App;
