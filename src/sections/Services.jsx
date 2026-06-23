import React, { useEffect, useState } from 'react';
import { Home, Map, PieChart, DollarSign, BookOpen, FileText, PhoneCall, Edit, X } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PricePredictor from '../components/PricePredictor';
import CostEstimator from '../components/CostEstimator';
import MarketInsights from '../components/MarketInsights';

const Services = () => {
  const [activeModal, setActiveModal] = useState(null); // 'roi' | 'cost' | 'market' | service index

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const services = [
    {
      icon: <PieChart className="h-10 w-10 text-white" />,
      title: "ROI Predictor",
      description: "Make data-driven decisions with AI-powered forecasts of rental yield and long-term property returns.",
      isAI: true,
      modalKey: 'roi',
      buttonLabel: 'Try Now',
    },
    {
      icon: <DollarSign className="h-10 w-10 text-white" />,
      title: "Cost Estimator",
      description: "Get real-time estimates for construction, remodeling, and maintenance with smart cost analysis tools.",
      isAI: true,
      modalKey: 'cost',
      buttonLabel: 'Try Now',
    },
    {
      icon: <BookOpen className="h-10 w-10 text-white" />,
      title: "Market Insights",
      description: "Stay ahead with AI-curated trends, local pricing shifts, and comparative property evaluations.",
      isAI: true,
      modalKey: 'market',
      buttonLabel: 'Try Now',
    },
    {
      icon: <Home className="h-10 w-10 text-white" />,
      title: "3D Virtual Models",
      description: "Visualize property transformations with detailed, immersive 3D models for planning and presentation.",
      isAI: false,
      details: "Our 3D Virtual Models service lets you explore properties before they're built. Walk through photorealistic renderings, visualize interior layouts, and present transformation plans to clients — all from your browser. Powered by advanced rendering pipelines integrated with our AI property data.",
    },
    {
      icon: <Map className="h-10 w-10 text-white" />,
      title: "Zoning Optimizer",
      description: "Maximize land use by analyzing zoning regulations to uncover development and investment potential.",
      isAI: false,
      details: "The Zoning Optimizer analyzes local zoning laws, FAR ratios, and setback rules to help you unlock maximum land value. Whether you're a developer or investor, understand what you can legally build before you buy — and identify underutilized parcels ripe for redevelopment.",
    },
    {
      icon: <FileText className="h-10 w-10 text-white" />,
      title: "Permit Assistant",
      description: "Simplify the permit process with smart documentation guidance tailored to local regulations.",
      isAI: false,
      details: "Navigating building permits is complex and time-consuming. Our Permit Assistant guides you through the exact documentation required for your project type and municipality — reducing back-and-forth with local authorities and cutting approval timelines significantly.",
    },
    {
      icon: <Home className="h-10 w-10 text-white" />,
      title: "Home Loans",
      description: "We offer expert loan consultancy services completely free to guide your financial journey smoothly.",
      isAI: false,
      details: "Compare home loan options from top banks and NBFCs, calculate EMIs, and get personalized guidance on the best financing structure for your property purchase. Our consultants are available to help you through every step — from pre-approval to disbursement.",
    },
    {
      icon: <Edit className="h-10 w-10 text-white" />,
      title: "Sell Your Home",
      description: "Sell your home confidently with expert support and insights to ensure maximum market value.",
      isAI: false,
      details: "List your property with RealEstate AI and reach thousands of verified buyers. Our platform provides AI-powered pricing suggestions, professional photography coordination, and expert negotiation support to help you close at the best possible price.",
    },
    {
      icon: <PhoneCall className="h-10 w-10 text-white" />,
      title: "24/7 Support",
      description: "Reach out anytime — our experts are here to guide you through every step of your property journey.",
      isAI: false,
      details: "Our support team is available around the clock via chat, call, and email. Whether you have questions about a listing, need help with a transaction, or want expert advice on the market — we're always here. Average response time under 2 minutes.",
    },
  ];

  const closeModal = () => setActiveModal(null);

  const modalConfig = {
    roi: { title: 'AI ROI Predictor', subtitle: 'Powered by Groq AI', component: <PricePredictor /> },
    cost: { title: 'AI Cost Estimator', subtitle: 'Powered by Groq AI', component: <CostEstimator /> },
    market: { title: 'AI Market Insights', subtitle: 'Powered by Groq AI', component: <MarketInsights /> },
  };

  return (
    <div id="services" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="zoom-in">
          <span className="px-4 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
            Our Services
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">
            Intelligent Tools for{' '}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
              Smarter Real Estate Decisions
            </span>
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
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-4 rounded-lg inline-block">
                    {service.icon}
                  </div>
                  {service.isAI && (
                    <span className="px-2 py-0.5 text-xs font-semibold bg-purple-700 text-purple-200 rounded-full">
                      AI
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
              <div className="px-6 py-4 bg-black/20 flex justify-between items-center">
                <span className="text-sm text-gray-400">RealEstateAI</span>
                <button
                  onClick={() => setActiveModal(service.modalKey || `desc-${index}`)}
                  className={`text-sm font-medium flex items-center transition-colors ${
                    service.isAI
                      ? 'text-purple-400 hover:text-purple-300 cursor-pointer'
                      : 'text-gray-400 hover:text-gray-200 cursor-pointer'
                  }`}
                >
                  {service.buttonLabel || 'Learn More'} <span className="ml-1">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Tool Modals */}
      {activeModal && modalConfig[activeModal] && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
          onClick={(e) => e.target === e.currentTarget && closeModal()}
        >
          <div className="bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900">{modalConfig[activeModal].title}</h2>
                <p className="text-sm text-gray-500 mt-0.5">{modalConfig[activeModal].subtitle}</p>
              </div>
              <button onClick={closeModal} className="text-gray-400 hover:text-gray-600">
                <X className="h-6 w-6" />
              </button>
            </div>
            {modalConfig[activeModal].component}
          </div>
        </div>
      )}

      {/* Description Modals for non-AI services */}
      {activeModal && activeModal.startsWith('desc-') && (() => {
        const index = parseInt(activeModal.split('-')[1]);
        const service = services[index];
        return (
          <div
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.target === e.currentTarget && closeModal()}
          >
            <div className="bg-white rounded-2xl w-full max-w-md p-6">
              <div className="flex justify-between items-center mb-4">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-3 rounded-lg inline-block">
                  {service.icon}
                </div>
                <button onClick={closeModal} className="text-gray-400 hover:text-gray-600">
                  <X className="h-6 w-6" />
                </button>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h2>
              <p className="text-gray-600 text-sm leading-relaxed">{service.details}</p>
              <button
                onClick={closeModal}
                className="mt-6 w-full py-3 rounded-xl bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition-colors"
              >
                Got it
              </button>
            </div>
          </div>
        );
      })()}
    </div>
  );
};

