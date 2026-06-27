import React, { useEffect, useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBath, FaBed, FaShareAlt, FaUserCircle, FaPlus, FaMapMarkerAlt, FaVideo, FaCamera } from 'react-icons/fa';
import { MdSpaceDashboard } from 'react-icons/md';
import { FiBell } from 'react-icons/fi';

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80';

const formatPrice = (price, currency = 'INR') => {
  const num = parseFloat(price);
  if (currency === 'INR') {
    if (num >= 10000000) return `₹${(num / 10000000).toFixed(2)} Cr`;
    if (num >= 100000) return `₹${(num / 100000).toFixed(2)} L`;
    return `₹${num.toLocaleString('en-IN')}`;
  }
  return new Intl.NumberFormat('en-US', { style: 'currency', currency, maximumFractionDigits: 0 }).format(num);
};

const PropertyCard = ({ property, index }) => {
  const image = property.images?.[0] || FALLBACK_IMAGE;

  return (
    <div
      data-aos="zoom-in"
      data-aos-delay={index * 100}
      className='bg-white rounded-xl w-full shadow-sm hover:shadow-md transition-shadow duration-300'
    >
      {/* Image Box */}
      <div
        className='bg-cover bg-center h-[250px] rounded-xl p-4 flex flex-col justify-between items-end'
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className='flex justify-between items-end w-full'>
          <button className='px-4 py-1.5 bg-blue-600 hover:bg-white text-white hover:text-blue-800 rounded-full text-sm font-medium border border-blue-600 hover:border-blue-300 transition-all duration-200 shadow-sm'>
            SmartMapped
          </button>
          {property.is_featured && (
            <span className='px-3 py-1 bg-purple-600 text-white text-xs font-semibold rounded-full'>
              Featured
            </span>
          )}
        </div>

        <div className='flex justify-between items-end w-full'>
          <div className='flex items-center gap-2'>
            <FaMapMarkerAlt className='size-4 text-white' />
            <h1 className='text-white text-sm'>{property.location}</h1>
          </div>
          <div className='flex items-center gap-4'>
            <FaVideo className='size-4 text-white' />
            <FaCamera className='size-4 text-white' />
          </div>
        </div>
      </div>

      {/* Info Box */}
      <div className='px-6 py-3 flex flex-col gap-2 w-full'>
        <div className='flex justify-between items-start'>
          <h1 className='text-lg text-black font-semibold leading-tight'>{property.title}</h1>
          <span className='text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full whitespace-nowrap ml-2'>
            {property.property_type}
          </span>
        </div>

        <h1 className='text-2xl text-purple-600 font-bold'>
          {formatPrice(property.price, property.currency)}
          <span className='text-sm font-normal text-gray-400 ml-1'>
            {property.price_type === 'rent' ? '/mo' : ''}
          </span>
        </h1>

        <p className='text-gray-500 text-sm line-clamp-2'>{property.description}</p>

        {/* Stats */}
        <div className='flex items-center gap-4 mt-1'>
          <div className='flex items-center gap-1.5'>
            <FaBath className='text-purple-500' />
            <span className='text-sm'>{property.bathrooms}</span>
          </div>
          <div className='flex items-center gap-1.5'>
            <FaBed className='text-purple-500' />
            <span className='text-sm'>{property.bedrooms}</span>
          </div>
          <div className='flex items-center gap-1.5'>
            <MdSpaceDashboard className='text-purple-500' />
            <span className='text-sm'>{property.area_sqft} sq ft</span>
          </div>
        </div>

        {/* Amenities */}
        {property.amenities?.length > 0 && (
          <div className='flex flex-wrap gap-1 mt-1'>
            {property.amenities.slice(0, 3).map((a, i) => (
              <span key={i} className='text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full'>
                {a}
              </span>
            ))}
            {property.amenities.length > 3 && (
              <span className='text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full'>
                +{property.amenities.length - 3} more
              </span>
            )}
          </div>
        )}

        <div className='w-full h-[1px] bg-gray-200 mt-3' />

        {/* Owner Info */}
        <div className='flex justify-between items-center w-full mt-1'>
          <div className='flex items-center gap-2'>
            <FaUserCircle className='text-purple-500' />
            <span className='text-sm'>{property.agent_name}</span>
          </div>
          <div className='flex items-center gap-2'>
            <div className='p-2 border-2 border-gray-200 hover:bg-blue-600 hover:border-blue-600 group cursor-pointer transform hover:scale-110 transition-all duration-300 rounded'>
              <FaShareAlt className='size-4 text-purple-500 group-hover:text-white' />
            </div>
            <div className='p-2 border-2 border-gray-200 hover:bg-blue-600 hover:border-blue-600 group cursor-pointer transform hover:scale-110 transition-all duration-300 rounded'>
              <FiBell className='size-4 text-purple-500 group-hover:text-white' />
            </div>
            <div className='p-2 border-2 border-gray-200 hover:bg-blue-600 hover:border-blue-600 group cursor-pointer transform hover:scale-110 transition-all duration-300 rounded'>
              <FaPlus className='size-4 text-purple-500 group-hover:text-white' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState({ city: '', property_type: '', price_type: '' });

  useEffect(() => {
    AOS.init({ offset: 200, duration: 800, easing: "ease-in-sine", delay: 100 });
  }, []);

  useEffect(() => {
    fetchProperties();
  }, [filter]);

  const fetchProperties = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (filter.city) params.append('city', filter.city);
      if (filter.property_type) params.append('property_type', filter.property_type);
      if (filter.price_type) params.append('price_type', filter.price_type);

      const res = await fetch(`https://realestate-ai-wrw0.onrender.com/api/properties?${params}`);
      const data = await res.json();
      if (data.success) setProperties(data.properties);
    } catch (err) {
      setError('Failed to load properties');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <section id="properties" className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-10" data-aos="zoom-in">
            <span className="px-4 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              Properties
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold">
              Explore the Latest{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Listings & Developments
              </span>
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
              Discover cutting-edge properties with RealEstateAI insights — designed for smart investments and seamless living.
            </p>
          </div>

          {/* Filters */}
          <div className='flex flex-wrap gap-3 justify-center mb-10' data-aos="fade-up">
            <select
              value={filter.city}
              onChange={(e) => setFilter(p => ({ ...p, city: e.target.value }))}
              className='px-4 py-2 rounded-full border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
            >
              <option value=''>All Cities</option>
              <option value='New Delhi'>New Delhi</option>
              <option value='Mumbai'>Mumbai</option>
              <option value='Bangalore'>Bangalore</option>
            </select>

            <select
              value={filter.property_type}
              onChange={(e) => setFilter(p => ({ ...p, property_type: e.target.value }))}
              className='px-4 py-2 rounded-full border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
            >
              <option value=''>All Types</option>
              <option value='Villa'>Villa</option>
              <option value='Apartment'>Apartment</option>
              <option value='House'>House</option>
            </select>

            <select
              value={filter.price_type}
              onChange={(e) => setFilter(p => ({ ...p, price_type: e.target.value }))}
              className='px-4 py-2 rounded-full border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
            >
              <option value=''>Buy & Rent</option>
              <option value='buy'>Buy</option>
              <option value='rent'>Rent</option>
            </select>

            <button
              onClick={() => setFilter({ city: '', property_type: '', price_type: '' })}
              className='px-4 py-2 rounded-full border border-gray-200 text-sm text-gray-500 hover:bg-gray-50'
            >
              Clear Filters
            </button>
          </div>

          {/* Loading */}
          {loading && (
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-8'>
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className='bg-gray-100 rounded-xl h-[450px] animate-pulse' />
              ))}
            </div>
          )}

          {/* Error */}
          {error && (
            <div className='text-center py-12 text-red-500'>{error}</div>
          )}

          {/* Properties Grid */}
          {!loading && !error && (
            <>
              <p className='text-sm text-gray-400 mb-4 text-center'>
                {properties.length} propert{properties.length !== 1 ? 'ies' : 'y'} found
              </p>
              {properties.length === 0 ? (
                <div className='text-center py-16 text-gray-400'>
                  <p className='text-xl'>No properties found</p>
                  <p className='text-sm mt-2'>Try adjusting your filters</p>
                </div>
              ) : (
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-8'>
                  {properties.map((property, index) => (
                    <PropertyCard key={property.id} property={property} index={index} />
                  ))}
                </div>
              )}
            </>
          )}

        </div>
      </section>
    </div>
  );
};

export default Properties;