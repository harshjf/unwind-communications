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

      <section id="recognition" className="video-area">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="video-content">
                <h1 style={{ color: "#973d5d" }}>
                  <b>
                    OFFICIAL RECOGNITION FROM THE MINISTRY OF TOURISM & CULTURE,
                    GOVERNMENT OF INDIA
                  </b>
                </h1>
                <p>
                  Proudly endorsed by{" "}
                  <span style={{ color: "#b80a06" }}>
                    Shri. Gajendra Singh Shekhawat ji, the{" "}
                    <b>Minister of Tourism & Culture, Government of India</b>
                  </span>
                  , Unwind Communications is recognized for its pivotal role in{" "}
                  <b>promoting India’s cultural heritage</b>. <br />
                  <br />
                  This recognition strengthens our mission to convert cultural
                  storytelling into:
                </p>
                <ul>
                  <li>Thriving Business Opportunities</li>
                  <li>Driving Tourism Growth</li>
                  <li>Empowering Local Economies</li>
                  <li>
                    Positioning India&apos;s heritage as a cornerstone of global
                    travel experiences
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
              data-aos-once="true"
              style={{ textAlign: "center" }}
            >
              <div className="video-image">
                <Image
                  src="/images/video/vision.png"
                  alt="image"
                  width={750}
                  height={500}
                  className="responsive-image"
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
