import { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const Dropdown = ({ data }) => {
  const { question, ans } = data;
  const [toggle, setToggle] = useState(true);
  return (
    <div className="mb-4">
      <p
        onClick={() => setToggle(!toggle)}
        className="text-semibold bg-gray-200 dark:bg-gray-800 p-4 rounded-lg text-xl cursor-pointer flex items-center justify-between"
      >
        {question}
        <spqn className="text-indigo-500">
          {toggle ? <BsChevronUp /> : <BsChevronDown />}
        </spqn>
      </p>
      <p
        className={`text-gray-600 dark:text-gray-400 p-4 ${
          toggle ? "hidden" : ""
        }`}
      >
        {ans}
      </p>
    </div>
  );
};

export default Dropdown;
