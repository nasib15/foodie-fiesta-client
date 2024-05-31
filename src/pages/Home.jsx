import React from "react";
import Banner from "../components/Banner";
import FeaturedSection from "../components/FeaturedSection";
import ReviewSection from "../components/ReviewSection";
import FeedbackSection from "../components/FeedbackSection";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>FFiesta | Home</title>
      </Helmet>
      <Banner></Banner>
      <FeaturedSection></FeaturedSection>
      <ReviewSection></ReviewSection>
      <FeedbackSection></FeedbackSection>
    </div>
  );
};

export default Home;
