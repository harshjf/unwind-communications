"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Process() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });

    // Check screen width to determine if it's mobile
    const updateScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    updateScreenSize(); // Initial check
    window.addEventListener("resize", updateScreenSize);

    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  return (
    <div
      className="process-container"
      style={{
        marginTop: "40px",
        paddingTop: "40px",
        paddingBottom: "30px",
        backgroundColor: "#cddcea",
      }}
    >
      <div className="container">
        <div
          className="section-title"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
          data-aos-once="true"
        >
          <h2>
            <b>
              <span style={{ color: "#973d5d" }}>PROCESS</span> & STEPS
            </b>
          </h2>
          <p>
            The execution plan calls for <b>35 to 40 posts each quarter</b>,
            alongside the creation of <b>20 to 25 videos</b> for platforms like
            YouTube and other Digital Channels apart from Reels for Social Media
            within the same period.
          </p>
        </div>
      </div>
      <div
        className="row"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {[
          {
            src: "/images/process_steps/step1.png",
            msrc: "/images/process_steps/step1.png",
            alt: "Step 1",
            text: "Create a catchy hit song blending the venue’s theme and objectives.",
            delay: 100,
          },
          {
            src: "/images/process_steps/step2.png",
            msrc: "/images/process_steps/mstep2.png",
            alt: "Step 2",
            text: "Shoot a high-quality video, distributing across streaming platforms.",
            delay: 500,
          },
          {
            src: "/images/process_steps/step3.png",
            msrc: "/images/process_steps/mstep3.png",
            alt: "Step 3",
            text: "Push content to targeted audience via Google Ads & creating Vlogs for social media.",
            // text: "Push content to targeted audience via Google Ads to accelerate SEO.",
            delay: 800,
          },
          {
            src: "/images/process_steps/step4.png",
            msrc: "/images/process_steps/mstep4.png",
            alt: "Step 4",
            text: "Global visibility, generate inquiries, and expand audience engagement.",
            delay: 1100,
          },
        ].map((step, index) => (
          <div
            key={index}
            className="col centered-content"
            data-aos="fade-up"
            data-aos-delay={step.delay}
            style={{
              flex: isMobile ? "1 1 100%" : "1 1 calc(25% - 20px)", // Mobile: 1 per row, Laptop: 4 per row
              maxWidth: isMobile ? "100%" : "calc(25% - 20px)", // Full width for mobile
              textAlign: "center",
              boxSizing: "border-box",
              padding: "10px",
            }}
          >
            <div className="content-wrapper">
              <img
                src={isMobile ? step.msrc : step.src}
                alt={step.alt}
                style={{ maxWidth: "100%", height: "auto" }}
              />
              <p style={{ marginTop: "10px" }}>{step.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Process;
