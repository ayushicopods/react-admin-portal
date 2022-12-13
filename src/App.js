import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import "../src/App.css";
import { queryParameterContext } from "./context/header";
import Footer from "./footer";
import Header from "./header";
import Calender from "./pages/calender";
import Chat from "./pages/chat";
import Dashboard from "./pages/dashboard";
import SideNav from "./side-nav";

function App() {
  return (
    <BrowserRouter>
      <div className="mainContainer flex min-h-screen">
        <div className="sidenav w-60">
          <SideNav />
        </div>
        <div className="dashboard flex-1  bg-body-background">
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" element={<Dashboard />}></Route>
              <Route path="/dashboard" element={<Dashboard />}></Route>
              <Route path="/chat" element={<Chat />}></Route>
              <Route path="/calender" element={<Calender />}></Route>
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
