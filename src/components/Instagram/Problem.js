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
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="video-content">
              <h2 style={{ color: "#041d33" }}>The Challenge</h2>
              <p>
                The tourism and event industry is evolving, yet culturally rich
                destinations and venues remain underrepresented in the digital
                landscape.
              </p>
              <p>
                Without engaging, high-quality audio-visual content, they fail
                to connect with global audiences and stand out in a saturated
                tourism market dominated by social media and experiential
                storytelling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Problem;
