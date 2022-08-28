import { BsFillPlayCircleFill } from "react-icons/bs";

const Video = () => {
  return (
    <div className="wrapper">
      <div className="text-center mt-24">
        <p className="text-indigo-500 font-semibold">WATCH A VIDEO</p>
        <h2 className="my-5">Decentralized Finance (DeFi)</h2>
        <p className="text-2 max-w-[600px] mx-auto">
          DeFi is rapidly growing beyond the limits of one chain. CoolBlocks is
          fully compatible with Ethereum assets, apps, and tooling with faster
          speeds, higher throughput, and lower fees.
        </p>

        <div className="w-full min-h-[500px]">
          <div className="min-w-[300px] max-w-[700px] min-h-[400px] max-h-[450px] mx-auto mt-16 relative bg-indigo-300 cursor-pointer aspect-w-16 aspect-h-9 bg-gradient-to-tr from-purple-400 to-indigo-700 rounded-xl grid place-items-center">
            <button className="text-[70px]">
              <BsFillPlayCircleFill />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
