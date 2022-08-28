import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import Image from "next/image";

import BG from "../assets/svg/bg.svg";

const Hero = () => {
  return (
    <div className="wrapper">
      <div className="h-[100px]"></div>
      <div className="grid md:grid-cols-2 place-items-center xl:mt-10">
        <div>
          <h1 className="dark:text-white mt-6 md:mt-0">
            Bringing the world to Ethereum
          </h1>
          <p className="text-xl py-6 text-gray-600 dark:text-gray-300">
            Build fast, low cost, Solidity-compatible dApps Launch Ethereum
            dApps that confirm transactions instantly and process thousands of
            transactions per second, far beyond any decentralized blockchain
            platform today.
          </p>
          <div className="mt-6  md:flex gap-6">
            <Link href="#">
              <a className="c-button py-4 px-10 font-semibold">
                Download for Free
              </a>
            </Link>
            <Link href="#">
              <a className="flex items-center mt-8 md:mt-0 gap-2 text-md text-gray-600 dark:text-gray-300">
                <BsGithub /> Visit Likesmeet Social Network
              </a>
            </Link>
          </div>
        </div>

        <div>
          <div className="mt-4 md:mt-0">
            <Image src={BG} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
