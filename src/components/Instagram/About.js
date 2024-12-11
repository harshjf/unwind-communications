"use client";

import React from "react";
import ModalForm from "../Common/Modal/ModalForm";
import Image from "next/image";

const About = () => {
  return (
    <>
      <section id="whatwedo" className="about-area pt-70">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div
              className="col-lg-5 col-md-12"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="about-image">
                <Image
                  src="/images/about/1.png"
                  className="main-image"
                  alt="image"
                  width={680}
                  height={558}
                />

                {/* <div className="shape">
                  <Image
                    src="/images/about/folded-hands.png"
                    alt="image"
                    width={182}
                    height={211}
                  />
                  <Image
                    src="/images/about/destination.png"
                    alt="image"
                    width={268}
                    height={200}
                    style={{ height: "260px", width: "320px" }}
                  />
                </div> */}
              </div>
            </div>

            <div
              className="col-lg-7 col-md-12"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="about-content">
                {/* <span className="sub-title">What we do?</span> */}
                <h2 style={{ color: "#041d33" }}>
                  Bringing India&#39;s beauty to the world, one story at a time.
                </h2>

                <p>
                  At Unwind Communications, we bring India’s most stunning
                  destinations and venues to life on streaming platforms,
                  creating a visual experience that resonates worldwide.
                </p>
                <p>
                  Our expertise extends beyond the initial presentation. We
                  amplify your story through:
                  {/* <ul>
                    <li>Targeted media PR</li>
                    <li>Strategic Digital Marketing</li>
                    <li>360° Promotion Strategy</li>
                  </ul> */}
                </p>
                <p>
                  within the MICE, Travel, and Wedding Industries. We don’t just
                  enhance brand visibility; we forge powerful narratives that
                  open up new realms of opportunity
                </p>

                <div className="btn-box">
                  <ModalForm />

                  <a href="mailto:hello@alikamaya.com" className="email">
                    hello@unwindcommunication.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
