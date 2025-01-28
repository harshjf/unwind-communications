import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import Footer from "../../components/Layouts/Footer";
import WhyWe from "@/components/Instagram/WhyWe";
import ContactArea from "@/components/Common/ContactArea";
import OurPartner from "@/components/Instagram/OurPartner";
import Services from "@/components/Instagram/Services";
import ProblemProcessSolution from "@/components/Instagram/ProblemProcessSolution";
import CelebsConnect from "@/components/Instagram/CelebsConnect";

const Page = () => {
  return (
    <>
      <Navbar />

      <Services />
      <ProblemProcessSolution />
      <CelebsConnect />
      {/* <ContactArea /> */}

      <Footer />
    </>
  );
};

export default Page;
