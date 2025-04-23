import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaBuilding,
  FaMobile,
  FaFax,
  FaEnvelope,
} from "react-icons/fa6";
import prop5 from "../assets/images/prop5.webp";
import prop6 from "../assets/images/prop6.webp";

const socialIcons = [
  { icon: FaFacebook, label: "Facebook" },
  { icon: FaInstagram, label: "Instagram" },
  { icon: FaTwitter, label: "Twitter" },
  { icon: FaYoutube, label: "YouTube" },
];

const properties = [
  {
    image: prop5,
    title: "Villa with amazing view",
    price: "$ 278.98",
  },
  {
    image: prop6,
    title: "Sea View Villa",
    price: "$ 789.23",
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#1b2936] text-white w-full px-6 lg:px-20 py-16">
      <div className="grid lg:grid-cols-3 gap-10">
        {/* About */}
        <div className="space-y-5">
          <h2 className="text-2xl font-semibold">About Us</h2>
          <p className="text-slate-300 text-justify">
            At Real Estate, we believe your home should be more than just a
            place — it should be your sanctuary. With years of experience in
            property consulting and management, we connect you with dream homes,
            luxurious villas, and prime commercial spaces. Our team is dedicated
            to providing trusted services, expert guidance, and unmatched value
            for your investment.
          </p>
          <div className="flex gap-4 mt-4">
            {socialIcons.map(({ icon: Icon, label }, idx) => (
              <button
                key={idx}
                aria-label={label}
                className="p-3 bg-white rounded-md hover:bg-blue-600 text-black hover:text-white transition-all duration-300"
              >
                <Icon size={20} />
              </button>
            ))}
          </div>
        </div>

        {/* Contact */}
        <address className="not-italic space-y-4 text-slate-300">
          <h2 className="text-2xl font-semibold text-white">Contact Us</h2>
          <p className="flex items-start gap-3">
            <FaBuilding className="mt-1" />
            New Delhi, India
          </p>
          <p className="flex items-center gap-3">
            <FaMobile /> +91 888 999 231
          </p>
          <p className="flex items-center gap-3">
            <FaFax /> +91 123 678 0912
          </p>
          <p className="flex items-center gap-3">
            <FaEnvelope /> realestate.ai25@gmail.com
          </p>
        </address>

        {/* Latest Properties */}
        <div className="space-y-5">
          <h2 className="text-2xl font-semibold">Latest Properties</h2>
          {properties.map((property, idx) => (
            <div key={idx} className="flex items-start gap-4 group">
              <img
                src={property.image}
                alt={property.title}
                className="w-16 h-16 rounded-md object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div>
                <p className="font-medium text-white">{property.title}</p>
                <p className="text-slate-400">{property.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700 mt-12 pt-6 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} RealEstate.AI Manish Rouniyar
      </div>
    </footer>
  );
};

export default Footer;
