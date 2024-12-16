import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import Footer from "../../components/Layouts/Footer";
import TestimonialDetails from "../../components/TestimonialDetails";
import TestimonialList from "../../components/TestimonialList";

const page = () => {
  return (
    <>
      <Navbar />
      <TestimonialList />
      {/* <TestimonialDetails /> */}
      {/*   <Footer /> */}
    </>
  );
};

export default page;
