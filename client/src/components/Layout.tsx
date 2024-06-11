import React from "react";
import ScrollToTop from "../utils/ScrollToTop";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import AntDThemeProvider from "../contexts/AntDThemeProvider";

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <AntDThemeProvider>
        <Outlet />
        <Footer />
      </AntDThemeProvider>
    </>
  );
};

export default Layout;
