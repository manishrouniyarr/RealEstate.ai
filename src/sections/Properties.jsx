import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { property } from '../components/export';
import { FaBath, FaBed, FaShareAlt, FaUserCircle, FaPlus, FaMapMarkerAlt, FaVideo, FaCamera } from 'react-icons/fa';
import { MdSpaceDashboard } from 'react-icons/md';
import { FiBell } from 'react-icons/fi';

const Properties = () => {
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
    <div className="bg-white min-h-screen"> {/* Added min-h-screen to ensure content is visible */}
      <section 
        id="properties" className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="zoom-in">
            <span className="px-4 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              Properties
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold">
              Explore the Latest <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Listings & Developments</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
              Discover cutting-edge properties RealEstateAI insights—designed for smart investments and seamless living.
            </p>
          </div>
      
          {/* Your properties grid or components go here */}
        </div>

        {/* {properties grid starts from here} */}
        <div id='grid-box' className='w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8'>

{
    property.map((item, index)=>(
        <div data-aos="zoom-in" data-aos-delay="200" key={index} className='bg-white rounded-xl w-full'>
       <div id='image-box' className='bg-cover bg-center h-[250px] rounded-xl p-4 flex flex-col
       justify-between items-end' style={{backgroundImage: `url(${item.images})`}} >
        <div id='top' className='flex justify-between items-end w-full'>
  <div>
    <button className='
      px-4 py-1.5 
      bg-blue-600 hover:bg-white 
      text-white hover:text-blue-800 
      rounded-full 
      text-sm font-medium
      border border-blue-600 hover:border-blue-300
      transition-all duration-200
      shadow-sm hover:shadow-md
      flex items-center gap-2
      group
    '>
      SmartMapped
    </button>
  </div>
</div>

<div id='bottom'className='flex justify-between items-end w-full'>
<div className='flex justify-start items-center gap-2'>
<FaMapMarkerAlt className='size-4 text-white'/>
<h1 className='text-white'>{item.address}</h1>
</div>
<div className='flex justify-start items-center gap-4'>
    <FaVideo className='size-4 text-white'/>
    <FaCamera className='size-4 text-white'/>
</div>
</div>
</div>

    <div className='px-6 py-3 flex flex-col justify-center items-start gap-2 w-full'>
        <h1 className='text-xl text-black font-semibold'>{item.name}</h1>
        <h1 className='text-2xl text-purple-600 font-bold'>{item.price}</h1>
        <p>{item.about}</p>
        <div id='icons' className='flex justify-center items-start gap-4'>
            <div className='flex justify-center items-center gap-2'>
            <FaBath className='size-s text-purple-500'/>
            <h1>{item.bath}</h1>
            </div>
            <div className='flex justify-center items-center gap-2'>
            <FaBed className='size-s text-purple-500'/>
            <h1>{item.bed}</h1>
            </div>
            <div className='flex justify-center items-center gap-2'>
            <MdSpaceDashboard className='size-s text-purple-500'/>
            <h1>{item.area}</h1>
            </div>
        </div>

        <div className='w-full h-[1px] bg-gray-200 mt-8'></div>
        <div id='owner-info' className='flex justify-between items-center w-full mt-2'>
        <div className='flex justify-center items-center gap-2'>
            <FaUserCircle className='size-s text-purple-500'/>
            <h1>{item.owner}</h1>
        </div>

        <div className='flex justify-center items-center gap-4'>
            <div className='p-2 border-2  border-gray-200 hover:bg-blue-600
            cursor-pointer transform hover:scale-110 transition-transform duration-300'><FaShareAlt className='size-4 text-purple-500'/></div>

        </div>
        <div className='flex justify-center items-center gap-4'>
            <div className='p-2 border-2  border-gray-200 hover:bg-blue-600
            cursor-pointer transform hover:scale-110 transition-transform duration-300'><FiBell className='size-4 text-purple-500'/></div>
        </div>

        <div className='flex justify-center items-center gap-4'>
            <div className='p-2 border-2  border-gray-200 hover:bg-blue-600
            cursor-pointer transform hover:scale-110 transition-transform duration-300'><FaPlus className='size-4 text-purple-500'/></div>
        </div>

        </div>
    </div>
        </div>
    ))
}
        </div>
      </section>
    </div>
  );
};

export default Properties;