export default Services;



// import React, { useEffect, useState } from 'react';
// import { Home, Map, PieChart, DollarSign, BookOpen, FileText, PhoneCall, Edit } from 'lucide-react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import PricePredictor from '../components/PricePredictor';

// const Services = () => {
//   const [showPredictor, setShowPredictor] = useState(false);

//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true
//     });
//   }, []);

//   const services = [
//     {
//       icon: <Home className="h-10 w-10 text-white" />,
//       title: "3D Virtual Models",
//       description: "Visualize property transformations with detailed, immersive 3D models for planning and presentation.",
//       isAI: false
//     },
//     {
//       icon: <Map className="h-10 w-10 text-white" />,
//       title: "Zoning Optimizer",
//       description: "Maximize land use by analyzing zoning regulations to uncover development and investment potential.",
//       isAI: false
//     },
//     {
//       icon: <PieChart className="h-10 w-10 text-white" />,
//       title: "ROI Predictor",
//       description: "Make data-driven decisions with AI-powered forecasts of rental yield and long-term property returns.",
//       isAI: true
//     },
//     {
//       icon: <DollarSign className="h-10 w-10 text-white" />,
//       title: "Cost Estimator",
//       description: "Get real-time estimates for construction, remodeling, and maintenance with smart cost analysis tools.",
//       isAI: false
//     },
//     {
//       icon: <BookOpen className="h-10 w-10 text-white" />,
//       title: "Market Insights",
//       description: "Stay ahead with AI-curated trends, local pricing shifts, and comparative property evaluations.",
//       isAI: false
//     },
//     {
//       icon: <FileText className="h-10 w-10 text-white" />,
//       title: "Permit Assistant",
//       description: "Simplify the permit process with smart documentation guidance tailored to local regulations.",
//       isAI: false
//     },
//     {
//       icon: <Home className="h-10 w-10 text-white" />,
//       title: "Home loans",
//       description: "We offer expert loan consultancy services completely free to guide your financial journey smoothly.",
//       isAI: false
//     },
//     {
//       icon: <Edit className="h-10 w-10 text-white" />,
//       title: "Sell your home",
//       description: "Sell your home confidently with expert support and insights to ensure maximum market value.",
//       isAI: false
//     },
//     {
//       icon: <PhoneCall className="h-10 w-10 text-white" />,
//       title: "24/7 Support",
//       description: "Reach out anytime — our experts are here to guide you through every step of your property journey.",
//       isAI: false
//     }
//   ];

