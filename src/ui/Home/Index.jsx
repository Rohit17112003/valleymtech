"use client"
import FlashDealsSlider from "./FlashDealSlider";
import FeaturedSlider from "./FeaturedSlider";
import Categories from "./Categories";
import FeatureDealSlider from "./FeatureDealSlider";
import ClearanceSale from "./ClearanceSale";
import TopSellerSlider from "./TopSellerSlider";
import LatestProduct from "./LatestProducts";
import NewArrivals from "./NewArrivals";
import BestSelling from "./BestSelling";
import Brands from "./Brands";
import ProductSlider from "./ProductSlider";
import Phone from "./Phone";
import Health from "./Health";
import Electronics from "./Electronics";
import HomeKichen from "./HomeKichen";
import MansFasion from "./MansFasion";
import KidsFashion from "./KidsFashion";
import FooterHero from "./FooterHero";
const MainHomePage = () => {
  const design = (
    <>
    <FlashDealsSlider/>
    <FeaturedSlider/>
    <Categories/>
    <FeatureDealSlider/>
    <ClearanceSale/>
    <TopSellerSlider/>
    <LatestProduct/>
    <NewArrivals/>
    <BestSelling/> 
    <Brands/>
    <ProductSlider/>
    <Phone/>
    <Health/>
    <Electronics/>
    <HomeKichen/>
    <MansFasion/>
    <KidsFashion/>
    <FooterHero/>
    </>
  );
  return design;
};
export default MainHomePage;
