/* "use client";

import React, { useState, useEffect } from "react";
import Link from "next/link"; 
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const currentRoute = usePathname();
  const [collapsed, setCollapsed] = useState(true);
  const [activeIndex, setActiveIndex] = useState("");

  const toggleNavbar = (index) => {
    setCollapsed(!collapsed);
    setActiveIndex(index);
  };

  useEffect(() => {
    const handleScroll = () => {
      const elementId = document.getElementById("navbar");
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const classOne = collapsed
    ? "collapse navbar-collapse"
    : "navbar-collapse collapse show";
  const classTwo = collapsed
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <nav id="navbar" className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link
            href="/instagram"
            className="navbar-brand"
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            <Image
              src="/images/logounwind.png"
              alt="logo"
              width={100}
              height={30}
              style={{ objectFit: "contain" }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                lineHeight: "1.2",
                fontSize: "16px",
                fontWeight: "bold",
                fontFamily: "Garamond",
              }}
            >
              <span className="brand-text shimmer unwind">UNWIND</span>
              <span className="brand-text shimmer communications">
                COMMUNICATIONS
              </span>
            </div>
          </Link>

          <button
            onClick={toggleNavbar}
            className={classTwo}
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={classOne} id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link
                  href="/"
                  onClick={() => toggleNavbar("Home")}
                  className={`nav-link ${currentRoute === "/" && "active"} `}
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  href="/about"
                  onClick={() => toggleNavbar("about")}
                  className={`nav-link ${
                    currentRoute === "/about/" && "active"
                  } `}
                >
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  href="/recognition"
                  onClick={() => toggleNavbar("recognition")}
                  className={`nav-link ${
                    currentRoute === "/recognition/" && "active"
                  } `}
                >
                  Recognition
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  href="/services"
                  onClick={() => toggleNavbar("services")}
                  className={`nav-link ${
                    currentRoute === "/services/" && "active"
                  } `}
                >
                  Services
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  href="/partner"
                  onClick={() => toggleNavbar("partner")}
                  className={`nav-link ${
                    currentRoute === "/partner/" && "active"
                  } `}
                >
                  Partners
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  href="/contact-us"
                  onClick={() => toggleNavbar("contact-us")}
                  className={`nav-link ${
                    currentRoute === "/contact-us/" && "active"
                  } `}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <style jsx>{`
        .shimmer {
          position: relative;
          display: inline-block;
          overflow: hidden;
        }

        .shimmer::before {
          content: "";
          position: absolute;
          top: 0;
          left: -150%;
          width: 300%;
          height: 100%;
          background: linear-gradient(
            120deg,
            transparent 0%,
            rgba(255, 255, 255, 0.3) 50%,
            transparent 100%
          );
          animation: shimmerEffect 2.5s infinite linear;
        }

        .unwind {
          color: #973d5d; 
        }

        .communications {
          color: #041d33; 
        }

        @keyframes shimmerEffect {
          0% {
            left: -150%;
          }
          100% {
            left: 150%;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
 */

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link"; // Importing Link from next/link
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const currentRoute = usePathname();
  const [collapsed, setCollapsed] = useState(true);
  const [activeIndex, setActiveIndex] = useState("");

  const toggleNavbar = (index) => {
    setCollapsed(!collapsed);
    setActiveIndex(index);
  };

  useEffect(() => {
    const handleScroll = () => {
      const elementId = document.getElementById("navbar");
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const classOne = collapsed
    ? "collapse navbar-collapse"
    : "navbar-collapse collapse show";
  const classTwo = collapsed
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <nav id="navbar" className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link
            href="/instagram"
            className="navbar-brand"
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            <Image
              src="/images/logounwind.png"
              alt="logo"
              width={100}
              height={25}
              style={{ objectFit: "contain", height: "80px" }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                lineHeight: "1.2",
                fontSize: "16px",
                fontWeight: "bold",
                fontFamily: "Garamond",
              }}
            >
              <span
                className="brand-text shimmer"
                style={{ color: "#973d5d", fontWeight: "900" }}
              >
                UNWIND
              </span>
              <span
                className="brand-text shimmer"
                style={{ color: "#041D33", fontWeight: "900" }}
              >
                COMMUNICATIONS
              </span>
            </div>
          </Link>

          <button
            onClick={toggleNavbar}
            className={classTwo}
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={classOne} id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link
                  href="/"
                  onClick={() => toggleNavbar("Home")}
                  className={`nav-link ${currentRoute === "/" && "active"} `}
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  href="/about"
                  onClick={() => toggleNavbar("about")}
                  className={`nav-link ${
                    currentRoute === "/about/" && "active"
                  } `}
                >
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  href="/recognition"
                  onClick={() => toggleNavbar("recognition")}
                  className={`nav-link ${
                    currentRoute === "/recognition/" && "active"
                  } `}
                >
                  Recognition
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  href="/services"
                  onClick={() => toggleNavbar("services")}
                  className={`nav-link ${
                    currentRoute === "/services/" && "active"
                  } `}
                >
                  Services
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  href="/partner"
                  onClick={() => toggleNavbar("partner")}
                  className={`nav-link ${
                    currentRoute === "/partner/" && "active"
                  } `}
                >
                  Partners
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/blogs"
                  onClick={() => toggleNavbar("partner")}
                  className={`nav-link ${
                    currentRoute === "/blogs/" && "active"
                  } `}
                >
                  Blogs
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  href="/contact-us"
                  onClick={() => toggleNavbar("contact-us")}
                  className={`nav-link ${
                    currentRoute === "/contact-us/" && "active"
                  } `}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
