import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-primary text-white flex flex-col lg:flex-row justify-center items-center mt-2 gap-4">
      <div>
        <Image src="/images/logofullneurodactyl_.png" alt="logo" width={150} height={29} />
      </div>
      <div>
        <p>
          All Right Reserved, 2023. Neurodactyl, LLC.
          <br />
          Address: Georgia, Tbilisi, Nadzaladevi District, Kursebi Street,
          <br /> N15. Identification Number: 400354488
          <br />
          E-mail us: info@neurodactyl.com
        </p>
      </div>
    </div>
  );
};

export default Footer;
