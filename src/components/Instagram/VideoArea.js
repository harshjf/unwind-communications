"use client";

import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import Image from "next/image";

const VideoArea = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="8v_jldiqJ6E"
        onClose={() => setOpen(false)}
      />

      <section className="video-area">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="video-content">
                <h2 style={{ color: "#041d33" }}>
                  Empowering PM Modi’s Vision For Bharat As A Leading Global
                  Destination
                </h2>
                <p>
                  Our Respected Prime Minister, Shri Narendra Modi Ji, envisions
                  Bharat as a Leading Global Destination for Wedding and MICE
                  Tourism, showcasing India’s Vibrancy, Grandeur, and Cultural
                  Magnificence as the ultimate destination to explore.
                </p>
                <p>
                  Shefali is deeply committed to bringing this vision to life,
                  transforming PM Modi Ji’s dream into a remarkable reality !
                </p>

                <div onClick={() => setOpen(true)} className="video-btn">
                  <i className="bx bx-play"></i> Watch Video
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="video-image">
                <Image
                  src="/images/video/vision.png"
                  alt="image"
                  width={750}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoArea;
