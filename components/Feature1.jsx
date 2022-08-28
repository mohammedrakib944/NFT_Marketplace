import Image from "next/image";
import F1 from "../assets/svg/bg3.svg";
import List from "./List";

import { FData } from "./Data.jsx";

const Feature1 = () => {
  return (
    <div className="wrapper">
      <div className="grid md:grid-cols-2 py-6">
        <div className="p-6 md:ml-6 w-[90%]">
          <Image src={F1} alt="man" />
        </div>
        <div>
          <h2>Bringing the world to Ethereum</h2>
          <p className="text-2 py-4">
            We believes in Web3 for all. CoolBlocks is a decentralised Ethereum
            scaling platform that enables developers to build scalable
            user-friendly dApps with low transaction fees without ever
            sacrificing on security.
          </p>
          <div>
            {FData.map((val) => (
              <List key={val.id} data={val} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature1;
