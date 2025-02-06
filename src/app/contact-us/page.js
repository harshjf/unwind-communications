import Navbar from "../../components/Layouts/Navbar";
import ContactUsForm from "@/components/Instagram/ContactUsForm";
import Footer from "@/components/Layouts/Footer";
import ContactInfo from "@/components/Instagram/ContactInfo";

export default function page() {
  return (
    <>
      <Navbar />
      <div
        className="process-container"
        style={{ marginLeft: "50px", paddingTop: "180px" }}
      >
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.1140612126655!2d72.82117477444613!3d19.146483849757427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b614f3bbdb19%3A0x80d65b5ce70b17c3!2sGreenfields%20Society!5e0!3m2!1sen!2sin!4v1738869271539!5m2!1sen!2sin"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
