"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const CommentsArea = () => {
  return (
    <>
      <div className="comments-area">
        <h3 className="comments-title">2 Comments:</h3>

        <ol className="comment-list">
          <li className="comment">
            <article className="comment-body">
              <footer className="comment-meta">
                <div className="comment-author vcard">
                  <Image
                    src="/images/youtube/yout-user1.jpg"
                    className="avatar"
                    alt="image"
                    width={300}
                    height={300}
                  />
                  <b className="fn">John Jones</b>
                  <span className="says">says:</span>
                </div>

                <div className="comment-metadata">
                  <span>April 24, 2019 at 10:59 am</span>
                </div>
              </footer>

              <div className="comment-content">
                <p>
                  Lorem Ipsum has been the industry’s standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen.
                </p>
              </div>

              <div className="reply">
                <Link href="#" className="comment-reply-link">
                  Reply
                </Link>
              </div>
            </article>

            <ol className="children">
              <li className="comment">
                <article className="comment-body">
                  <footer className="comment-meta">
                    <div className="comment-author vcard">
                      <Image
                        src="/images/youtube/yout-user2.jpg"
                        className="avatar"
                        alt="image"
                        width={300}
                        height={300}
                      />
                      <b className="fn">Steven Smith</b>
                      <span className="says">says:</span>
                    </div>

                    <div className="comment-metadata">
                      <span>April 24, 2019 at 10:59 am</span>
                    </div>
                  </footer>

                  <div className="comment-content">
                    <p>
                      Lorem Ipsum has been the industry’s standard dummy text
                      ever since the 1500s, when an unknown printer took a
                      galley of type and scrambled it to make a type specimen.
                    </p>
                  </div>

                  <div className="reply">
                    <Link href="#" className="comment-reply-link">
                      Reply
                    </Link>
                  </div>
                </article>

                <ol className="children">
                  <li className="comment">
                    <article className="comment-body">
                      <footer className="comment-meta">
                        <div className="comment-author vcard">
                          <Image
                            src="/images/youtube/yout-user3.jpg"
                            className="avatar"
                            alt="image"
                            width={300}
                            height={300}
                          />
                          <b className="fn">Sarah Taylor</b>
                          <span className="says">says:</span>
                        </div>

                        <div className="comment-metadata">
                          <span>April 24, 2019 at 10:59 am</span>
                        </div>
                      </footer>

                      <div className="comment-content">
                        <p>
                          Lorem Ipsum has been the industry’s standard dummy
                          text ever since the 1500s, when an unknown printer
                          took a galley of type and scrambled it to make a type
                          specimen.
                        </p>
                      </div>

                      <div className="reply">
                        <Link href="#" className="comment-reply-link">
                          Reply
                        </Link>
                      </div>
                    </article>
                  </li>
                </ol>
              </li>
            </ol>
          </li>

          <li className="comment">
            <article className="comment-body">
              <footer className="comment-meta">
                <div className="comment-author vcard">
                  <Image
                    src="/images/youtube/yout-user4.jpg"
                    className="avatar"
                    alt="image"
                    width={300}
                    height={300}
                  />
                  <b className="fn">John Doe</b>
                  <span className="says">says:</span>
                </div>

                <div className="comment-metadata">
                  <span>April 24, 2019 at 10:59 am</span>
                </div>
              </footer>

              <div className="comment-content">
                <p>
                  Lorem Ipsum has been the industry’s standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen.
                </p>
              </div>

              <div className="reply">
                <Link href="#" className="comment-reply-link">
                  Reply
                </Link>
              </div>
            </article>

            <ol className="children">
              <li className="comment">
                <article className="comment-body">
                  <footer className="comment-meta">
                    <div className="comment-author vcard">
                      <Image
                        src="/images/youtube/yout-user1.jpg"
                        className="avatar"
                        alt="image"
                        width={300}
                        height={300}
                      />
                      <b className="fn">James Anderson</b>
                      <span className="says">says:</span>
                    </div>

                    <div className="comment-metadata">
                      <span>April 24, 2019 at 10:59 am</span>
                    </div>
                  </footer>

                  <div className="comment-content">
                    <p>
                      Lorem Ipsum has been the industry’s standard dummy text
                      ever since the 1500s, when an unknown printer took a
                      galley of type and scrambled it to make a type specimen.
                    </p>
                  </div>

                  <div className="reply">
                    <Link href="#" className="comment-reply-link">
                      Reply
                    </Link>
                  </div>
                </article>
              </li>
            </ol>
          </li>
        </ol>

        <div className="comment-respond">
          <h3 className="comment-reply-title">Leave a Reply</h3>

          <form className="comment-form">
            <div className="comment-notes">
              <span id="email-notes">
                Your email address will not be published.
              </span>
              Required fields are marked
              <span className="required">*</span>
            </div>

            <div className="comment-form-author">
              <label>
                Name <span className="required">*</span>
              </label>
              <input
                type="text"
                id="author"
                placeholder="Your Name*"
                name="author"
                required
              />
            </div>

            <div className="comment-form-email">
              <label>
                Email <span className="required">*</span>
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email*"
                name="email"
                required
              />
            </div>

            <div className="comment-form-url">
              <label>Website</label>
              <input type="url" id="url" placeholder="Website" name="url" />
            </div>

            <div className="comment-form-comment">
              <label>Comment</label>
              <textarea
                name="comment"
                id="comment"
                cols="45"
                placeholder="Your Comment..."
                rows="5"
                required
              ></textarea>
            </div>

            <div className="comment-form-cookies-consent">
              <input
                type="checkbox"
                value="yes"
                name="comment-cookies-consent"
                id="comment-cookies-consent"
              />
              <label>
                Save my name, email, and website in this browser for the next
                time I comment.
              </label>
            </div>

            <div className="form-submit">
              <input
                type="submit"
                name="submit"
                id="submit"
                className="submit"
                value="Post A Comment"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CommentsArea;
