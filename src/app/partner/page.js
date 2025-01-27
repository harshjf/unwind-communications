import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import Footer from "../../components/Layouts/Footer";
import Videos from "@/components/Instagram/Videos";

const Page = () => {
  return (
    <>
      <Navbar />

      <Videos />

      {/* <ContactArea /> */}

      <Footer />
    </>
  );
};

export default Page;
