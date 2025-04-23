import React, { useEffect } from "react";
import { Check } from "lucide-react";
import Button from "../components/Button";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Pricing = () => {
    useEffect(() => {
            AOS.init({
              duration: 1000,
              once: true
            });
          }, []);

  const plans = [
    {
      name: "Starter",
      price: "$29",
      description: "Perfect for small property owners and beginners",
      features: [
        "Basic property analysis",
        "5 property evaluations per month",
        "Market comparisons",
        "Email support",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Professional",
      price: "$99",
      description:
        "Ideal for real estate professionals and property managers",
      features: [
        "Advanced AI property analysis",
        "Unlimited property evaluations",
        "ROI prediction & optimization",
        "3D visualization tools",
        "Zoning analysis",
        "Priority support",
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For development firms and large property portfolios",
      features: [
        "Everything in Professional",
        "Custom AI model training",
        "API access for integration",
        "Portfolio optimization",
        "Dedicated account manager",
        "Custom reporting",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <div id="pricing" className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20" data-aos="zoom-in" >
          <span className="inline-block px-4 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-700">
            Pricing
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-800">
            Choose the Right <span className="text-blue-600">Plan for You</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 border rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300 bg-white ${
                plan.popular
                  ? "border-blue-500 ring-2 ring-blue-300"
                  : "border-slate-200"
              }`}
                data-aos="zoom-in"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white text-xs px-4 py-1 rounded-full font-medium shadow-md">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4" data-aos="zoom-in">
                  <span className="text-5xl font-extrabold text-slate-900">
                    {plan.price}
                  </span>
                  {plan.price !== "Custom" && (
                    <span className="text-slate-500 text-sm">/month</span>
                  )}
                </div>
                <p className="text-slate-600 mb-6 text-sm">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8 text-left">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1" />
                    <span className="text-slate-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full text-sm py-3 ${
                  plan.popular ? "bg-blue-600 text-white hover:bg-blue-700" : "border border-blue-600 text-blue-600 hover:bg-blue-50"
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center max-w-3xl mx-auto bg-slate-100 p-10 rounded-3xl shadow-sm" data-aos="zoom-in">
          <h3 className="text-2xl font-bold mb-4 text-slate-800">
            Need a Custom Solution?
          </h3>
          <p className="text-slate-600 mb-6 text-sm">
            We offer tailored AI solutions for large property portfolios and
            development projects. Our team can customize the platform to meet
            your specific needs.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-6 py-3 rounded-full">
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

