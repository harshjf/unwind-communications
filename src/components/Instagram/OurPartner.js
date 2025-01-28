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
      <div className="video-card-image">
        <img src={image} alt={title} />
      </div>
      <h2 className="video-card-title">{title}</h2>
    </a>
  );
};

const OurPartner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);
  return (
    <>
      <section>
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
            <span>View more</span>
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
      </section>
    </>
  );
};

export default OurPartner;
