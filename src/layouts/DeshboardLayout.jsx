import React from "react";
import Header from "../components/Shared/Header";
import { Outlet } from "react-router";
import Footer from "../components/Shared/Footer";
import ScrollToTopButton from "../components/Shared/ScrollToTopButton";
import Banner from "../components/Dashboard/Banner";
import Sidebar from "../components/Dashboard/Sidebar";

const DeshboardLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-base">
      <Header />

      <Banner />

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>

      <Footer />

      <ScrollToTopButton />
    </div>
  );
};

export default DeshboardLayout;
