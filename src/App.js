import React, { useContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import "../src/App.css";
import { PATHS } from "./constants/constants";
import Footer from "./footer";
import Header from "./header";
import AboutUs from "./pages/about-us";
import Calender from "./pages/calender";
import Chat from "./pages/chat";
import Contact from "./pages/contact-us";
import Dashboard from "./pages/dashboard/dashboard";
import Help from "./pages/help";
import SideNav from "./side-nav";

function App() {
  return (
    <div className="mainContainer flex min-h-screen">
      <div className="sidenav w-60">
        <SideNav />
      </div>
      <div className="dashboard flex-1  bg-body-background">
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path={PATHS.PATH_DASHBOARD} element={<Dashboard />} />
            <Route path={PATHS.PATH_CHAT} element={<Chat />} />
            <Route path={PATHS.PATH_CALENDER} element={<Calender />} />
            <Route path={PATHS.PATH_ABOUT_US} element={<AboutUs />} />
            <Route path={PATHS.PATH_HELP} element={<Help />} />
            <Route path={PATHS.PATH_CONTACT} element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
