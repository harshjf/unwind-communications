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

  useEffect(() => {
    menuActiveClass();
  }, []);

  const menuActiveClass = () => {
    const mainNavLinks = document.querySelectorAll(".navbar-nav li a");
    window.addEventListener("scroll", () => {
      const fromTop = window.scrollY;
      mainNavLinks.forEach((link) => {
        if (link.hash) {
          const section = document.querySelector(link.hash);

          if (
            section?.offsetTop <= fromTop &&
            section?.offsetTop + section.offsetHeight > fromTop
          ) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        }
      });
    });
  };

  const classOne = collapsed
    ? "collapse navbar-collapse"
    : "navbar-collapse collapse show";
  const classTwo = collapsed
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <nav
        id="navbar"
        className="navbar navbar-expand-lg navbar-light bg-light"
      >
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
              }}
            >
              <span
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#973d5d",
                }}
              >
                UNWIND
              </span>
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: "400",
                  color: "#041D33",
                }}
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
                  className={`nav-link ${currentRoute === "/about/" && "active"} `}
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

              {/* <li className="nav-item">
                <Link
                  href="/#challenge"
                  onClick={toggleNavbar}
                  className="nav-link"
                >
                  Tackling the Challenge
                </Link>
              </li> */}

              {/* <li className="nav-item">
                <Link
                  href="/#casestudy"
                  onClick={toggleNavbar}
                  className="nav-link"
                >
                  Case Study
                </Link>
              </li> */}

              {/* <li className="nav-item">
                <Link
                  href="/#interviews"
                  onClick={toggleNavbar}
                  className="nav-link"
                >
                  Radio Interviews
                </Link>
              </li> */}

              {/* <li className="nav-item">
                <Link
                  href="/#highlights"
                  onClick={toggleNavbar}
                  className="nav-link"
                >
                  Highlights
                </Link>
              </li>
 */}
              {/* <li className="nav-item">
                <Link href="/#blog" onClick={toggleNavbar} className="nav-link">
                  Blog
                </Link>
              </li> */}

              <li className="nav-item">
                <Link
                  href="/partner"
                  // onClick={toggleNavbar}
                  onClick={() => toggleNavbar("partner")}
                  className={`nav-link ${
                    currentRoute === "/partner/" && "active"
                  } `}
                >
                  Partner
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
