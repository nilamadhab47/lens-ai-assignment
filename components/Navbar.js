import Image from "next/image";
import React, { useEffect, useState } from "react";
import {AiOutlineMail} from "react-icons/ai"

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    // Function to handle scroll and set the active section based on scroll position
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = [
        "product",
        "solutions",
        "advantage",
        "market",
        "news",
        "about",
        "contacts",
        "email",
      ];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (
          element &&
          scrollPosition >= element.offsetTop &&
          scrollPosition < element.offsetTop + element.offsetHeight
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className="flex justify-between bg-primary p-4 fixed w-full">
      <div>
        <Image
          src="/images/logofullneurodactyl_.png"
          alt="logo"
          width={300}
          height={300}
        />
      </div>
      <div className="md:flex items-center cursor-pointer hidden">
        <ul className="flex justify-between gap-8 text-2xl text-white">
          <li>
            <a
              href="#product"
              className={activeSection === "product" ? "active" : ""}
            >
              Product
            </a>
          </li>
          <li>
            <a
              href="#solutions"
              className={activeSection === "solutions" ? "active" : ""}
            >
              Solutions
            </a>
          </li>
          <li>
            <a
              href="#advantage"
              className={activeSection === "advantage" ? "active" : ""}
            >
              Advantage
            </a>
          </li>
          <li>
            <a
              href="#market"
              className={activeSection === "market" ? "active" : ""}
            >
              Market
            </a>
          </li>
          <li>
            <a
              href="#news"
              className={activeSection === "news" ? "active" : ""}
            >
              News
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={activeSection === "about" ? "active" : ""}
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#contacts"
              className={activeSection === "contacts" ? "active" : ""}
            >
              Contacts
            </a>
          </li>
          <li>
            <a
              href="#email"
              className={activeSection === "email" ? "active" : ""}
            >
              <AiOutlineMail />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
