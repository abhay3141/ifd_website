import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Results = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    reason: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Fetch EmailJS keys from environment variables
  const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
  const RECEIVER_EMAIL = process.env.REACT_APP_RECIEVER_EMAIL_ID;
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the email template data
    const templateParams = {
      to_email: RECEIVER_EMAIL, // The recipient
      from_name: formData.name,
      from_email: formData.email,
      organization: formData.organization,
      reason: formData.reason,
    };

    // Send email using EmailJS
    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
      .then(
        (response) => {
          console.log("Email sent successfully!", response.status, response.text);
          setSubmitted(true);
          setTimeout(() => setSubmitted(false), 5000); // Hide confirmation after 5 sec
          setFormData({ name: "", email: "", organization: "", reason: "" });
        },
        (error) => {
          console.error("Failed to send email:", error);
        }
      );
  };

  return (
    <div className="card">
      <h2>Request Dataset Access</h2>
      <p>Fill out the form below to request access to the IndieFake Dataset.</p>

      {submitted && <p style={{ color: "green", fontWeight: "bold" }}>✅ Request submitted successfully!</p>}

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Organization:</label>
        <input type="text" name="organization" value={formData.organization} onChange={handleChange} required />

        <label>Reason for Access:</label>
        <textarea name="reason" value={formData.reason} onChange={handleChange} required />

        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
};

export default Results;