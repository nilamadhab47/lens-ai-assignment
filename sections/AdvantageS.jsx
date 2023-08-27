import { Advantage } from "@/utlis/Advantage";
import Image from "next/image";
import React from "react";

const AdvantageS = () => {
  const topAdvantage = Advantage.slice(0, 3);
  const bottomAdvantage = Advantage.slice(3);

  return (
    <div className="section bg-primaryT text-white" id="advantage">
      <h1 className="text-white lg:text-[52px] text-[30px">Advantage</h1>
      <div className="advantage-list mt-16 mb-8">
        <ul className="flex gap-[10rem] flex-col md:flex-row">
          {topAdvantage.map((list, index) => (
            <li key={index} className="flex flex-col justify-center items-center text-center">
              <Image src={list.image} alt="image" width={55} height={55} />
              <h6 className="text-xl mb-4 mt-12 font-semibold">{list.heading}</h6>
              <p>{list.description}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="advantage-list mt-16 mb-8">
        <ul className="flex gap-[10rem] flex-col md:flex-row">
          {bottomAdvantage.map((list, index) => (
            <li key={index} className="flex flex-col justify-center items-center text-center">
              <Image src={list.image} alt="image" width={55} height={55} />
              <h6 className="text-xl mb-4 mt-12 font-semibold">{list.heading}</h6>
              <p>{list.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdvantageS;
