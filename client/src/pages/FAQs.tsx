import React from "react";
import NavBar from "../components/NavBar";
import { Collapse, CollapseProps } from "antd";

const FAQs = () => {
  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "What is the GeneHub aim?",
      children: (
        <div className="sm:space-y-4 text-justify">
          <p>
            We aim to introduce an online platform that consolidates the genetic
            background, clinical features, treatment options, and ongoing
            clinical trials for various genetic conditions in an
            easy-to-navigate and simple-to-understand manner for practicing
            physicians, medical students, residents, pharmacists, and patients.
          </p>
          <p>
            This unique product will collate clinically relevant information
            about genetic disorders in one database and provide physicians,
            pharmcists, biomedical scientists, patients, and patient families
            with accessible content for understanding and treating genetic
            conditions.
          </p>
          
        </div>
      ),
    },
    {
      key: "2",
      label: "What is GeneHub vision?",
      children: (
        <p className="text-justify">
          GenHub is a user-friendly &quot;all in one&quot; simplified complex
          genetic query to address the unmet needs of healthcare providers and
          others involved in patient care and biomedical research. It will speed
          up many fields of medical research and become an irreplaceable tool.
        </p>
      ),
    },
    {
      key: "3",
      label: "What solution GeneHub offers to the customers?",
      children: (
        <div className="sm:space-y-4 text-justify">
          <p>
            GeneHub brings complicated genetic information close to customers
            with limited genetic knowledge, making the web-based search platform
            user-friendly to navigate through the complex, fast-growing field of
            genetics and gene therapy of many inherited diseases.
          </p>
          <p>
            SPPH, LLC was established in 2020 to help TTUHSC physicians and
            their peers publish and distribute scientific information for low-
            no cost. Last year (2023), SPPH, LLC&#39;s budget was $10,975.00,
            with expenses of only $956.00. The majority of the profit is already
            assigned to be spent on future programming and website development.
          </p>
          <p>
            Overall, SciencePower Publishing House, LLC is a US-based publishing
            company aiming to offer peer- reviewed research journals and
            science-focused opinion journals and books. Our scientific interest
            covers a wide range of academic disciplines but mostly focuses on
            life science.
          </p>
        </div>
      ),
    },
  ];
  return (
    <>
      <div className="first-container relative">
        <div
          className="sm:h-[70vh] sm:w-svw bg-cover"
          style={{ backgroundImage: `url("/images/gene_bg_0.jpg")` }}
        />
        <div className="overlay absolute w-full h-full top-0 left-0 bg-black/[0.5]" />
        <div className="font-semibold sm:text-5xl text-white absolute sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2">
          Frequently Asked Questions
        </div>
      </div>
      <NavBar />
      <div className="second-container py-12 px-20 flex justify-center">
        <Collapse items={items} accordion className="sm:w-3/4" />
      </div>
    </>
  );
};

export default FAQs;
