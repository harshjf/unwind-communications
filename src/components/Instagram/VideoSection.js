"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { destinationVideos, destinationVlogs } from "../../../lib/data.js";

const VideoSection = () => {
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
                  <h2 className="section-title__title">
                    Destination VIDEOS for Streaming Platforms
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="e-con-inner">
            <div className="widget-container">
              <div className="team-one__bottom">
                <div className="row">
                  {destinationVideos.map((video) => (
                    <div
                      key={video.id}
                      className="col-xl-4 col-lg-4 col-md-6 col-sm-6"
                    >
                      <div
                        className="team-one__single"
                        data-aos="fade-zoom-in" // AOS Fade Zoom-in animation
                        data-aos-delay="100" // Optional: Add delay for staggering animation
                      >
                        <div className="team-one__img-box">
                          <div className="team-one__img">
                            <a
                              href={video.videoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                loading="lazy"
                                decoding="async"
                                width="320"
                                height="373"
                                src={video.imageUrl}
                                alt={video.title}
                              />
                            </a>
                          </div>
                          {/* <div className="team-one__share-btn">
                            <a
                              href={video.videoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="icon">
                                <i className="bx bx-video-recording"></i>
                              </span>
                            </a>
                          </div> */}
                        </div>
                        <div className="team-one__content">
                          <h3 className="team-one__title te-title">
                            <a href={video.videoUrl}>{video.title}</a>
                          </h3>
                          {/* <p className="team-one__sub-title te-designation">
                            {video.subtitle}
                          </p> */}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="video-section" style={{ paddingTop: "10px" }}>
          <div className="e-con-inner">
            <div className="widget-container">
              <div className="vitors-title-section">
                <div className="section-title">
                  <h2 className="section-title__title">
                    Destination VLOGS for Streaming Platforms
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="e-con-inner">
            <div className="widget-container">
              <div className="team-one__bottom">
                <div className="row">
                  {destinationVlogs.map((video) => (
                    <div
                      key={video.id}
                      className="col-xl-4 col-lg-4 col-md-6 col-sm-6"
                    >
                      <div
                        className="team-one__single"
                        data-aos="fade-zoom-in" // AOS Fade Zoom-in animation
                        data-aos-delay="100" // Optional: Add delay for staggering animation
                      >
                        <div className="team-one__img-box">
                          <div className="team-one__img">
                            <img
                              loading="lazy"
                              decoding="async"
                              width="320"
                              height="373"
                              src={video.imageUrl}
                              alt={video.title}
                            />
                          </div>
                          {/* <div className="team-one__share-btn">
                            <a
                              href={video.videoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="icon">
                                <i className="bx bx-video-recording"></i>
                              </span>
                            </a>
                          </div> */}
                        </div>
                        <div className="team-one__content">
                          <h3 className="team-one__title te-title">
                            <a href={video.videoUrl}>{video.title}</a>
                          </h3>
                          {/* <p className="team-one__sub-title te-designation">
                            {video.subtitle}
                          </p> */}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoSection;
