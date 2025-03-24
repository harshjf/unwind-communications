import React from "react";

const PrivacyPolicyContent = () => {
  return (
    <>
      <div
        className="main-text-area"
        style={{ paddingTop: "180px", paddingBottom: "80px" }}
      >
        <div className="container">
          <h2 className="mb-4" style={{ color: "#041d33" }}>
            Privacy Policy
          </h2>

          <p className="mb-4">
            Welcome to Unwind Communications official website. We respect your
            privacy and are committed to protecting your personal data. This
            policy outlines how we handle your information.
          </p>

          <ul className="mb-4 list-disc pl-6 space-y-3">
            <li>
              <p>
                We may collect personal information such as your name, email
                address, and phone number when you sign up for updates.
              </p>
            </li>
            <li>
              <p>
                Your information is used to provide you with relevant content,
                updates, and services related to our offerings.
              </p>
            </li>
            <li>
              <p>
                We use cookies to enhance your experience. You can control
                cookie settings in your browser.
              </p>
            </li>
            <li>
              <p>
                We implement security measures to protect your data from
                unauthorized access, alteration, or disclosure.
              </p>
            </li>
            <li>
              <p>
                You have the right to request access to, correction of, or
                deletion of your personal information.
              </p>
            </li>
          </ul>

          <p>
            For any questions, please contact us at{" "}
            <u>
              <a
                href="mailto:info@unwindcommunications.com"
                style={{ color: "#973d5d" }}
              >
                info@unwindcommunications.com
              </a>
            </u>
          </p>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyContent;
