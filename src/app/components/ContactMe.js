"use client";
import React, { useState } from "react";

// Replace with your Formspree form ID
const FORM_ENDPOINT = "https://formspree.io/f/xvgagkbn";

const ContactMe = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ loading: false, error: null, success: false });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: null, success: false });

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus({ loading: false, error: null, success: true });
        setFormData({ name: "", email: "", message: "" });
      } else {
        const data = await res.json();
        setStatus({ loading: false, error: data.error || "Submission failed.", success: false });
      }
    } catch (err) {
      setStatus({ loading: false, error: "Submission error. Please try again.", success: false });
    }
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-slate-900 to-black text-white py-16"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-6">Contact Me</h2>
        <p className="text-lg text-center mb-8">
          I'd love to hear from you! Feel free to reach out for
          collaborations, questions, or just a friendly chat.
        </p>

        {status.success && (
          <p className="text-green-400 text-center mb-4">
            Thanks! Your message has been sent.
          </p>
        )}
        {status.error && (
          <p className="text-red-400 text-center mb-4">
            {status.error}
          </p>
        )}

        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full text-black border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full text-black border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full text-black border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            disabled={status.loading}
            className="bg-black text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50">
            {status.loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
