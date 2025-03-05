import React from "react";
import "./index.scss";
import "../page.scss";
import Swal from "sweetalert2";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "5f6189a1-4c5e-4578-a320-378151eb9a59");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      //console.log("Success", res);
      Swal.fire({
        title: "Success!",
        text: "Messege sent successfully!",
        icon: "success",
      });
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="page-header-container">
        <div className="page-header">
          <h1>Contact</h1>
        </div>
      </div>
      <section className="contact-form">
        <form onSubmit={onSubmit}>
          <h2>Contact Form</h2>
          <div className="input-box">
            <label>Full Name</label>
            <input
              type="text"
              className="field"
              placeholder="Enter your name"
              name="name"
              required
            />
          </div>
          <div className="input-box">
            <label>Email Address</label>
            <input
              type="email"
              className="field"
              placeholder="Enter your email"
              name="email"
              required
            />
          </div>
          <div className="input-box">
            <label>Your Message</label>
            <textarea
              name="message"
              className="field mess"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
