import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Icon } from "@iconify/react";

const FooterLinks = () => {
  const { link } = useParams();
  const linkName = link || "";

  const linkClassification: {
    [key: string]: {
      title: string;
      description: string;
    }
  } = {
    about: {
      title: "About Us",
      description:
        "We are a group of enthusiastic researchers and physicians, who want to bring modern technology to make healthcare delivery precise and easy and medical science as efficient as possible because nothing has as great values as a human life",
    },
    services: {
        title: "Services",
        description: "SciencePower Publishing House, LLC is determined to propagate modern health related information among healthcare providers and researchers. We published several journals and books. GeneHub project is a branch of SPPH, LLC, which distributes genetic related information in consisted and understandable for users’ form."
    },
    vision: {
        title: "Vision",
        description: "Break barriers between medical research and healthcare delivery in genomics."
    },
    mission: {
        title: "Mission",
        description: "GeneHub brings complicated genetic information close to customers with limited genetic knowledge, making the web-based search platform user-friendly to navigate the complex, fast-growing field of genetics and gene therapy of many inherited diseases using AI technology."
    }
  };

  // console.log(Object.getOwnPropertyNames(linkClassification));

  return (
    <>
      <div className="first-container relative">
        <div
          className="sm:h-[70vh] sm:w-svw bg-cover"
          style={{ backgroundImage: `url("/images/hero_bg_1.jpg")` }}
        />
        <div className="overlay absolute w-full h-full top-0 left-0 bg-black/[0.5]" />
        <div className="font-semibold sm:text-5xl text-white absolute sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2">
          {link && linkClassification[link].title}
        </div>
      </div>
      <NavBar />
      <div className="second-container sm:px-20 sm:py-10 flex items-center justify-center">
          <div className="content-card relative sm:w-1/2 sm:min-h-48 bg-[#eee] sm:text-xl text-center sm:leading-8 sm:px-4 sm:py-6 flex items-center after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[#005555] after:-z-50 after:translate-x-4 after:translate-y-4 hover:after:translate-x-0 hover:after:translate-y-0 after:transition">
            <Icon icon="bx:bxs-quote-alt-left" className="absolute sm:-top-6 sm:-left-4 text-[4rem] text-[#005555]"/>
            {link && linkClassification[link].description}
            <Icon icon="bxs:quote-alt-right" className="right-quote-icon absolute sm:-bottom-6 sm:-right-4 text-[4rem] text-[#ddd]"/>
          </div>
      </div>
    </>
  );
};

export default FooterLinks;
