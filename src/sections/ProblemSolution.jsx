import React, { useEffect } from 'react';
import { Clock, DollarSign, FileText, Zap } from 'lucide-react';
import AOS from "aos";
import "aos/dist/aos.css";

const ProblemSolution = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="text-center mb-12" data-aos="zoom-in">
    <h2 className="text-4xl font-bold mb-4">
      The <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">Problem</span> & Our <span className="bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent">Solution</span>
    </h2>
    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
      We transform complex real estate challenges into opportunities with AI-powered insights.
    </p>
  </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Problems Column */}
          <div 
            className="rounded-lg shadow p-8 border bg-white border-gray-100"
            data-aos="zoom-in"
          >
            <h3 className="text-2xl font-bold mb-8 text-center text-gray-800 transition-all duration-300 hover:scale-105 hover:text-blue-600 cursor-pointer">
              Common Real Estate Challenges
            </h3>
            
            <div className="space-y-8">
              {/* Time-Consuming Analysis */}
              <div className="flex items-start space-x-4 hover:bg-gray-50 hover:shadow p-4 rounded-lg transition-all">
                <div className="shrink-0 bg-red-100 p-4 rounded-full">
                  <Clock className="h-8 w-8 text-red-500" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Time-Consuming Analysis</h4>
                  <p className="text-gray-600">
                    Traditional property analysis takes weeks, delaying critical investment decisions.
                  </p>
                </div>
              </div>
              
              {/* High Development Costs */}
              <div className="flex items-start space-x-4 hover:bg-gray-50 hover:shadow p-4 rounded-lg transition-all">
                <div className="shrink-0 bg-red-100 p-4 rounded-full">
                  <DollarSign className="h-8 w-8 text-red-500" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">High Development Costs</h4>
                  <p className="text-gray-600">
                    Unexpected expenses and poor planning lead to budget overruns.
                  </p>
                </div>
              </div>
              
              {/* Permit & Zoning Issues */}
              <div className="flex items-start space-x-4 hover:bg-gray-50 hover:shadow p-4 rounded-lg transition-all">
                <div className="shrink-0 bg-red-100 p-4 rounded-full">
                  <FileText className="h-8 w-8 text-red-500" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Permit & Zoning Issues</h4>
                  <p className="text-gray-600">
                    Complex regulations cause expensive delays and compliance problems.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Solutions Column */}
          <div 
            className="bg-gray-900 rounded-lg shadow-lg p-8 text-white"
            data-aos="zoom-in"
          >
            <h3 className="text-2xl font-bold mb-8 text-center text-purple-400 transition-all duration-300 hover:scale-105 hover:text-purple-300 cursor-pointer">
              Our AI-Powered Solutions
            </h3>
            
            <div className="space-y-8">
              {/* Instant AI Analysis */}
              <div className="flex items-start space-x-4 hover:bg-gray-800 hover:shadow p-4 rounded-lg transition-all">
                <div className="shrink-0 bg-purple-900/50 p-4 rounded-full">
                  <Zap className="h-8 w-8 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-purple-300">Instant AI Analysis</h4>
                  <p className="text-gray-300">
                    Process thousands of data points in seconds for immediate property insights.
                  </p>
                </div>
              </div>
              
              {/* Cost Optimization */}
              <div className="flex items-start space-x-4 hover:bg-gray-800 hover:shadow p-4 rounded-lg transition-all">
                <div className="shrink-0 bg-purple-900/50 p-4 rounded-full">
                  <DollarSign className="h-8 w-8 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-purple-300">Cost Optimization</h4>
                  <p className="text-gray-300">
                    AI predicts and prevents costly mistakes before they happen.
                  </p>
                </div>
              </div>
              
              {/* Regulatory Compliance */}
              <div className="flex items-start space-x-4 hover:bg-gray-800 hover:shadow p-4 rounded-lg transition-all">
                <div className="shrink-0 bg-purple-900/50 p-4 rounded-full">
                  <FileText className="h-8 w-8 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-purple-300">Regulatory Compliance</h4>
                  <p className="text-gray-300">
                    Automatically check against current zoning laws and building codes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemSolution;