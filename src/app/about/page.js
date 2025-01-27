import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import Footer from "../../components/Layouts/Footer";
import WhyWe from "@/components/Instagram/WhyWe";
import ContactArea from "@/components/Common/ContactArea";
import AboutUsSectionTwo from "@/components/Instagram/AboutUsSectionTwo";

const Page = () => {
  return (
    <>
      <Navbar />

      <WhyWe />

      <AboutUsSectionTwo />
      {/* 
      <ContactArea /> */}

      <Footer />
    </>
  );
};

export default Page;
