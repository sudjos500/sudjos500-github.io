import React from "react";
import "./ContactMe.css";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import ContactForm from "./ContactForm/ContactForm";

const ContactMe = () => {
  return (
    <section id="contact" className="contact-container">
      <h5>Contact Me</h5>

      <div className="contact-content">
        <div style={{flex: 1}}>
          <ContactInfoCard
            iconUrl="./assets/images/email-icon.svg"
            text="sudeepshetty.s555@gmail.com"
          />

          <ContactInfoCard
            iconUrl="./assets/images/linkedin-logo.svg"
            text="https://www.linkedin.com/in/sudeep-s-shetty/"
          />
        </div>

        <div style={{flex: 1}}>
          {/* <ContactForm /> */}
          <ContactInfoCard
            iconUrl="./assets/images/call-logo.svg"
            text="9964302303"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
