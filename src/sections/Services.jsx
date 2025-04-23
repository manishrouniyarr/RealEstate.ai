import React, { useEffect } from 'react';
import {Home, Map, PieChart, DollarSign, BookOpen, FileText, PhoneCall, Edit} from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const services = [
    {
      icon: <Home className="h-10 w-10 text-white" />,
      title: "3D Virtual Models",
      description: "Visualize property transformations with detailed, immersive 3D models for planning and presentation."
    },
    {
      icon: <Map className="h-10 w-10 text-white" />,
      title: "Zoning Optimizer",
      description: "Maximize land use by analyzing zoning regulations to uncover development and investment potential."
    },
    {
      icon: <PieChart className="h-10 w-10 text-white" />,
      title: "ROI Predictor",
      description: "Make data-driven decisions with AI-powered forecasts of rental yield and long-term property returns."
    },
    {
      icon: <DollarSign className="h-10 w-10 text-white" />,
      title: "Cost Estimator",
      description: "Get real-time estimates for construction, remodeling, and maintenance with smart cost analysis tools."
    },
    {
      icon: <BookOpen className="h-10 w-10 text-white" />,
      title: "Market Insights",
      description: "Stay ahead with AI-curated trends, local pricing shifts, and comparative property evaluations."
    },
    {
      icon: <FileText className="h-10 w-10 text-white" />,
      title: "Permit Assistant",
      description: "Simplify the permit process with smart documentation guidance tailored to local regulations."
    },
    {
      icon: <Home className="h-10 w-10 text-white" />,
      title: "Home loans",
      description: "We offer expert loan consultancy services completely free to guide your financial journey smoothly."
    },
    {
      icon: <Edit className="h-10 w-10 text-white" />,
      title: "Sell your home",
      description: "Sell your home confidently with expert support and insights to ensure maximum market value."
    },
    {
      icon: <PhoneCall className="h-10 w-10 text-white" />,
      title: "24/7 Support",
      description: "Reach out anytime — our experts are here to guide you through every step of your property journey."
    }
  ];

  return (
    <div id="services" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="zoom-in">
          <span className="px-4 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
            Our Services
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">
            Intelligent Tools for <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 bg-clip-text text-transparent">Smarter Real Estate Decisions</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Unlock the full potential of your properties with our AI-driven solutions for planning, investment, and growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden bg-gray-900 transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="p-6">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-4 rounded-lg inline-block mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-300">
                  {service.description}
                </p>
              </div>
              <div className="px-6 py-4 bg-black/20 flex justify-between items-center">
                <span className="text-sm text-gray-400">RealEstateAI</span>
                <button className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center">
                  Learn More <span className="ml-1">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
