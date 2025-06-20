import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import contactData from "../data/contactData.json";


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_v51ssvs',    // Replace with your EmailJS Service ID
      'template_6t41jxq',   // Replace with your EmailJS Template ID
      form.current,
      '1qlbHqCSdcTfS2Q4W'     // Replace with your EmailJS Public Key
    ).then(
      (result) => {
        alert("Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        alert("Message failed to send.");
        console.error(error.text);
      }
    );
  };

  return (
    <section id="contact" className="contact section">
    <div className="container section-title">
      <h2>{contactData.title}</h2>
    </div>

    <div className="container">
      <div className="row gy-4">
        <div className="col-lg-5">
          <div className="info-wrap">
            <div className="info-item d-flex">
              <i className="bi bi-geo-alt flex-shrink-0" />
              <div>
                <h3>{contactData.address.heading}</h3>
                <p>{contactData.address.value}</p>
              </div>
            </div>

            <div className="info-item d-flex">
              <i className="bi bi-telephone flex-shrink-0" />
              <div>
                <h3>{contactData.phone.heading}</h3>
                <p>{contactData.phone.value}</p>
              </div>
            </div>

            <div className="info-item d-flex">
              <i className="bi bi-envelope flex-shrink-0" />
              <div>
                <h3>{contactData.email.heading}</h3>
                <p>{contactData.email.value}</p>
              </div>
            </div>

            <iframe
              src={contactData.mapUrl}
              style={{ border: 0, width: "100%", height: 270 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            />
          </div>
        </div>

        <div className="col-lg-7">
          {/* Your contact form can remain as is, or can also be dynamic if you want */}
          <form className="php-email-form">
  <div className="row gy-4">
    <div className="col-md-6">
      <label>{contactData.form.nameLabel}</label>
      <input type="text" name="name" className="form-control" required />
    </div>
    <div className="col-md-6">
      <label>{contactData.form.emailLabel}</label>
      <input type="email" name="email" className="form-control" required />
    </div>
    <div className="col-md-12">
      <label>{contactData.form.subjectLabel}</label>
      <input type="text" name="subject" className="form-control" required />
    </div>
    <div className="col-md-12">
      <label>{contactData.form.messageLabel}</label>
      <textarea name="message" rows="10" className="form-control" required></textarea>
    </div>
    <div className="col-md-12 text-center">
      <button type="submit" onClick={sendEmail}>{contactData.form.buttonText}</button>
    </div>
  </div>
</form>

        </div>
      </div>
    </div>
  </section>
  );
};

export default Contact;
