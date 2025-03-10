"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { destinationVideos, destinationVlogs } from "../../../lib/data.js";

const Card = ({ image, title, text, button, videoUrl }) => {
  return (
    <a
      href={videoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="video-card"
      style={{
        minWidth: "363.2px",
        minHeight: "348.49px",
      }}
    >
      <div className="video-card-image ">
        <img src={image} alt={title} />
      </div>
      <div className="video-card-title-container">
        {/* <h2 className="video-card-title">{title}</h2> */}
        <h2 className="video-card-title" style={{ textTransform: "uppercase" }}>
          {title.split(",")[0]}
          {title.includes(",") && <span style={{ color: "#041D33" }}>, </span>}
          {title.includes(",") && (
            <span style={{ color: "#973D5D" }}>{title.split(",")[1]}</span>
          )}
        </h2>
      </div>
      {/* <span className="brand-text shimmer">{title}</span> */}
    </a>
  );
};

const OurPartner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);
  return (
    <>
      <section style={{ backgroundColor: "azure" }}>
        <div className="video-section">
          <div className="e-con-inner">
            <div className="widget-container">
              <div className="vitors-title-section">
                <div className="section-title">
                  <h1>
                    <b>
                      OUR <span style={{ color: "#973d5d" }}>PARTNERS</span>
                    </b>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-container">
          {destinationVideos.map((card, index) => (
            <div
              className="partner-cell medium-4"
              key={index}
              data-aos="flip-right"
            >
              <Card
                image={card.imageUrl}
                title={card.title}
                text={card.text}
                button="Watch Now"
                videoUrl={card.videoUrl}
              />
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "end",
            paddingRight: "20px",
          }}
        >
          <Link className="about-company-btn" href="/partner">
            <span style={{ color: "#973D5D" }}>View more</span>
            <img
              src="images/right-arrow.png"
              alt="Arrow"
              width={24}
              height={24}
              style={{
                marginLeft: "8px",
                height: "20px",
                width: "40px",
              }}
            />
          </Link>
        </div>
      </section>
    </>
  );
};

export default OurPartner;
