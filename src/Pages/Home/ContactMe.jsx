import React, { useState } from "react";
import axios from "axios";
import Notification from "./Notification";

export default function ContactMe() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    message: "",
    acceptedTerms: false,
  });

  const [notificationMessage, setNotificationMessage] = useState("");

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post("http://localhost/api/user/save", formData)
      .then((response) => {
        console.log(response.data);
        setNotificationMessage(`Data Saved`);
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">contact me</p>
        <h2>Contact Me</h2>
        <p className="text-lg"></p>
      </div>
      <form className="contact--form--container" onSubmit={handleSubmit}>
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="firstname"
              id="first-name"
              value={formData.firstname}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="lastname"
              id="last-name"
              value={formData.lastname}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Phone Number</span>
            <input
              type="number"
              className="contact--input text-md"
              name="phonenumber"
              id="phone-number"
              value={formData.phonenumber}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            name="message"
            rows="8"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your message..."
          />
        </label>
        <label htmlFor="checkbox" className="checkbox--label">
          <input
            type="checkbox"
            name="acceptedTerms"
            id="checkbox"
            checked={formData.acceptedTerms}
            onChange={handleChange}
            required
          />
          <span className="text-sm">I accept the terms</span>
        </label>
        <div>
          <button className="btn btn-primary contact--form--btn" type="submit">
            Submit
          </button>
        </div>
      </form>

      {/* Tampilkan notifikasi */}
      {notificationMessage && <Notification message={notificationMessage} />}
    </section>
  );
}
