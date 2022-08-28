import Image from "next/image";
import F1 from "../assets/svg/bg1.svg";
import List from "./List";

import { FData2 } from "./Data.jsx";

const Feature2 = () => {
  return (
    <div className="wrapper mt-16">
      <div className="grid md:grid-cols-2 py-6">
        <div>
          <h2>Developer Experience</h2>
          <p className="text-2 py-4">
            Equivalent to Ethereum, no protocol level knowledge required, no
            token deposits, fees or permissions
          </p>
          <div>
            {FData2.map((val) => (
              <List key={val.id} data={val} />
            ))}
          </div>
        </div>

        <div className="p-6 md:ml-6 w-[90%]">
          <Image src={F1} alt="man" />
        </div>
      </div>
    </div>
  );
};

export default Feature2;
