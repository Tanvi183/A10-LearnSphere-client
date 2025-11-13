import React from "react";
import BannerSection from "../components/Home/BannerSection";
import TopCategories from "../components/Home/TopCategories";
import PopularCourses from "../components/Home/PopularCourses";
import AboutUs from "../components/Home/AboutUs";
import TopInstructors from "../components/Home/TopInstructors";
import CoursesSection from "../components/Home/CoursesSection";

const Home = () => {
  return (
    <div>
      <BannerSection></BannerSection>
      <TopCategories></TopCategories>
      <AboutUs></AboutUs>
      <PopularCourses></PopularCourses>
      <TopInstructors></TopInstructors>
      <CoursesSection></CoursesSection>
    </div>
  );
};

export default Home;
