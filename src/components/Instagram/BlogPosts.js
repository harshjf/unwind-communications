"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import blogData from "../../utils/Blogs/BlogData";

const BlogPosts = () => {
  return (
    <section id="blog" className="blog-area blog-details-area">
      <div className="container">
        <div
          className="section-title mb-5"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
          data-aos-once="true"
        >
          <h1>
            <b>
              FROM <span style={{ color: "#973d5d" }}>THE BLOG</span>
            </b>
          </h1>
        </div>

        <div className="row">
          {blogData.map((blog, index) => (
            <div
              key={index}
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="single-blog-post">
                <div className="post-image">
                  <Link href="/blogs" target="_blank">
                    <Image
                      src={blog.images[0]}
                      alt="blog image"
                      width={700}
                      height={830}
                      className= "blog-image"
                    />
                  </Link>
                </div>

                <div className="post-content">
                  <ul className="post-meta">
                    <li>
                      <Link href={blog.blogLink}>{blog.title}</Link>
                    </li>
                    <li>{blog.readTime}</li>
                  </ul>
                  <h3>
                    <Link href={blog.blogLink} target="_blank">
                      {blog.content[0].slice(0, 100)}...
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
