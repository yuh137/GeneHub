import { Icon } from "@iconify/react";
import ReactPDF, {
  BlobProvider,
  PDFDownloadLink,
  pdf,
} from "@react-pdf/renderer";
import React, { memo, useMemo } from "react";
import TermsPDF from "../utils/TermsPDF";
import { Link } from "react-router-dom";

const Footer = () => {
  const openPDF = async () => {
    const blob = await pdf(<TermsPDF />).toBlob();
    const pdfURL = URL.createObjectURL(blob);
    window.open(pdfURL, "_blank");
  };

  // ReactPDF.render(<TermsPDF />, `${__dirname}/example.pdf`)

  return (
    <>
      <div className="bg-[#EFEFEF] w-svw sm:h-[30%] grid grid-cols-2 sm:py-[70px] sm:px-24 justify-between">
        <div className="first-column sm:space-y-7">
          <div className="contact sm:space-y-6">
            <div className="font-semibold text-[#0C2A52]">Contact</div>
            <div className="sm:text-sm text-black">
              <div>SciencePower Publishing House, LLC </div>
              <div>3606 Van Tassel St</div>
              <div>Amarillo, TX 79121</div>
            </div>
          </div>
          <div className="donations sm:space-y-6">
            <div className="font-semibold text-[#0C2A52]">
              Donations and investments
            </div>
            <div className="sm:text-sm text-black">
              <div>Bank of America</div>
              <div>Account Number: 4880 9093 7640 </div>
              <div>ACH Routing Number: 111000025</div>
            </div>
          </div>
          <div className="paypal sm:space-y-4">
            <div className="text-black font-bold">
              PayPal: <span className="font-normal">paypal.me/refertan</span>
            </div>
            <div className="text-black w-fit underline hover:cursor-pointer hover:text-black hover:no-underline transition duration-75">
              +1(210)-355-4056
            </div>
            <div className="text-black w-fit sm:translate-y-2 underline hover:cursor-pointer hover:text-black hover:no-underline transition duration-75">
              <a href="mailto:tetyana.vasylyeva@ttuhsc.edu">
                tetyana.vasylyeva@ttuhsc.edu
              </a>
            </div>
          </div>
        </div>
        <div className="second-column sm:space-y-4">
          <div className="font-semibold text-[#0C2A52]">Links</div>
          <div className="grid grid-cols-2">
            <div className="text-black w-fit sm:space-y-3">
              <div className="hover:cursor-pointer hover:text-white hover:bg-[#005555] hover:-translate-y-1 sm:p-1 rounded-md transition duration-75">
                <Link to="/info/about">About us</Link>
              </div>
              <div className="hover:cursor-pointer hover:text-white hover:bg-[#005555] hover:-translate-y-1 sm:p-1 rounded-md transition duration-75">
                <Link to="/info/services">Services</Link>
              </div>
              <div className="hover:cursor-pointer hover:text-white hover:bg-[#005555] hover:-translate-y-1 sm:p-1 rounded-md transition duration-75">
                <Link to="/info/vision">Vision</Link>
              </div>
              <div className="text-black w-fit hover:cursor-pointer hover:text-white hover:bg-[#005555] hover:-translate-y-1 sm:p-1 rounded-md transition duration-75">
                Feedback
              </div>
            </div>
            <div className="text-black w-fit sm:space-y-3">
              <div className="hover:cursor-pointer hover:text-white hover:bg-[#005555] hover:-translate-y-1 sm:p-1 rounded-md transition duration-75">
                <Link to="/info/mission">Mission</Link>
              </div>
              <div
                className="hover:cursor-pointer hover:text-white hover:bg-[#005555] hover:-translate-y-1 sm:p-1 rounded-md transition duration-75"
                onClick={() => openPDF()}
              >
                Terms
              </div>
              <div className="hover:cursor-pointer hover:text-white hover:bg-[#005555] hover:-translate-y-1 sm:p-1 rounded-md transition duration-75">
                <a
                  href="https://app.termly.io/dashboard/website/1847c2a7-9d66-4921-8f5a-2a60efd2529f/privacy-policy"
                  target="_blank"
                >Privacy</a>
              </div>
              <div className="hover:cursor-pointer hover:text-white hover:bg-[#005555] hover:-translate-y-1 sm:p-1 rounded-md transition duration-75">
                <Link to="/faq">FAQ</Link>
              </div>
            </div>
          </div>
          <div className="icon-links flex sm:space-x-2">
            <div className="sm:w-[40px] sm:h-[40px] rounded-2xl bg-[#ccc] flex justify-center items-center hover:-translate-y-1 hover:bg-[#00204A] hover:text-white hover:cursor-pointer transition duration-100">
              <Icon icon="ri:instagram-line" />
            </div>
            <div className="sm:w-[40px] sm:h-[40px] rounded-2xl bg-[#ccc] flex justify-center items-center hover:-translate-y-1 hover:bg-[#00204A] hover:text-white hover:cursor-pointer transition duration-100" onClick={() => {window.open("https://twitter.com/GeneHubs", "_blank")}}>
              <Icon icon="mdi:twitter" />
            </div>
            <div className="sm:w-[40px] sm:h-[40px] rounded-2xl bg-[#ccc] flex justify-center items-center hover:-translate-y-1 hover:bg-[#00204A] hover:text-white hover:cursor-pointer transition duration-100" onClick={() => {window.open("https://www.facebook.com/GeneHubAI/", "_blank")}}>
              <Icon icon="ri:facebook-fill" />
            </div>
            <div className="sm:w-[40px] sm:h-[40px] rounded-2xl bg-[#ccc] flex justify-center items-center hover:-translate-y-1 hover:bg-[#00204A] hover:text-white hover:cursor-pointer transition duration-100" onClick={() => {window.open("https://www.linkedin.com/in/genehubai-ai-384618305/", "_blank")}}>
              <Icon icon="mdi:linkedin" />
            </div>
            <div className="sm:w-[40px] sm:h-[40px] rounded-2xl bg-[#ccc] flex justify-center items-center hover:-translate-y-1 hover:bg-[#00204A] hover:text-white hover:cursor-pointer transition duration-100">
              <Icon icon="mdi:pinterest" />
            </div>
            <div className="sm:w-[40px] sm:h-[40px] rounded-2xl bg-[#ccc] flex justify-center items-center hover:-translate-y-2 hover:bg-[#00204A] hover:text-white hover:cursor-pointer transition duration-100">
              <Icon icon="mdi:dribbble" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
