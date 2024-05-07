import React from "react";
import NavBar from "../components/NavBar";
import { useLoaderData, useParams } from "react-router-dom";
import { SearchData } from "../utils/MOCK_DATA";
import { Icon } from "@iconify/react";

const DiseaseDisplay = () => {
  const { link } = useParams();
  const data = useLoaderData() as SearchData | undefined;
  return (
    <>
      <div className="first-container relative">
        <div
          className="sm:h-[70vh] sm:w-svw bg-cover"
          style={{ backgroundImage: `url("/images/hero_bg_1.jpg")` }}
        />
        <div className="overlay absolute w-full h-full top-0 left-0 bg-black/[0.5]" />
        <div className="font-semibold sm:text-5xl text-white absolute sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 text-center">
          {data?.disease_name}
        </div>
      </div>
      <NavBar />
      <div className="info-container relative grid grid-cols-2 sm:py-8 sm:px-14 sm:gap-x-3">
        <div className="first-col sm:space-y-2 text-[#00204A]">
          <div className="sm:text-4xl font-semibold">{data?.disease_name}</div>
          <div className="sm:text-2xl">{data?.gene}</div>
          <div className="sm:text-2xl font-semibold">Primary symptomps</div>
          <div>
            {data?.symptomps.map((symptom, index) => (
              <div className="capitalize" key={index}>
                {index + 1}. {symptom}
              </div>
            ))}
          </div>
          <div className="sm:text-2xl font-semibold">Clinical Description</div>
          <div className="text-justify">{data?.description}</div>
        </div>
        <div className="second-col border border-solid border-black/30 sm:w-[90%] justify-self-center sm:p-10 text-[#00204A] flex flex-col sm:gap-y-2">
          <div className="sm:text-3xl font-semibold">Treatments</div>
          <div className="text-justify">
            <span className="font-semibold">FDA Approved treatments:</span>{" "}
            {data?.treatment}
          </div>
          <div className="font-semibold sm:text-lg">Clinical trials:</div>
          <div className="trials sm:space-y-2">
            {data?.clinical?.map((trial, index) => (
              <div
                key={index}
                className="relative group hover:cursor-pointer hover:-translate-y-1 transition-all duration-75"
                onClick={() => {
                  window.open(`${trial.link}`, "_blank");
                }}
              >
                <span className="absolute inset-0 bg-transparent transition-opacity group-hover:bg-[#005555] rounded-md"></span>
                <div className="relative sm:px-2 sm:py-1 flex sm:gap-x-2 group-hover:text-white z-10">
                  <div>{trial.description}</div>
                  <Icon
                    icon="iconamoon:link-external"
                    className="self-center"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="font-semibold sm:text-lg">Useful links: </div>
          <div className="useful-links">
            {data?.useful_links.map((link, index) => (
              <div
                key={index}
                className="sm:py-1 sm:px-2 group relative hover:cursor-pointer hover:-translate-y-1 transition-all duration-75"
                onClick={() => {
                  window.open(`${link}`, "_blank");
                }}
              >
                <span className="absolute inset-0 bg-transparent transition-opacity group-hover:bg-[#005555] rounded-md"></span>
                <div className="relative z-10 group-hover:text-white">
                  {link}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DiseaseDisplay;
