import React from "react";
import PortfolioCard from "../components/PortfolioCard/index";
import portfolioContent from "../utils/portfolioContent";

export default function Portfolio() {
  return (
    <>
      <div className="flex flex-col items-center pt-16 px-64 mb-24">
        <h2 className="text-3xl font-bold">Portfolio</h2>
        <PortfolioCard portfolioContent={portfolioContent} />
      </div>
    </>
  );
}
