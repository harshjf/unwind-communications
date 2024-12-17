import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import TestimonialDetails from "../../../components/TestimonialDetails";
import PlaceInfo from "../../../components/Instagram/PlaceInfo";
import CampaignInfo from "../../../components/Instagram/CampaignInfo";
import { testimonials } from "../../../../lib/data";

const TestimonialPage = ({ params }) => {
  const { name } = params;

  const testimonialDetails = testimonials.find((item) => item.name === name);

  if (!testimonialDetails) {
    return <div>Testimonial not found!</div>;
  }

  return (
    <>
      <Navbar />
      <PlaceInfo testimonial={testimonialDetails} />
      <CampaignInfo testimonial={testimonialDetails} />
      <TestimonialDetails testimonial={testimonialDetails} />
    </>
  );
};

export default TestimonialPage;
