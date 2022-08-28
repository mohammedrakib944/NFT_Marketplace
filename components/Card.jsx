import Image from "next/image";
import React from "react";

const Card = ({ data }) => {
  const { img, desc, name, title } = data;
  return (
    <div className="mb-6 md:mb-0 max-w-[450px] p-10 bg-gray-100 dark:bg-gray-800 rounded-2xl">
      <p className="text-2xl mb-12">{desc}</p>
      <div className="flex gap-4">
        <Image
          src={img}
          width="50px"
          height="50px"
          className="object-cover rounded-full"
        />
        <div className="">
          <p className="text-xl dark:text-white font-semibold">{name}</p>
          <p className="dark:text-gray-400">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
