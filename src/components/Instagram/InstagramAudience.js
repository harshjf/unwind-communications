"use client";

import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import Link from "next/link";
import Image from "next/image";

const InstagramAudience = () => {
  const [isOpen, setOpen] = useState(false);
  const [videoId, setVideoId] = useState("");
  const openVideoModal = (id) => {
    setVideoId(id);
    setOpen(true);
  };

  return (
    <>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId={videoId}
        onClose={() => setOpen(false)}
      />

      <section
        id="highlights"
        className="audience-area pb-100 pt-70"
        style={{
          backgroundColor: "#f6dee7",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="audience-image">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div
                      className="image"
                      onClick={() => openVideoModal("AqCw1fJNO8A")}
                      style={{ cursor: "pointer" }}
                    >
                      <Image
                        src="/images/work/1.png"
                        alt="image"
                        width={340}
                        height={375}
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div
                      className="image"
                      onClick={() => openVideoModal("Ug-WRTlwdKY")}
                      style={{ cursor: "pointer" }}
                    >
                      <Image
                        src="/images/work/2.png"
                        alt="image"
                        width={340}
                        height={375}
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div
                      className="image"
                      onClick={() => openVideoModal("YEBpCBsSmSo")}
                      style={{ cursor: "pointer" }}
                    >
                      <Image
                        src="/images/work/3.png"
                        alt="image"
                        width={620}
                        height={375}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="audience-content">
                <h2 style={{ color: "#041d33" }}>
                  Highlights of Shefali&#39;s work
                </h2>

                <div className="audience-content-inner instagram-audience-content">
                  <div className="row align-items-center">
                    <div className="col-lg-12 col-md-5">
                      <div className="audience-text">
                        <h3>
                          Music Videos, Destination Vlogs and Media features
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="audience-content-inner instagram-collaborations-content">
                  <h5>44.2K Followers On Instagram</h5>

                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div
                        className="single-collaborations-box"
                        onClick={() => openVideoModal("tTqOOl52Y5M")}
                        style={{ cursor: "pointer" }}
                      >
                        <Image
                          src="/images/work/4.png"
                          alt="image"
                          width={286}
                          height={260}
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div
                        className="single-collaborations-box"
                        onClick={() => openVideoModal("lCXW0Dd2Ry0")}
                        style={{ cursor: "pointer" }}
                      >
                        <Image
                          src="/images/work/5.png"
                          alt="image"
                          width={286}
                          height={260}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InstagramAudience;
