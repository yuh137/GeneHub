import React from "react";
import ScrollToTop from "../utils/ScrollToTop";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import AntDThemeProvider from "../contexts/AntDThemeProvider";
import { AuthProvider } from "../contexts/AuthContext";

const Layout = () => {
  return (
    <>
      <AuthProvider>
        <ScrollToTop />
        <AntDThemeProvider>
          <Outlet />
          <Footer />
        </AntDThemeProvider>
      </AuthProvider>
    </>
  );
};

export default Layout;
