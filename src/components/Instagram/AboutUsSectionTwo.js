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
      name: "Shefali Saxena",
      description:
        "Lubaina spearheads BRANDit to make it a trusted partner for her clients and help them navigate the diversity, scale and complexity of India. She brings with her in-depth knowledge and understanding of the intricacies of outbound travel. She provides deep insight, sound counsel and seamless execution to numerous tourism boards and hospitality brands.",
      link: "/about",
    },
    {
      image: "https://placehold.co/260x300",
      alt: "Dummy image",
      name: "Dummy Name",
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
                style={{ flexDirection: idx % 2 === 0 ? "row" : "row-reverse" }}
              >
                {isMobile && (
                  <h2
                    className="about-us-section-two-heading"
                    style={{
                      textAlign: "center",
                    }}
                  >
                    <b>
                      ABOUT THE{" "}
                      <span style={{ color: "#973d5d" }}>FOUNDER</span>
                    </b>
                  </h2>
                )}
                <div
                  className="col-lg-5 col-md-12"
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
                          ABOUT THE FOUNDER
                          <br />
                          <span style={{ color: "#973d5d" }}>
                            SHEFALI SAXENA
                          </span>
                        </b>
                      </h1>
                    )}

                    <p className="about-us-section-two-description">
                     {about.description}
                    </p>

                    <div
                      style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "start",
                      }}
                    >
                      <Link
                        className="about-section-two-company-btn"
                        href="/about"
                      >
                        <span>View Profile</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          version="1.1"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width="18"
                          height="18"
                          x="0"
                          y="0"
                          viewBox="0 0 32 32"
                        >
                          <g>
                            <path
                              d="M26.68 3.867H8.175a1 1 0 0 0 0 2h16.544L4.2 26.387A1 1 0 1 0 5.613 27.8l20.52-20.52v16.545a1 1 0 0 0 2 0V5.321a1.456 1.456 0 0 0-1.453-1.454z"
                              fill="#000000"
                            ></path>
                          </g>
                        </svg>
                      </Link>
                    </div>
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
