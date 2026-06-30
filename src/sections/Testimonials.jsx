import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import AOS from "aos";
import "aos/dist/aos.css";

import client1 from "../assets/images/client1.png";
import client2 from "../assets/images/client2.png";
import client3 from "../assets/images/client3.png";
import client4 from "../assets/images/client4.png";
import client5 from "../assets/images/client5.png";
import client6 from "../assets/images/client6.png";

const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Property Developer",
      image: client1,
      quote: "The AI property optimization tools helped us increase our rental yield by 22% in just three months. The zoning analysis alone saved us thousands in consulting fees.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Real Estate Investor",
      image: client2,
      quote: "I've been investing in real estate for 15 years, and this platform has completely transformed my approach. The ROI predictions were spot-on for my last three investments.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Architect",
      image: client3,
      quote: "The 3D modeling capabilities saved us weeks of work on our latest commercial project. The AI suggestions for space optimization were truly innovative.",
      rating: 4,
    },
    {
      name: "David Thompson",
      role: "Property Manager",
      image: client4,
      quote: "Managing multiple properties became so much easier with the analytics dashboard. I can now make data-driven decisions quickly and effectively.",
      rating: 5,
    },
    {
      name: "Lisa Brown",
      role: "Interior Designer",
      image: client5,
      quote: "I was amazed by how the AI helped streamline our design process and offered insights I wouldn’t have considered. Super helpful for space utilization!",
      rating: 5,
    },
    {
      name: "James White",
      role: "Construction Manager",
      image: client6,
      quote: "From initial planning to on-site execution, this tech made coordination seamless. Great experience!",
      rating: 4,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div id="testimonials" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="zoom-in">
          <span className="px-4 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
            Testimonials
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">
            Success Stories from <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Real Clients</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            See how our AI-powered platform is transforming the real estate industry
          </p>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4" data-aos="zoom-in">
                  <div className="bg-white shadow-xl p-8 rounded-xl">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="shrink-0">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-24 h-24 rounded-full object-cover border-4 border-blue-100"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex mb-3">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <blockquote className="text-lg italic text-slate-700 mb-4">
                          "{testimonial.quote}"
                        </blockquote>
                        <div>
                          <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                          <p className="text-slate-500">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 pt-6 border-t border-slate-100">
                      <div className="flex items-center">
                        <div className="bg-blue-600 p-2 rounded text-white mr-4">
                          <span className="text-lg font-bold">+25%</span>
                        </div>
                        <p className="text-slate-700">Average ROI improvement with our AI solutions</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-3 shadow-lg z-10 text-gray-700 hover:text-blue-600 md:-translate-x-0"
          >
            <ArrowLeft className="h-6 w-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-3 shadow-lg z-10 text-gray-700 hover:text-blue-600 md:translate-x-0"
          >
            <ArrowRight className="h-6 w-6" />
          </button>
        </div>
        
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 rounded-full mx-1 ${
                currentIndex === index ? 'bg-blue-600' : 'bg-slate-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;