import React from "react";
import { FaHome } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="flex flex-col w-full ">
      <div>
        <a className="flex items-center justify-center mb-16" href="/">
          <FaHome size="50" className="text-gray-400" />
          <span className="ml-6 text-2xl font-semibold text-gray-400">
            Prime Properties
          </span>
        </a>
      </div>
      <div className="grid grid-cols-2 text-sm sm:grid-cols-4 gap-x-3 gap-y-8">
        <div className="space-y-3">
          <h3 className="tracking-wide text-green-500 uppercase">Product</h3>
          <ul className="space-y-1 ">
            <li>
              <a href="">Features</a>
            </li>
            <li>
              <a href="">Integrations</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="tracking-wide text-green-500 uppercase">Company</h3>
          <ul className="space-y-1 ">
            <li>
              <a href="">Privacy</a>
            </li>
            <li>
              <a href="">Terms of Service</a>
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="tracking-wide text-green-500 uppercase">Developers</h3>
          <ul className="space-y-1 ">
            <li>
              <a href="">Public API</a>
            </li>
            <li>
              <a href="">Documentation</a>
            </li>
            <li>
              <a href="">Guides</a>
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="tracking-wide text-green-500 uppercase">
            Social Media
          </h3>
          <div className="flex justify-start">
            <a
              href="https://github.com/hakankaraahmet"
              target="_blank"
              className="pr-4"
            >
              <FaGithub size="30" className="text-gray-400" />
            </a>
            <a
              href="https://www.linkedin.com/in/hakan-karaahmeto%C4%9Flu-9988171b3"
              target="_blank"
            >
              <FaLinkedin size="30" className="text-gray-400" />
            </a>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center text-green-500">
        &#169; 2022 Company Co. All rights reserved
      </div>
    </div>
  );
};

export default Footer;
