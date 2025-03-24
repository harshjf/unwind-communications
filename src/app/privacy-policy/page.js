import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import Footer from "../../components/Layouts/Footer";
import Videos from "@/components/Instagram/Videos";
import PrivacyPolicyContent from "@/components/Instagram/PrivacyPolicyContent";

const Page = () => {
  return (
    <>
      <Navbar />

      <PrivacyPolicyContent />

      <Footer />
    </>
  );
};

export default Page;
