import React from "react";
import BannerSection from "../components/Home/BannerSection";
import TopCategories from "../components/Home/TopCategories";
import AboutUs from "../components/Home/AboutUs";
import TopInstructors from "../components/Home/TopInstructors";
import CoursesSection from "../components/Home/CoursesSection";
import useTitle from "../hooks/useTitle";
import axios from "axios";

const productsPromise = axios.get("http://localhost:5000/latest-courses");

const Home = () => {
  useTitle("Home");

  return (
    <div>
      <BannerSection></BannerSection>
      <TopCategories></TopCategories>
      <AboutUs></AboutUs>
      <TopInstructors></TopInstructors>
      <CoursesSection productsPromise={productsPromise}></CoursesSection>
    </div>
  );
};

export default Home;
