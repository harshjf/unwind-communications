import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import Footer from "../../components/Layouts/Footer";
import WhyWe from "@/components/Instagram/WhyWe";
import ContactArea from "@/components/Common/ContactArea";
import OurPartner from "@/components/Instagram/OurPartner";

const Page = () => {
  return (
    <>
      <Navbar />

      <OurPartner />

      {/* <ContactArea /> */}

      <Footer />
    </>
  );
};

export default Page;
