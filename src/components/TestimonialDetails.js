"use client";
import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import { motion } from "framer-motion";
import {
  FaDollarSign,
  FaChartLine,
  FaEye,
  FaThumbsUp,
  FaCommentDots,
} from "react-icons/fa";
import "aos/dist/aos.css";
import Modal from "react-modal";
import ModalVideo from "react-modal-video";
import Image from "next/image";

const TestimonialDetails = () => {
  const [showCard, setShowCard] = useState(true);
  const [scrollY, setScrollY] = useState(0);

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
      <div className="testimonial-container">
        <div className="youtube-container">
          <YouTube
            videoId="mwEZkRvjRC8"
            className="youtube-video"
            opts={{
              playerVars: {
                autoplay: 1,
                controls: 0,
                showinfo: 0,
                modestbranding: 1,
                loop: 1,
                playlist: "mwEZkRvjRC8",
                mute: 1,
                rel: 0,
                disablekb: 1,
              },
            }}
          />
        </div>

        <div className="overlay"></div>

        {/*  <div className="circle-container">
          <div className="circle-wrapper">
            <motion.div
              className="circle-2"
              initial={{ y: "-100vh" }} // This ensures the square starts from above
              animate={{ y: 0 }} // This moves it to its final position
              transition={{ duration: 1.4, type: "spring" }} // Smooth spring effect
              style={{
                transform: `translateY(${scrollY * 0.1}px)`, // Adjust scroll movement
              }}
            >
              <div className="rotating-border-container">
                <div className="rotating-border"></div>
                <div className="circle-image-container">
                  <img
                    src="/images/testimonials/5.webp"
                    alt="Person 2"
                    className="circle-image"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div> */}

        <div className="stats-box-container">
          <h2 className="stats-heading">Campaign Impact</h2>
          <div className="stats-row">
            <div className="stat-item">
              <FaDollarSign className="stat-icon" /> Revenue Increased:{" "}
              <b>25%</b>
            </div>
            <div className="stat-item">
              <FaChartLine className="stat-icon" /> Bookings Increased:{" "}
              <b>82%</b>
            </div>
          </div>

          <div className="youtube-stats">
            <p>
              <b>Performance Highlights</b>
            </p>
          </div>

          <div className="stats-row">
            <div className="stat-item">
              <FaEye className="stat-icon" /> Views: <b>1.2K</b>
            </div>
            <div className="stat-item">
              <FaThumbsUp className="stat-icon" /> Likes: <b>345</b>
            </div>
            <div className="stat-item">
              <FaCommentDots className="stat-icon" /> Comments: <b>45</b>
            </div>
          </div>
        </div>
      </div>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="mwEZkRvjRC8"
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
            height: "90%",
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
        id="testimonials"
        className="featured-videos-area pt-16"
        style={{
          marginTop: "50px",
          /*  backgroundColor: "#f4f3ef", */
          paddingBottom: "40px",
        }}
      >
        <h1
          style={{
            fontSize: "30px",
            color: "#041d33",

            textAlign: "left",
            marginLeft: "30px",
          }}
        >
          Testimonials
        </h1>
        <div className="container">
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
            {/*  <p>
              Testimonials by chomu palace on increase in sales after grand
              visibility in ghoomar video across all media platforms,
              promotions, lead generation campaigns by Shefali Saxena and her
              team.
            </p> */}
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
                <div className="videos-image">
                  <Image
                    src="/images/testimonials/1.jpg"
                    alt="image"
                    width={602}
                    height={514}
                  />
                  <span className="icon">
                    <i className="bx bx-video-recording"></i>
                  </span>

                  <div onClick={() => setOpen(true)} className="link-btn"></div>
                </div>

                <div className="videos-content">
                  <h3
                    onClick={() => setOpen(true)}
                    style={{ cursor: "pointer" }}
                  >
                    Ghoomar | Shefali Saxena | Suhel Rais Khan | Chomu Palace |
                    Royal Folk | Unwind Communications
                  </h3>

                  <ul className="videos-meta">
                    <li>106K views</li>
                  </ul>
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
        </div>
      </section>
    </>
  );
};

export default TestimonialDetails;
