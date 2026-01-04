import React from "react";
import BannerSection from "../components/Home/BannerSection";
import TopCategories from "../components/Home/TopCategories";
import AboutUs from "../components/Home/AboutUs";
import TopInstructors from "../components/Home/TopInstructors";
import CoursesSection from "../components/Home/CoursesSection";
import useTitle from "../hooks/useTitle";
import PartnersMarquee from "./PartnersMarquee";
import StatsSection from "../components/Home/StatsSection";
import NewsBlogsSection from "../components/Home/NewsBlogsSection";
import NewsletterSection from "../components/Home/NewsletterSection";
import FaqSection from "../components/Home/FaqSection";
import TestimonialSection from "../components/Home/TestimonialSection";

const Home = () => {
  useTitle("Home");

  return (
    <div>
      <BannerSection></BannerSection>
      <TopCategories></TopCategories>
      <PartnersMarquee></PartnersMarquee>
      <AboutUs></AboutUs>
      <CoursesSection></CoursesSection>
      <TopInstructors></TopInstructors>
      <StatsSection></StatsSection>
      <FaqSection></FaqSection>
      <TestimonialSection></TestimonialSection>
      <NewsBlogsSection></NewsBlogsSection>
      <NewsletterSection></NewsletterSection>
    </div>
  );
};

export default Home;
