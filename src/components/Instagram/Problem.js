"use client";

import React, { useState } from "react";
import Image from "next/image";

function Problem() {
  const [isOpen, setOpen] = useState(false);
  return (
    <section id="problem" className="problem-area">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="video-image">
              <Image
                src="/images/problem/problem1.gif"
                alt="image"
                width={750}
                height={500}
                style={{ border: "none" }}
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="video-content">
              <h2 style={{ color: "#041d33" }}>The Problem We Solve</h2>
              <p>
                The tourism, wedding, MICE and event industry is evolving, yet{" "}
                <b>culturally rich destinations</b> and{" "}
                <b>venues remain underrepresented</b> in the digital landscape
              </p>
              <p>
                Without{" "}
                <b>
                  engaging, high-quality audio-visual content and targeted
                  promotions
                </b>
                , they fail to connect with global audiences and stand out in a
                saturated tourism market dominated by{" "}
                <b>social media and experiential storytelling</b>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Problem;
