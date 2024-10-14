// src/components/Footer.jsx
import React from "react";

const Footer = () => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p>VESIT, Collector Colony, Chembur, Mumbai</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@VESITuniversity.edu</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul>
            <li>
              <a href="#" className="hover:text-blue-300">
                Campus Map
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300">
                Library
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300">
                Career Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300">
                Alumni
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-300">
              Facebook
            </a>
            <a href="#" className="hover:text-blue-300">
              Twitter
            </a>
            <a href="#" className="hover:text-blue-300">
              Instagram
            </a>
            <a href="#" className="hover:text-blue-300">
              LinkedIn
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
          <p className="mb-2">Stay updated with our latest news and events</p>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 rounded text-gray-800"
          />
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; 2024 VESIT. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
