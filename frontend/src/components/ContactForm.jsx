import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          name="name"
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
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
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          name="email"
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
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
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="message"
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
        />
      </div>
      <div className="flex items-center justify-center">
        <button
          className="bg-slate-700 hover:bg-red-600 text-white text-lg font-bold focus:outline-none focus:shadow-outline py-3 px-6 rounded inline-block mt-4 transition duration-200"
          type="button"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
