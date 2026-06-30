import React, { useEffect, useState } from 'react';
import Aboutimg from '../assets/images/about.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, offset: 200, easing: 'ease-in-sine' });
  }, []);

  return (
    <section
      id="about"
      className="bg-slate-50 w-full px-6 py-16 md:px-12 lg:px-24 xl:px-40 grid lg:grid-cols-2 gap-12 items-center"
    >
      {/* Image Section */}
      <div data-aos="zoom-in" className="order-2 lg:order-1">
  {!imageError ? (
    <img
      src={Aboutimg}
      alt="Real estate luxury villas"
      className="rounded-2xl w-full h-auto lg:h-[450px] xl:h-[500px] object-cover shadow-2xl ring-1 ring-slate-200"
      onError={() => setImageError(true)}
      loading="lazy"
    />
  ) : (
    <div className="w-full h-[450px] xl:h-[500px] bg-slate-200 flex items-center justify-center rounded-2xl shadow-md">
      <p className="text-slate-500">Image not available</p>
    </div>
  )}
</div>


      {/* Text Content */}
      <div className="order-1 lg:order-2 space-y-8">
        <div>
          <h1 data-aos="fade-right" className="text-blue-600 text-2xl font-bold mb-4">
            Real Estate Intelligence, Powered by Groq AI
          </h1>

          <h2
            data-aos="fade-right"
            data-aos-delay="100"
            className="text-3xl md:text-4xl font-bold leading-tight text-slate-800 mb-6"
          >
            Welcome to RealEstate AI  making real estate effortless
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-700 mb-6" />

          <p data-aos="fade-up" data-aos-delay="200" className="text-slate-600 text-lg leading-relaxed">
            Our platform uses advanced artificial intelligence to help you find, analyze, and invest in properties
            effortlessly. Whether you're a buyer, seller, or investor, our AI-powered tools provide smart
            recommendations, price predictions, and market insights to make your decisions faster and more informed.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FeatureCard
            title="AI-Powered Market Insights"
            description="Real-time analytics to track trends, pricing, and opportunities."
            headingColor="text-blue-600"
            delay={0}
          />
          <FeatureCard
            title="Intelligent Property Matching"
            description="AI-driven recommendations for your perfect property."
            headingColor="text-blue-600"
            delay={100}
          />
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-8">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
            aria-label="View more about RealEstate AI"
          >
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ title, description, headingColor, delay }) => (
  <div
    data-aos="zoom-in"
    data-aos-delay={delay}
    className="p-4 rounded-xl bg-white shadow-md hover:bg-slate-50 transition-all duration-300"
  >
    <h3 className={`font-semibold ${headingColor}`}>{title}</h3>
    <p className="text-sm mt-2 text-slate-600">{description}</p>
  </div>
);

export default About;