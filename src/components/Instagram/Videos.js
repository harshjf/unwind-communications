"use client";
import React, { useEffect } from "react";
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
    >
      <div className="video-card-image">
        <img src={image} alt={title} />
      </div>
      <h2 className="video-card-title">{title}</h2>
      <div className="video-card-content">
        <p>{text}</p>
        <span>
          {button}
          <i className="fa-solid fa-plane-departure" />
        </span>
      </div>
    </a>
  );
};

const Videos = () => {
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
                  <h1 style={{ color: "#973d5d" }}>
                    <b>DESTINATION VIDEOS FOR STREAMING PLATFORMS</b>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-container">
          {destinationVideos.map((card, index) => (
            <div className="cell medium-4" key={index} data-aos="flip-right">
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
      </section>
      <section>
        <div className="video-section">
          <div className="e-con-inner">
            <div className="widget-container">
              <div className="vitors-title-section">
                <div className="section-title">
                  <h1 style={{ color: "#973d5d" }}>
                    <b>DESTINATION VLOGS FOR SOCIAL MEDIA</b>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-container">
          {destinationVlogs.map((card, index) => (
            <div className="cell medium-4" key={index} data-aos="flip-left">
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
      </section>
    </>
  );
};

export default Videos;
