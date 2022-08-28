import React from "react";
import Dropdown from "./Dropdown";

const Faq = () => {
  return (
    <div className="wrapper mt-20">
      <div className="text-center">
        <p className="font-semibold text-indigo-500">
          LEARN WHAT USE CASES BENEFIT MOST BY LEVERAGING THE HIGH-PERFORMANCE
          CAPABILITIES OF AVALANCHE.
        </p>
        <h2 className="py-4">Digital Collectibles</h2>
        <p className="text-2 max-w-[700px] mx-auto">
          Mint your own digital collectibles in seconds for fees less than a
          cent. Digitally prove ownership, and streamline value flow. Create and
          share art, collectibles, and more with all the benefits and none of
          the downside.
        </p>
      </div>

      <div>
        <Dropdown />
      </div>
    </div>
  );
};

export default Faq;
