"use client"
import Hero from "./Hero";
import FlashDealsSlider from "./FlashDealSlider";
import FeaturedSlider from "./FeaturedSlider";
import Categories from "./Categories";
import FeatureDealSlider from "./FeatureDealSlider";
import ClearanceSale from "./ClearanceSale";
import TopSellerSlider from "./TopSellerSlider";
import LatestProduct from "./LatestProducts";
import NewArrivals from "./NewArrivals";
import BestSelling from "./BestSelling";
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
    <LatestProduct/>
    <NewArrivals/>
    <BestSelling/>
    </>
  );
  return design;
};
export default MainHomePage;
