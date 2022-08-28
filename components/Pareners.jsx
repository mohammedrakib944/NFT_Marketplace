import { PartnersData } from "./Data.jsx";
import Image from "next/image";

const Pareners = () => {
  return (
    <div className="wrapper text-center">
      <p className="mt-24 text-xl text-bold text-center text-gray-700 dark:text-white">
        Trusted by <span className="text-indigo-500">2000+</span> customers
        worldwide
      </p>
      <div className="flex flex-wrap justify-center gap-5 mt-4 md:justify-around">
        {PartnersData.map((val) => (
          <Image
            key={val.id}
            src={val.img}
            alt="man"
            width="100px"
            height="100%"
            className="dark:invert"
          />
        ))}
      </div>

      <div className="text-center">
        <p className="text-indigo-500 font-semibold uppercase mt-12">
          COOLBLOCKS IS SOLIDITY-COMPATIBLE. ALL OF YOUR FAVORITE TOOLS LIKE
          REMIX, TRUFFLE, AND TENDERLY WORK OUT OF THE BOX.
        </p>
        <h2 className="py-4">Build Ethereum dApps Without Limits</h2>
        <p className="max-w-[580px] mx-auto text-2">
          Lowest costs to deploy contracts Deploying smart contracts on
          CoolBlocks cost just a tenth of what they cost on Ethereum. High gas
          fees, front-running, and other adverse effects of slow smart contract
          blockchains are now a thing of the past.
        </p>
      </div>
      <div className="h-24"></div>
    </div>
  );
};

export default Pareners;
