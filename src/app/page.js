import React from "react";
import Navbar from "../components/Layouts/Navbar";
import ContactArea from "./../components/Common/ContactArea";
import Footer from "../components/Layouts/Footer";
import Testimonials from "@/components/Instagram/Testimonials";
import MainBanner from "@/components/Instagram/MainBanner";
import AboutUs from "@/components/Instagram/AboutUs";
import Recognition from "@/components/Instagram/Recognition";
import AboutTheFounder from "@/components/Instagram/AboutTheFounder";
import KeyServices from "@/components/Instagram/KeyServices";
import OurPartner from "@/components/Instagram/OurPartner";
import ClientSwiper from "@/components/Instagram/ClientSwiper";
export default function Home() {
  return (
    <>
      <Navbar />

      <MainBanner />

      <AboutUs />

      <Recognition />

      <AboutTheFounder />

      <KeyServices/>

      <OurPartner/>

      <ClientSwiper/>

      <Testimonials/>

      <ContactArea />

      <Footer />
    </>
  );
}
