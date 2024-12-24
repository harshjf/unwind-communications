"use client";

import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import ModalVideo from "react-modal-video";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import "aos/dist/aos.css";

const Testimonials = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  const [isOpen, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const stagger = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const openImageModal = (src) => {
    setSelectedImage(src);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="sFfnxFmCLgA"
        onClose={() => setOpen(false)}
      />

      <Modal
        isOpen={!!selectedImage}
        onRequestClose={closeImageModal}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            zIndex: 1000,
          },
          content: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "0",
            background: "transparent",
            border: "none",
            overflow: "hidden",
            height: isMobile ? "auto" : "90%",
          },
        }}
      >
        {selectedImage && (
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src={selectedImage}
              alt="Selected"
              width={800}
              height={600}
              style={{ objectFit: "contain" }}
            />
            <button
              onClick={closeImageModal}
              style={{
                position: "absolute",
                top: 10,
                right: 10,
                background: "rgba(0, 0, 0, 0.6)",
                border: "none",
                color: "#fff",
                padding: "10px",
                borderRadius: "50%",
                cursor: "pointer",
              }}
            >
              ✕
            </button>
          </div>
        )}
      </Modal>

      <section
        id="casestudy"
        className="featured-videos-area pt-16"
        style={{
          marginTop: "20px",
          backgroundColor: "#f4f3ef",
          paddingBottom: "40px",
        }}
      >
        <div className="container" style={{ paddingTop: "30px" }}>
          <motion.div
            className="section-title"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="800"
            data-aos-once="true"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 style={{ color: "#041d33" }}>
              Case <span style={{ color: "#973d5d" }}>Study</span>
            </h2>
            <p>
              Chomu Palace faced challenges in reaching its target audience
              effectively. Through a comprehensive media strategy including the
              Ghoomar video campaign, Shefali Saxena and her team increased
              visibility across all platforms. This resulted in a significant
              boost in sales, with targeted promotions and lead generation
              campaigns driving customer engagement.
            </p>
          </motion.div>

          <motion.div
            className="row"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div
              className="col-lg-6 col-md-12"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <div className="single-featured-videos-box">
                {isMobile ? (
                  <div className="videos-image">
                    <Image
                      src="/images/testimonials/1m.png"
                      alt="image"
                      width={602}
                      height={514}
                      style={{ height: "600px", width: "auto" }}
                    />
                    <span className="icon">
                      <i className="bx bx-video-recording"></i>
                    </span>

                    <div
                      onClick={() => setOpen(true)}
                      className="link-btn"
                    ></div>
                  </div>
                ) : (
                  <div className="videos-image">
                    <Image
                      src="/images/testimonials/1.png"
                      alt="image"
                      width={602}
                      height={514}
                      style={{ height: "600px", width: "auto" }}
                    />
                    <span className="icon">
                      <i className="bx bx-video-recording"></i>
                    </span>

                    <div
                      onClick={() => setOpen(true)}
                      className="link-btn"
                    ></div>
                  </div>
                )}
                {/*  <div className="videos-image">
                  <Image
                    src="/images/testimonials/1.png"
                    alt="image"
                    width={602}
                    height={514}
                    style={{ height: "600px", width: "auto" }}
                  />
                  <span className="icon">
                    <i className="bx bx-video-recording"></i>
                  </span>

                  <div onClick={() => setOpen(true)} className="link-btn"></div>
                </div> */}

                <div className="videos-content">
                  <h3
                    onClick={() => setOpen(true)}
                    style={{ cursor: "pointer" }}
                  >
                    Testimonial By C.P. Rathore, GM, Chomu Palace
                  </h3>

                  {/* <ul className="videos-meta">
                    <li>106K views</li>
                  </ul> */}
                </div>
              </div>
            </motion.div>

            <motion.div
              className="col-lg-6 col-md-12"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <div className="single-featured-videos-box">
                <div className="videos-image" style={{ cursor: "pointer" }}>
                  <Image
                    src="/images/testimonials/2.png"
                    alt="image"
                    width={602}
                    height={514}
                    onClick={() => openImageModal("/images/testimonials/2.png")}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
          {/* <div className="row">
            <div className="col-12 text-center mt-4">
              <Link href="/testimonials" className="custom-link">
                View More Testimonials
              </Link>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Testimonials;
