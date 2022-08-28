import Card from "./Card";
import { CardData } from "./Data";

const Collectibles = () => {
  return (
    <div className="wrapper py-16">
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

      {/* cards */}
      <div className="md:flex gap-8 mt-16">
        {CardData.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Collectibles;
