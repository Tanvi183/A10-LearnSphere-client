import React from "react";
import BannerSection from "../components/Home/BannerSection";
import TopCategories from "../components/Home/TopCategories";
import PopularCourses from "../components/Home/PopularCourses";
import AboutUs from "../components/Home/AboutUs";

const Home = () => {
  return (
    <div>
      <BannerSection></BannerSection>
      <TopCategories></TopCategories>
      <AboutUs></AboutUs>
      <PopularCourses></PopularCourses>
    </div>
  );
};

export default Home;
