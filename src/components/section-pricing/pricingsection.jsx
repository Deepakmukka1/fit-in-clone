import React, { useState } from "react";
import PricingCard from "./pricingcard";

const filterData = (data, planName) => {
  return data.filter((plan) => plan.planName === planName)[0];
};

const PricingSection = () => {
  const [pricingDetails, setPricingDetails] = useState([
    {
      planName: "Starter",
      cost: 99,
      costPerDay: 3.3,
      currency: "$",
      avialableFeatures: [
        "Group trainer",
        "Consultation from 10AM - 6PM",
        "Gym access is free",
      ],
      nonAvialableFeatures: ["No diet"],
    },
    {
      planName: "Pro",
      cost: 999,
      costPerDay: 2.7,
      currency: "$",
      avialableFeatures: [
        "Individual trainer",
        "Consultation available 24/7",
        "Gym access is free",
        "Specific diet planned for you",
      ],
      nonAvialableFeatures: [],
    },
  ]);

  return (
    <section
      className="flex flex-col gap-8 bg-white max-w-screen-xl mx-auto p-16 md:px-16 px-4"
      id="pricing"
    >
      <div>
        <h3 className="lg:text-xl text-sm uppercase font-medium">Pricing</h3>
        <h1 className="lg:text-5xl text-3xl text-textprimary-100 font-bold mt-4">
          Fitness without breaking the bank
        </h1>
      </div>
      <div className="mx-auto grid md:grid-cols-2 grid-cols-1 lg:gap-20 gap-8 py-10 lg:w-10/12 w-11/12">
        <PricingCard details={filterData(pricingDetails, "Starter")} />
        <PricingCard details={filterData(pricingDetails, "Pro")} />
      </div>
      <h2 className="sm:text-lg text-center text-textprimary-100 text-sm">
        Prices include all applicable taxes. You can cancel anytime.
      </h2>
    </section>
  );
};

export default PricingSection;
