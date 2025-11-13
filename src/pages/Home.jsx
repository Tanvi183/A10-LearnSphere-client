import React from "react";
import BannerSection from "../components/Home/BannerSection";
import TopCategories from "../components/Home/TopCategories";
import AboutUs from "../components/Home/AboutUs";
import TopInstructors from "../components/Home/TopInstructors";
import CoursesSection from "../components/Home/CoursesSection";

const latestProductsPromise = fetch(
  "http://localhost:5000/latest-courses"
).then((res) => res.json());

const Home = () => {
  return (
    <div>
      <BannerSection></BannerSection>
      <TopCategories></TopCategories>
      <AboutUs></AboutUs>
      <TopInstructors></TopInstructors>
      <CoursesSection
        latestProductsPromise={latestProductsPromise}
      ></CoursesSection>
    </div>
  );
};

export default Home;
