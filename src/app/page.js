"use client";
import React, { useState, useEffect } from "react";
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
import BlogPosts from "@/components/Instagram/BlogPosts";
import Loader from "@/components/Common/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [bannerLoaded, setBannerLoaded] = useState(false);

  useEffect(() => {
    // Once banner is loaded, hide loader
    if (bannerLoaded) {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  }, [bannerLoaded]);

  return (
    <>
      <Navbar />
      <MainBanner setBannerLoaded={setBannerLoaded} />
      {!loading && (
        <>
          <AboutUs />
          <Recognition />
          <AboutTheFounder />
          <KeyServices />
          <OurPartner />
          <ClientSwiper />
          <Testimonials />
          <BlogPosts />
          <ContactArea />
          <Footer />
        </>
      )}
      {loading && <Loader />}
    </>
  );
}
