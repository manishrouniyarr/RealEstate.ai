import React, { useEffect, useState } from "react";
import heroimg from "../assets/images/hero1.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "../components/Button";

const Hero = ({ darkMode, onSearch }) => {
  const [formData, setFormData] = useState({
    location: '',
    propertyType: '',
    category: '',
  });

  useEffect(() => {
    AOS.init({ offset: 200, duration: 800, easing: "ease-in-sine", delay: 100 });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSearch = () => {
    if (onSearch) onSearch(formData);
    document.getElementById('properties')?.scrollIntoView({ behavior: 'smooth' });
  };

  const formFields = [
    {
      name: "location",
      label: "Location",
      type: "text",
      placeholder: "Search for a location",
      icon: (
        <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      name: "propertyType",
      label: "Property Type",
      type: "select",
      options: ["", "Apartment", "House", "Villa", "Commercial"],
      icon: (
        <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      name: "category",
      label: "Category",
      type: "select",
      options: ["", "buy", "rent"],
      icon: (
        <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
      ),
    },
  ];

  return (
    <div className={darkMode ? 'bg-slate-900' : 'bg-white'}>
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroimg})` }}>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70" />
        </div>

        <div className="relative z-10 max-w-6xl px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" data-aos="fade-up">
            <span className="flex justify-center items-center gap-2">
              <span role="img" aria-label="home">🏡</span>
              AI Meets Real Estate
            </span>
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-purple-700 text-transparent bg-clip-text" data-aos="fade-up" data-aos-delay="100">
            Smarter, Faster, Better
          </h2>
          <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto mb-8" data-aos="fade-up" data-aos-delay="200">
            Make smarter real estate decisions with AI-driven analytics and insights that transform how you invest, develop, and manage properties.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10" data-aos="zoom-in" data-aos-delay="300">
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white text-lg py-4 px-8 rounded-md"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Try AI Advisor
            </Button>
            <Button
              variant="outline"
              className="bg-transparent border border-slate-400 text-white hover:bg-white/10 text-lg py-4 px-8 rounded-md"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>
          <div className="mt-16 flex justify-center" data-aos="fade-up" data-aos-delay="400">
            <div className="bg-slate-800/80 backdrop-blur-sm rounded-full py-2 px-6 inline-block">
              <p className="text-white/90 text-sm">Trusted by 500+ real estate professionals</p>
            </div>
          </div>
        </div>
      </div>

      {/* Property Search Form */}
      <div className="relative z-20 mx-auto px-4 -mt-24">
        <div className="bg-white rounded-lg shadow-xl max-w-6xl mx-auto" data-aos="zoom-in" data-aos-delay="300">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
            {formFields.map(({ name, label, type, icon, options, placeholder }) => (
              <FormField
                key={name}
                icon={icon}
                label={label}
                input={
                  type === "select" ? (
                    <select
                      name={name}
                      value={formData[name]}
                      onChange={handleChange}
                      className="w-full text-gray-700 p-2 focus:outline-none cursor-pointer"
                    >
                      <option value="">Select {label}</option>
                      {options.filter(o => o).map(opt => (
                        <option key={opt} value={opt}>
                          {opt.charAt(0).toUpperCase() + opt.slice(1).replace("_", " ")}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type="text"
                      name={name}
                      value={formData[name]}
                      onChange={handleChange}
                      placeholder={placeholder}
                      className="w-full text-gray-700 p-2 focus:outline-none"
                      onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    />
                  )
                }
              />
            ))}

            {/* Search Button */}
            <div className="p-4 flex items-center justify-center">
              <button
                onClick={handleSearch}
                className="bg-blue-600 hover:bg-blue-700 text-white w-full py-3 px-6 rounded-md transition-colors duration-300 flex items-center justify-center"
              >
                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 10-14 0 7 7 0 0014 0z" />
                </svg>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FormField = ({ icon, label, input }) => (
  <div className="p-4 border-b md:border-b-0 md:border-r border-gray-200">
    <div className="flex items-center text-gray-500 mb-2">
      {icon}
      <span className="uppercase text-sm">{label}</span>
    </div>
    {input}
  </div>
);

export default Hero;