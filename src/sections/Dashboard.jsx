import React, { useEffect } from 'react';
import { BarChart,  MapPin, Home as HomeIcon } from 'lucide-react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart as RechartBar, Bar, PieChart as RechartPie, Pie, Cell
} from 'recharts';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Dashboard = () => {
      useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true
        });
      }, []);
    
  const propertyData = [
    { month: 'Jan', value: 400 },
    { month: 'Feb', value: 430 },
    { month: 'Mar', value: 448 },
    { month: 'Apr', value: 470 },
    { month: 'May', value: 540 },
    { month: 'Jun', value: 580 },
    { month: 'Jul', value: 600 },
    { month: 'Aug', value: 700 },
  ];

  const zoningData = [
    { name: 'Residential', value: 45 },
    { name: 'Commercial', value: 25 },
    { name: 'Mixed-Use', value: 20 },
    { name: 'Industrial', value: 10 },
  ];

  const COLORS = ['#1E81B0', '#156590', '#0E4A70', '#083050'];

  const [activeTab, setActiveTab] = React.useState('analytics');

  return (
    <div id="dashboard" className="py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="zoom-in"> 
          <span className="px-4 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
            Dashboard
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">
            Interactive <span className="gradient-text">AI Dashboard</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Visualize property insights and market trends with our powerful analytics dashboard
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200" >
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <div className="grid w-full max-w-md grid-cols-3 gap-2">
                <button
                  className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm ${activeTab === 'analytics' ? 'bg-ai-100 text-ai-800' : 'bg-slate-200'}`}
                  onClick={() => setActiveTab('analytics')}
                >
                  <BarChart className="h-4 w-4" />
                  Analytics
                </button>
                <button
                  className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm ${activeTab === 'map' ? 'bg-ai-100 text-ai-800' : 'bg-slate-200'}`}
                  onClick={() => setActiveTab('map')}
                >
                  <MapPin className="h-4 w-4" />
                  Map View
                </button>
                <button
                  className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm ${activeTab === 'property' ? 'bg-ai-100 text-ai-800' : 'bg-slate-200'}`}
                  onClick={() => setActiveTab('property')}
                >
                  <HomeIcon className="h-4 w-4" />
                  Property
                </button>
              </div>

              <div className="hidden md:block">
                <span className="text-sm text-ai-600 bg-ai-50 px-3 py-1 rounded-full">
                  AI-Enhanced Visualization
                </span>
              </div>
            </div>

            {activeTab === 'analytics' && (
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 border rounded-xl shadow" data-aos="zoom-in">
                    <h3 className="text-lg font-medium mb-4">Property Value Trends</h3>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                          data={propertyData}
                          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <Tooltip />
                          <Area type="monotone" dataKey="value" stroke="#1E81B0" fill="#1E81B0" fillOpacity={0.2} />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  <div className="p-4 border rounded-xl shadow" data-aos="zoom-in">
                    <h3 className="text-lg font-medium mb-4">Zoning Distribution</h3>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <RechartPie>
                          <Pie
                            data={zoningData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value"
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                          >
                            {zoningData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </RechartPie>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>

                <div className="p-4 border rounded-xl shadow" data-aos="zoom-in">
                  <h3 className="text-lg font-medium mb-4">Comparative Property Analysis</h3>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartBar
                        data={[
                          { name: 'Current', value1: 240, value2: 300 },
                          { name: 'Optimized', value1: 300, value2: 400 },
                          { name: 'Market Avg', value1: 200, value2: 250 },
                        ]}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="value1" name="Rental Value" fill="#1E81B0" />
                        <Bar dataKey="value2" name="Property Value" fill="#7E22CE" />
                      </RechartBar>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'map' && (
              <div className="p-4 border rounded-xl shadow" data-aos="zoom-in">
                <div className="flex justify-center items-center min-h-[500px] bg-slate-100 rounded-lg">
                  <div className="text-center p-8">
                    <MapPin className="h-16 w-16 text-realestate-300 mx-auto mb-4" />
                    <h3 className="text-xl font-medium mb-2">Interactive Property Map</h3>
                    <p className="text-slate-500 max-w-md">
                      View property locations, zoning information, and nearby amenities on our interactive map.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'property' && (
              <div className="p-4 border rounded-xl shadow" data-aos="zoom-in">
                <div className="flex justify-center items-center min-h-[500px] bg-slate-100 rounded-lg">
                  <div className="text-center p-8">
                    <HomeIcon className="h-16 w-16 text-realestate-300 mx-auto mb-4" />
                    <h3 className="text-xl font-medium mb-2">3D Property Visualization</h3>
                    <p className="text-slate-500 max-w-md">
                      Explore detailed 3D models of properties with AI-enhanced visualization.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
            <p className="text-sm text-slate-500">
              Data shown is for demonstration purposes. Connect your property data for personalized insights.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
