import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Shared/Header";
import Footer from "../components/Shared/Footer";

const MainLayout = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
