import React from "react";
import Navbar from "../components/Layouts/Navbar";
import Banner from "../components/Instagram/Banner";
import About from "../components/Instagram/About";
import Services from "../components/Instagram/Services";
import InstagramAudience from "../components/Instagram/InstagramAudience";
import Partners from "../components/Instagram/Partners";
import VideoArea from "../components/Instagram/VideoArea";
import Podcast from "../components/Instagram/Podcast";
import BlogPost from "../components/Instagram/BlogPost";
import ContactArea from "./../components/Common/ContactArea";
import Footer from "../components/Layouts/Footer";
import Process from "../components/Instagram/Process";
import Problem from "../components/Instagram/Problem";
import Solution from "../components/Instagram/Solution";
import Testimonials from "@/components/Instagram/Testimonials";
import WhyWe from "@/components/Instagram/WhyWe";
import ProblemProcessSolution from "@/components/Instagram/ProblemProcessSolution";

export default function Home() {
  return (
    <>
      <Navbar />

      <Banner />

      <About />

      <VideoArea />

      <Services />

      <ProblemProcessSolution />

      <Testimonials />

      <InstagramAudience />

      <WhyWe />

      {/*  <Podcast />
       */}
      {/*  <BlogPost /> */}

      <ContactArea />

      <Footer />
    </>
  );
}
