import React, { useState } from 'react'
import {Link} from 'react-scroll'
import {FaXmark, FaBars} from 'react-icons/fa6'
import logo from '../assets/images/logo.png'

const Navbar = () => {

  const  [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  const closeMenu = () => {
    setIsMenuOpen(false);
  }
  
  const navItems =[
    {
      link: 'About', path: 'about'
    },
    {
      link: 'Properties', path: 'properties'
    },
    {
      link: 'Services', path: 'services'
    },
    {
      link: 'Dashboard', path: 'dashboard'
    },
    {
      link: 'Testimonials', path: 'testimonials'
    }
  ]
  return (
    <nav className='bg-[#f3f3f3] flex justify-between items-center
     gap-4 lg:px-20 px-4 py-2 sticky top-0 z-30'>
      <div id='logo'>
      <img src={logo} alt="RealEstate AI" className="h-12 w-auto object-contain lg:h-14" />
      </div>
      <ul className='lg:flex justify-center items-center gap-8 hidden'>
        {navItems.map(({link, path })=> (
          <Link key={path} className='text-black text-[15px] uppercase font-semibold
          cursor-pointer px-3 py-2 rounded-lg hover:bg-blue-600
          hover:text-white' to={path} spy={true} offset={-100} smooth={true}>{link}</Link>
        ))}
      </ul>

       {/* mobile menu icon starts here */}

       <div className='flex justify-center items-center lg:hidden' onClick={toggleMenu}>
        <div>
          {isMenuOpen ? <FaXmark className='text-2xl text-black cursor-pointer'/> : <FaBars className='text-2xl text-black cursor-pointer'/>}
        </div>
       </div>

       <div className={`${isMenuOpen ? 'flex' : 'hidden'} w-full h-fit bg-slate-800
       p-4 absolute top-[80px] left-0`} onClick={closeMenu}>
        <ul className='flex flex-col justify-center items-center gap-4 w-full'>
          {navItems.map(({link, path})=>(
            <Link key={path} className=" text-white uppercase font-semibold
            cursor-pointer p-3 rounded-lg hover:bg-blue-600 hover:text-white w-full text-center" to={path} spy={true} offset={-100} smooth={true}>{link}</Link>
          ))}
        </ul>
        
       </div>
     </nav>
  )
}

export default Navbar;


