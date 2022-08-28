import { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const Dropdown = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <p
        onClick={() => setToggle(!toggle)}
        className="text-semibold bg-gray-800 p-4 rounded-lg text-xl cursor-pointer flex items-center justify-between"
      >
        Lorem ipsum dolor sit amet.
        <spqn className="text-indigo-400">
          {toggle ? <BsChevronUp /> : <BsChevronDown />}
        </spqn>
      </p>
      <p className={`text-gray-400 p-4 ${toggle ? "hidden" : ""}`}>
        Yes, Offset carbon footprints for Polygon, and buy extra credits to
        become carbon negative.
      </p>
    </div>
  );
};

export default Dropdown;
