import React from "react";
import Header from "./components/Header/page";
import TopFold from "./components/TopFold/page";
import Brand from "./components/Brand/page";
import Footer from "./components/Footer/page";
import InfoSection from "./components/InfoSection/page";
import TrendingNfts from "./components/TrendingNfts/page";

const page = () => {
  return (
    <div>
      <Header />
      <TopFold />
      <Brand />
      <TrendingNfts />
      <InfoSection />
      <Footer />
    </div>
  );
};

export default page;
