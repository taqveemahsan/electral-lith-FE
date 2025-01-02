import React from "react";
import Hero from "../Investor/Hero"
import WhyInvest from "../Investor/WhyInvest"
import MarketOpportunity from "../Investor/MarketOpportunity"
import KeyIndicatore from "../Investor/KeyIndicators"
import Investment from "../Investor/Investment"
const Investor = () => {
  return (
    <div>
      <main>
        <Hero />
        <WhyInvest />
        <MarketOpportunity />
        <KeyIndicatore />
        <Investment />
      </main>
    </div>
  );
};

export default Investor;