//   return (
//     <div id="services" className="py-24 bg-gradient-to-b from-white to-slate-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16" data-aos="zoom-in">
//           <span className="px-4 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
//             Our Services
//           </span>
//           <h2 className="mt-4 text-3xl md:text-4xl font-bold">
//             Intelligent Tools for{' '}
//             <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
//               Smarter Real Estate Decisions
//             </span>
//           </h2>
//           <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
//             Unlock the full potential of your properties with our AI-driven solutions for planning, investment, and growth.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="rounded-xl overflow-hidden bg-gray-900 transition-transform duration-300 hover:scale-105 hover:shadow-xl"
//               data-aos="zoom-in"
//               data-aos-delay={index * 100}
//             >
//               <div className="p-6">
//                 <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-4 rounded-lg inline-block mb-4">
//                   {service.icon}
//                 </div>
//                 {service.isAI && (
//                   <span className="ml-2 px-2 py-0.5 text-xs font-semibold bg-purple-700 text-purple-200 rounded-full align-middle">
//                     AI
//                   </span>
//                 )}
//                 <h3 className="text-xl font-bold mb-3 text-white">
//                   {service.title}
//                 </h3>
//                 <p className="text-gray-300">
//                   {service.description}
//                 </p>
//               </div>
//               <div className="px-6 py-4 bg-black/20 flex justify-between items-center">
//                 <span className="text-sm text-gray-400">RealEstateAI</span>
//                 <button
//                   onClick={() => service.isAI && setShowPredictor(true)}
//                   className={`text-sm font-medium flex items-center transition-colors ${
//                     service.isAI
//                       ? 'text-purple-400 hover:text-purple-300 cursor-pointer'
//                       : 'text-gray-500 cursor-default'
//                   }`}
//                 >
//                   {service.isAI ? 'Try Now' : 'Learn More'} <span className="ml-1">→</span>
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* AI Price Predictor Modal */}
//       {showPredictor && (
//         <div
//           className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
//           onClick={(e) => e.target === e.currentTarget && setShowPredictor(false)}
//         >
//           <div className="bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-6">
//             <div className="flex justify-between items-center mb-6">
//               <div>
//                 <h2 className="text-xl font-bold text-gray-900">AI Price Predictor</h2>
//                 <p className="text-sm text-gray-500 mt-0.5">Powered by Groq AI</p>
//               </div>
//               <button
//                 onClick={() => setShowPredictor(false)}
//                 className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
//               >
//                 &times;
//               </button>
//             </div>
//             <PricePredictor />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Services;