"use client";

import React, { useState, useEffect } from "react";
import ModalForm from "../Common/Modal/ModalForm";
import Image from "next/image";
import Link from "next/link";

const AboutUsSectionTwo = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const aboutTheFounder = [
    {
      image: "/images/home/shefali_saree-nobg.png",
      alt: "Shefali Saxena image",
      name: "SHEFALI SAXENA",
      designation: "FOUNDER",
      description:
        "Shefali Saxena, MSc (Gold Medalist) & UGC NET Qualified in Life Science, is an artist known for her contributions to music videos, media promotions, and digital marketing campaigns. She has been recognized as a Times of India Headliner and honored as Artist of the Week by BIG FM & MX Player. Her work has received praise from industry figures, including Javed Akhtar, who acknowledged her ability to highlight India’s cultural richness. Through her projects, she brings creative storytelling to various platforms, influencing audiences and brands alike.",
      link: "/about",
    },
    {
      image: "https://placehold.co/260x300",
      alt: "Dummy image",
      name: "LOREM IPSUM",
      designation: "DESIGNATION",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit felis eu sapien laoreet, et vehicula justo pharetra.",
      link: "/about",
    },
  ];

  return (
    <>
      <section id="about-founder" className="pt-70  about-us-section-two">
        {aboutTheFounder.map((about, idx) => {
          return (
            <div
              style={{ maxWidth: "1200px", marginBottom: "80px" }}
              key={idx}
              className="container-fluid"
            >
              <div
                className="row align-items-center"
                style={{
                  flexDirection: idx % 2 === 0 ? "row" : "row-reverse",
                  marginLeft: idx % 2 === 0 ? "0px" : "-60px",
                }}
              >
                {isMobile && (
                  <h2
                    className="about-us-section-two-heading"
                    style={{
                      textAlign: "center",
                    }}
                  >
                    <b>
                      ABOUT THE {about.designation}{" "}
                      <span style={{ color: "#973d5d" }}>{about.name}</span>
                    </b>
                  </h2>
                )}
                <div
                  className="col-lg-4 col-md-12"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="800"
                  data-aos-once="true"
                >
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <div className="about-section-two-image">
                      <Image
                        src={about.image}
                        alt="image"
                        width={253}
                        height={253}
                        style={{ height: "300px", width: "260px" }}
                      />
                    </div>
                  </div>
                </div>

                <div
                  className="col-lg-7 col-md-12"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="800"
                  data-aos-once="true"
                >
                  <div className="about-section-two-content">
                    {!isMobile && (
                      <h1 className="about-us-section-two-title ">
                        <b>
                          ABOUT THE {about.designation}
                          <br />
                          <span style={{ color: "#973d5d" }}>{about.name}</span>
                        </b>
                      </h1>
                    )}

                    <p
                      className="about-content"
                      style={{ paddingLeft: "0px", paddingTop: "15px" }}
                    >
                      {about.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default AboutUsSectionTwo;
