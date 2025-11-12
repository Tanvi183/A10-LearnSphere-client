import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Shared/Header";
import Footer from "../components/Shared/Footer";
import ScrollToTopButton from "../components/Shared/ScrollToTopButton";

const MainLayout = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
      <ScrollToTopButton></ScrollToTopButton>
    </div>
  );
};

export default MainLayout;
