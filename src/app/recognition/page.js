import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import Footer from "../../components/Layouts/Footer";
import WhyWe from "@/components/Instagram/WhyWe";
import ContactArea from "@/components/Common/ContactArea";
import OurPartner from "@/components/Instagram/OurPartner";
import Recognition from "@/components/Instagram/Recognition";
import Recognitions from "@/components/Instagram/Recognitions";
import RadioInterviews from "@/components/Instagram/RadioInterviews";

const Page = () => {
  return (
    <>
      <Navbar />

      {/*    <OurPartner /> */}
      <Recognitions />
      {/* <ContactArea /> */}

      {/* <RadioInterviews />
       */}
      <Footer />
    </>
  );
};

export default Page;
