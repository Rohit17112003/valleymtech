"use client"
import Hero from "./Hero";
import FlashDealsSlider from "./FlashDealSlider";
import FeaturedSlider from "./FeaturedSlider";
import Categories from "./Categories";
import FeatureDealSlider from "./FeatureDealSlider";
import ClearanceSale from "./ClearanceSale";
import TopSellerSlider from "./TopSellerSlider";
const MainHomePage = () => {
  const design = (
    <>
      <Hero />
    <FlashDealsSlider/>
    <FeaturedSlider/>
    <Categories/>
    <FeatureDealSlider/>
    <ClearanceSale/>
    <TopSellerSlider/>
    </>
  );
  return design;
};
export default MainHomePage;
