import React from "react";
import Navbar from "../Shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="mb-16">
        <Navbar />
      </div>
      <div className="myContainer">
        <Outlet />
      </div>
      <div className="mt-[auto!important]">
        <Footer />
      </div>
      <Toaster />
    </div>
  );
};

export default MainLayout;
