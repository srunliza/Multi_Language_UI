// components/ContactForm.js

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simulate an API response
    const mockResponse = {
      ok: true, // Change to `false` to simulate an error response
      json: async () => ({ message: "Email sent successfully!" }),
    };

    const response = await new Promise((resolve) =>
      setTimeout(() => resolve(mockResponse), 1000)
    );

    if (response.ok) {
      // Handle successful response
      const data = await response.json();
      console.log(data.message);
      setResponseMessage(data.message);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } else {
      // Handle error response
      console.log("Error sending email");
      setResponseMessage("Error sending email");
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="username"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="example@gmail.com"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          id="message"
          placeholder="message"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
          rows="4"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>
      <button
        type="submit"
        className="px-6 py-2 text-white bg-blue-800 rounded-md hover:bg-blue-700"
      >
        Submit
      </button>
      {responseMessage && (
        <p className="mt-4 text-green-600">{responseMessage}</p>
      )}
    </form>
  );
}
