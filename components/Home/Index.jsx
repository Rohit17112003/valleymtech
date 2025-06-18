"use client"
import Hero from "./Hero";
import FlashDealsSlider from "./FlashDealSlider";
import FeaturedSlider from "./FeaturedSlider";

const MainHomePage = () => {
  const design = (
    <>
      <Hero />
    <FlashDealsSlider/>
    <FeaturedSlider/>
    </>
  );
  return design;
};
export default MainHomePage;
