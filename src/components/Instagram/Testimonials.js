"use client";

import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import "aos/dist/aos.css";

const Testimonials = () => {
  const [isOpen, setOpen] = useState(false);

  // Framer-motion variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const stagger = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  return (
    <>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="mwEZkRvjRC8"
        onClose={() => setOpen(false)}
      />

      <section
        id="testimonials"
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
            <h2 style={{ color: "#041d33" }}>Testimonials</h2>
            <p>
              Testimonials by chomu palace on increase in sales after grand
              visibility in ghoomar video across all media platforms,
              promotions, lead generation campaigns by Shefali Saxena and her
              team.
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
                <div className="videos-image">
                  <Image
                    src="/images/testimonials/2.png"
                    alt="image"
                    width={602}
                    height={514}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
          <div className="row">
            <div className="col-12 text-center mt-4">
              <Link href="/testimonials" className="custom-link">
                View More Testimonials
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
