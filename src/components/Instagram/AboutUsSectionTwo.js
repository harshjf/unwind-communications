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
      image: "/images/home/shefalisaxena.jpg",
      alt: "Shefali Saxena",
      name: "SHEFALI SAXENA",
      designation: "FOUNDER",
      description: `
        <p>An Award Winning Indie Artist, Celebrity Host & a Content Creator, Shefali Saxena is UGC NET Qualified ~ recognised as Times of India Headliner and Artist of the Week by BIG FM, RED FM & spotlighted in Radio Mirchi.</p>
        <p>Shefali’s exquisite portrayal of <b>Indian Destinations & Venues on Streaming Platforms</b>, is honoured by the <b>Minister of Culture & Tourism, Honorable Gajendra Singh Shekhawat</b> and awarded as Power Woman by renowned, lyricist Javed Akhtar Sahab with a dedicated poetry in his handwriting.</p>
        <p>Shefali’s creative works seamlessly weave the cultural tapestry into Music Videos for Streaming Platform, complemented by <b>media promotions and digital marketing that drive substantial revenue</b>.</p>
        <p>Boasting a repertoire of over 1200+ shows in the past decade, Shefali has hosted a <b>National Event with Hon. PM Shri. Narendra Modi at Rashtrapati Bhawan and also with Dr.S.Jaishankar for Ministry of External Affairs</b>.</p>
        <p>Shefali has enchanted Corporates and Social gatherings with her exceptional talents as an Innovative Live Singer Performer, Master of Ceremonies and Brand's presence with Celebrity Engagements too. Shefali has a spiritual inclination and stands as a beacon of inspiration, a visionary, and the generation’s voice.</p>`,
      link: "/about",
      linkedinprofile:
        "https://www.linkedin.com/in/shefalisaxenaofficial/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
    {
      image: "/images/home/ramachandran.jpg",
      alt: "Ramachandran",
      name: "RAMACHANDRAN GOPALAKRISHNAN",
      designation: "MENTOR & CO FOUNDER",
      description: `
        <p>With a rich career spanning 39 years, Ramachandran Gopalakrishnan has built a legacy of innovation, resilience, and strategic excellence. His journey is defined by <b>exponential ideas, unwavering passion, and authenticity—nurtured through decades of professional wisdom, shaping him into a formidable leader in his field</b>.</p>
        <p>A non-conformist and industry disruptor, Ramachandran Gopalakrishnan is a renowned <b>serial entrepreneur</b> whose visionary leadership has transformed multiple startups into thriving success stories. Recognized as a pioneer with the golden touch, he has illuminated the entrepreneurial landscape, earning a reputation as a trusted mentor and catalyst for growth.</p>
        <p>A hands-on professional, Ramachandran Gopalakrishnan’s expertise spans diverse industries, including fitness, retail, finance, sports technology, and digital marketing. He currently serves as <b>Chairman of the Advisory Board at InnoServ Group</b>, a trailblazing force in digital media. Under his mentorship, InnoServ Solutions Pvt. Ltd. has achieved remarkable growth, expanding into international markets within a short span. Additionally, he actively contributes to Orai Robotics, an AI-driven company, and Z-Bat, a cutting-edge sports tech venture, accelerating their trajectory toward sustained success.</p>`,
      link: "/about",
      linkedinprofile:
        "https://www.linkedin.com/in/ramachandran-gopalakrishnan-46695b80/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
  ];

  return (
    <>
      <section
        id="about-founder"
        className="pt-70  about-us-section-two"
        style={{ backgroundColor: "#efefea", paddingBottom: "50px" }}
      >
        {aboutTheFounder.map((about, idx) => {
          return (
            <div
              style={{
                maxWidth: "1300px",
                marginBottom: "80px",
                paddingLeft: isMobile && idx % 2 == 0 ? "0px" : "44px",
              }}
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
                        style={{
                          height: "400px",
                          width: "370px",
                          paddingLeft: isMobile ? "16px" : "0px",
                        }}
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
                      <h1
                        className="about-us-section-two-title "
                        style={{ paddingLeft: "20px" }}
                      >
                        <b>
                          ABOUT THE {about.designation}
                          <br />
                          <span style={{ color: "#973d5d" }}>{about.name}</span>
                          <br />
                        </b>
                      </h1>
                    )}
                    <div
                      className="about-content"
                      style={{ paddingLeft: "20px", paddingTop: "15px" }}
                      dangerouslySetInnerHTML={{ __html: about.description }}
                    ></div>
                    <Link
                      href={about.linkedinprofile}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        textDecoration: "none",
                        gap: "10px",
                      }}
                    >
                      <Image
                        src="/images/home/linkedin.png"
                        alt="LinkedIn"
                        width={40}
                        height={40}
                        style={{ marginLeft: "20px", marginTop: "15px" }}
                      />
                    </Link>
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
