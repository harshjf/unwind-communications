import React from "react";

const Marquee = () => {
  return (
    <section id="marquee" className="marquee-section">
      <div class="marquee">
        <div class="marquee-group">
          <div class="text">TIMES OF INDIA HEADLINER</div>
          <div className="dot"></div>
          <div class="text">MIDDAY NEWSPAPER ACHIEVER’S AWARD</div>
          <div className="dot"></div>
          <div class="text">WOW AWARDS RECOGNITION</div>
        </div>
        <div aria-hidden="true" class="marquee-group">
          <div className="dot"></div>
          <div class="text">TIMES OF INDIA HEADLINER</div>
          <div className="dot"></div>
          <div class="text">MIDDAY NEWSPAPER ACHIEVER’S AWARD</div>
          <div className="dot"></div>
          <div class="text">WOW AWARDS RECOGNITION</div>
          <div className="dot"></div>
        </div>
      </div>
    </section>
  );
};

export default Marquee;
