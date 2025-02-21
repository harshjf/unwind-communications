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
      style={{ minWidth: "363.2px", minHeight: "348.49px" }}
    >
      <div className="video-card-image">
        <img src={image} alt={title} />
      </div>
      <div className="video-card-title-container">
      <h2 className="video-card-title">{title}</h2>
      </div>
      {/* <span className="brand-text shimmer">{title}</span> */}

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
        <div style={{ paddingTop: "180px" }} className="video-section">
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

        {/* Grid Container */}
        <div className="grid-container">
          {destinationVideos
            .filter((card) => card.show)
            .map((card, index) => (
              <React.Fragment key={index}>
                <div className="cell medium-4" data-aos="flip-right">
                  <Card
                    image={card.imageUrl}
                    title={card.title}
                    text={card.text}
                    button="Watch Now"
                    videoUrl={card.videoUrl}
                  />
                </div>

                {/* Remove below code in case don't want to render radio interview component */}
                {/* {(index + 1) % 3 === 0 &&
                  index + 1 !== destinationVideos.length && (
                    <>
                      <div className="full-width">
                        <RadioInterviews />
                      </div>

                      <div className="section-title">
                        <h1>
                          <b>
                            OUR{" "}
                            <span style={{ color: "#973d5d" }}>PARTNERS</span>
                          </b>
                        </h1>
                      </div>
                    </>
                  )} */}
                {/*end*/}
              </React.Fragment>
            ))}
        </div>
      </section>

      <section>
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
