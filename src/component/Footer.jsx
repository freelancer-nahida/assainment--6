
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white border-t-4 ">

      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* Main Footer */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">

          {/* Logo and Description */}
          <div className="col-span-2">
            <h2 className="text-2xl font-bold">
              DigiTools
            </h2>

            <p className="text-gray-400 text-sm mt-3 leading-5 max-w-xs">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-medium mb-3">Product</h3>
            <ul className="text-gray-400 text-sm space-y-3">
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#templates">Templates</a></li>
              <li><a href="#integrations">Integrations</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-medium mb-3">Company</h3>
            <ul className="text-gray-400 text-sm space-y-3">
              <li><a href="#about">About</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#press">Press</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-medium mb-3">Resources</h3>
            <ul className="text-gray-400 text-sm space-y-3">
              <li><a href="#documentation">Documentation</a></li>
              <li><a href="#help">Help Center</a></li>
              <li><a href="#community">Community</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-12 pt-5 flex flex-col md:flex-row justify-between gap-4 text-gray-500 text-xs">

          <p>
            © 2026 Digitools. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#cookies">Cookies</a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
