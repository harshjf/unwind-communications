import Navbar from "../../components/Layouts/Navbar";
import ContactUsForm from "@/components/Instagram/ContactUsForm";
import Footer from "@/components/Layouts/Footer";
import ContactInfo from "@/components/Instagram/ContactInfo";

export default function page() {
  return (
    <>
      <Navbar />
      <div className="process-container" style={{ paddingTop: "180px" }}>
        <div className="industify_fn_contact">
          <div className="container">
            <div className="contact_in">
              <ContactUsForm />
            </div>
            <div className=" text-white">.</div>

            <ContactInfo />
            <div className="map_holder my-4">
              <iframe
                width="100%"
                height="400"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.5528732273074!2d72.83665207444119!3d18.951175355880835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce258ee24ed5%3A0xc8a8c9808f031eee!2sAbhay%20Steel%20House%2C%20Masjid%20Bandar%20East%2C%20Masjid%20Bandar%2C%20Mumbai%2C%20Maharashtra%20400009!5e0!3m2!1sen!2sin!4v1741148094137!5m2!1sen!2sin"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
