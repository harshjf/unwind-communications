"use client";

import React, { useState, useEffect } from "react";
import ModalForm from "../Common/Modal/ModalForm";
import Image from "next/image";
import Link from "next/link";


const AboutUs = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      <section id="about" className="about-area pt-70 pb-70">
        <div className="container-fluid">
          <div className="row align-items-center">
            {isMobile && (
              <h2
                style={{
                  textAlign: "center",
                }}
              >
                <b>
                  ABOUT OUR <span style={{ color: "#973d5d" }}>COMPANY</span>
                </b>
              </h2>
            )}
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
                  style={{ height: "600px", width: "350px" }}
                />
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
                {!isMobile && (
                  <h1>
                    <b>
                      ABOUT OUR{" "}
                      <span style={{ color: "#973d5d" }}>COMPANY</span>
                    </b>
                  </h1>
                )}

                <p>
                  At <b>Unwind Communications</b>, we bring{" "}
                  <b>
                    most stunning destinations and venues to life on streaming
                    platforms
                  </b>
                  , creating a visual experience that resonates worldwide.
                </p>
                <p>
                  Our expertise extends beyond the initial global reach. We
                  amplify your story through:
                  <br />
                  <br />
                  <ul>
                    <li>
                      <b>Targeted media PR</b>
                    </li>
                    <li>
                      <b>Strategic Digital Marketing</b>
                    </li>
                    <li>
                      <b>360° Promotion Strategy</b>
                    </li>
                  </ul>
                </p>
                <br />
                <p>
                  within the <b>MICE, Travel, Event </b> and{" "}
                  <b>Wedding Industries.</b> <br />
                  We don&apos;t just enhance brand visibility; we forge powerful
                  narratives through Vlogs that open up new realms of
                  opportunity <b>for B2B opportunities & conversions</b>.
                </p>

                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "end",
                  }}
                >
                  <Link className="about-company-btn" href="/about" >
                    <span>View more</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="18"
                      height="18"
                      x="0"
                      y="0"
                      viewBox="0 0 32 32"
                    >
                      <g>
                        <path
                          d="M26.68 3.867H8.175a1 1 0 0 0 0 2h16.544L4.2 26.387A1 1 0 1 0 5.613 27.8l20.52-20.52v16.545a1 1 0 0 0 2 0V5.321a1.456 1.456 0 0 0-1.453-1.454z"
                          fill="#000000"
                        ></path>
                      </g>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
