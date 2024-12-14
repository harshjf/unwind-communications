"use client";
import React, { useEffect, useState } from "react";

const WhyWe = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
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
      style={{ marginLeft: "30px", paddingTop: "40px" }}
    >
      <div className="container">
        <div
          className="section-title"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
          data-aos-once="true"
        >
          <h2 style={{ color: "#041d33" }}>Why Us?</h2>
          <p>
            Unwind Communications operates in a highly niche market, focusing on
            destination and venue promotion through musical videos and vlogs.
          </p>
          <p>
            While there are no direct competitors offering the same combination
            of services, the company addresses gaps left by adjacent players in
            related industries.
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
          { src: "/images/whywe/1.png", alt: "Step 1", delay: 100 },
          { src: "/images/whywe/2.png", alt: "Step 2", delay: 400 },
          { src: "/images/whywe/3.png", alt: "Step 3", delay: 500 },
        ].map((item, index) => (
          <div
            key={index}
            className="col centered-content"
            data-aos="fade-up"
            data-aos-delay={item.delay}
            style={{
              flex: isMobile ? "1 1 100%" : "1 1 calc(33.33% - 20px)", // Mobile: 1 per row, Laptop: 3 per row
              maxWidth: isMobile ? "100%" : "calc(33.33% - 20px)",
              textAlign: "center",
              boxSizing: "border-box",
              padding: "10px",
            }}
          >
            <div className="content-wrapper">
              <img
                src={item.src}
                alt={item.alt}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  display: "block", // Ensures proper spacing
                  margin: "0 auto",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyWe;
