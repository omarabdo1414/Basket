"use client";
import { Phone, Mail } from "lucide-react";
import { useState } from "react";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email) {
      setStatus("Please fill in required fields.");
      return;
    }
  };
  return (
    <>
      <div className="p-10 text-center">
        <h1 className="text-4xl mb-4">Get In Touch</h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
          Donec sollicitudin, nisl nec tincidunt ullamcorper, nisl nunc. <br />
          eget aliquam
        </p>
        {/* Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Location */}
          <div className="p-6 bg-gray-100 rounded-2xl">
            <img src="/Assets/Icon.svg" className="mx-auto mb-2"/>
            <h3 className="text-xl mb-2 text-gray-700">
              102 Street 2714 Donovan
            </h3>
            <p className="text-gray-600">Lorem ipsum dolar site amet discont</p>
          </div>

          {/* Phone */}
          <div className="p-6 bg-gray-100 rounded-2xl">
            <Phone
              className="mx-auto w-8 h-8  mb-4"
              style={{ color: "#35AFA0" }}
            />
            <h3 className="text-xl mb-2 text-gray-700">+02 1234 567 88</h3>
            <p className="text-gray-600">Lorem ipsum dolar site amet discont</p>
          </div>

          {/* Message */}
          <div className="p-6 bg-gray-100 rounded-2xl">
            <Mail
              className="mx-auto w-8 h-8  mb-4"
              style={{ color: "#35AFA0" }}
            />
            <h3 className="text-xl mb-2 text-gray-700">info@example.com</h3>
            <p className="text-gray-600">Lorem ipsum dolar site amet discont</p>
          </div>
        </div>
      </div>
      <section className="bg-white shadow-lg rounded-xl p-8 max-w-2xl mx-auto my-12 border border-gray-200">
        <h3 className="text-2xl  mb-2 text-center">Send Us</h3>
        <p className="text-gray-600 text-center mb-8">
          Contact us for all your questions and opinions ,or you can solve your
          problem in a shorter time with our contact <br /> offices
        </p>

        <form onSubmit={handleSubmit} className="text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="name" className="block mb-1 text-gray-700">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="w-full bg-gray-100 p-3 rounded shadow focus:outline-none focus:ring-2 focus:ring-red-400"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 text-gray-700">
                Email*
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full bg-gray-100 p-3 rounded shadow focus:outline-none focus:ring-2 focus:ring-red-400"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block mb-1 text-gray-700">
              Phone number
            </label>
            <input
              id="phone"
              type="text"
              className="w-full bg-gray-100 p-3 rounded shadow focus:outline-none focus:ring-2 focus:ring-red-400"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-1 text-gray-700">
              Your Message
            </label>
            <textarea
              id="message"
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-gray-100 p-3 rounded shadow focus:outline-none focus:ring-2 focus:ring-red-400"
            ></textarea>
          </div>
          <div className="">
            <button
              type="submit"
              className=" text-white px-6 py-3 rounded-lg shadow-md transition duration-200 cursor-pointer"
              style={{ backgroundColor: "#35AFA0" }}
            >
              Send Message
            </button>
          </div>
        </form>
        {status && (
          <p className="mt-4 text-center text-sm text-gray-700">{status}</p>
        )}
      </section>
    </>
  );
}
