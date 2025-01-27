import React from "react";

const ContactPage = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Bihar Nurserymen Association</h1>
          <p className="text-lg">
            We’re here to assist you! Reach out for collaborations, queries, or to join us in our mission.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-green-600 mb-6">
                Get in Touch
              </h2>
              <p className="text-lg mb-4">
                We’re always happy to hear from you. Contact us using the details below.
              </p>
              <ul className="space-y-4 text-lg">
                <li>
                  <strong>Address:</strong> E-4, Anand Vihar Colony, Bhutnath Road, Near Jewandeep Hospital, Kankarbagh Patna, Patna Bihar 800026
                </li>
                <li>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:info@biharnurserymen.org" className="text-green-600 underline">
                    info@biharnurserymen.org
                  </a>
                </li>
                <li>
                  <strong>Phone:</strong>{" "}
                  <a href="tel:+919876543210" className="text-green-600 underline">
                    +91 98765 43210
                  </a>
                </li>
              </ul>
              <img
                src="contact-img.jpg"
                alt="Contact Illustration"
                className="rounded-lg shadow-lg mt-6"
              />
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-green-600 mb-6">
                Send a Message
              </h2>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-lg font-medium mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-lg font-medium mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-lg font-medium mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Enter your message"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-green-600 text-white font-bold text-lg rounded-lg hover:bg-green-700 focus:ring-4 focus:ring-green-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-green-50 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-green-600 mb-6">Visit Us</h2>
          <p className="text-lg mb-8">
            Come visit our office to learn more about our initiatives and projects.
          </p>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <iframe
              title="Bihar Nurserymen Association Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.438217508764!2d85.14039057479269!3d25.611710383639704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5836dfc3c5b7%3A0x5703e9b6f5c9c10f!2sPatna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1691234567890!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
