import React, { useState } from "react";
import {
  ContactOverlayModule,
  ContactInputModule,
} from "./ContactOverlayModule";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showOverlay, setShowOverlay] = useState(false);
  const [showInputModule, setShowInputModule] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Check if all fields are filled out
    if (formData.name && formData.email && formData.message) {
      setShowOverlay(true);
    } else {
      setShowInputModule(true);
    }
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
  };

  const handleCloseInputModule = () => {
    setShowInputModule(false);
  };

  return (
    <div className="max-w-lg mx-auto bg-black bg-opacity-75 shadow-md rounded px-8 pt-6 pb-8 mb-4 border-2 border-red-500">
      <h2 className="text-6xl text-center font-bold mb-4">Contact Us</h2>
      <div className="mb-4">
        <label
          className="block text-white text-lg font-bold mb-2"
          htmlFor="name"
        >
          Name:
        </label>
        <input
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            formData.name ? "border-green-500" : "border-red-500"
          }`}
          id="name"
          name="name"
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-white text-lg font-bold mb-2"
          htmlFor="email"
        >
          Email:
        </label>
        <input
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            formData.email ? "border-green-500" : "border-red-500"
          }`}
          id="email"
          name="email"
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-white text-lg font-bold mb-2"
          htmlFor="message"
        >
          Message:
        </label>
        <textarea
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            formData.message ? "border-green-500" : "border-red-500"
          }`}
          id="message"
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          required
        />
      </div>
      <div className="flex items-center justify-center">
        <button
          className="bg-slate-700 hover:bg-red-600 text-white text-lg font-bold focus:outline-none focus:shadow-outline py-3 px-6 rounded inline-block mt-4 transition duration-200"
          type="button"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
      {showOverlay && <ContactOverlayModule onClose={handleCloseOverlay} />}
      {showInputModule && (
        <ContactInputModule onClose={handleCloseInputModule} />
      )}
    </div>
  );
};

export default ContactForm;
