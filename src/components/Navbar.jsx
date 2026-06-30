import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { FaXmark, FaBars } from 'react-icons/fa6'
import logo from '../assets/images/logo.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  const navItems = [
    { link: 'About', path: 'about' },
    { link: 'Properties', path: 'properties' },
    { link: 'Services', path: 'services' },
    { link: 'Dashboard', path: 'dashboard' },
    { link: 'Testimonials', path: 'testimonials' },
  ]

  return (
    <nav className={`bg-white sticky top-0 z-30 transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'border-b border-gray-100'}`}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>

          {/* Logo */}
          <div className='flex-shrink-0'>
            <img src={logo} alt="RealEstate AI" className="h-16 w-auto object-contain" />
          </div>

          {/* Desktop Nav */}
          <ul className='hidden lg:flex items-center gap-1'>
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                spy={true}
                offset={-80}
                smooth={true}
                className='text-gray-600 text-sm font-medium cursor-pointer px-4 py-2 rounded-lg hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200'
                activeClass='text-gray-900 bg-gray-50'
              >
                {link}
              </Link>
            ))}
          </ul>

          {/* CTA Button */}
          <div className='hidden lg:flex items-center gap-3'>
            <Link
              to='services'
              spy={true}
              offset={-80}
              smooth={true}
              className='bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg cursor-pointer transition-colors duration-200'
            >
              Try AI Tools →
            </Link>
          </div>

          {/* Mobile menu icon */}
          <div className='flex lg:hidden' onClick={toggleMenu}>
            {isMenuOpen
              ? <FaXmark className='text-xl text-gray-700 cursor-pointer' />
              : <FaBars className='text-xl text-gray-700 cursor-pointer' />
            }
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='lg:hidden bg-white border-t border-gray-100 px-4 py-4' onClick={closeMenu}>
          <ul className='flex flex-col gap-1'>
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                spy={true}
                offset={-80}
                smooth={true}
                className='text-gray-600 text-sm font-medium cursor-pointer px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 block'
              >
                {link}
              </Link>
            ))}
            <Link
              to='services'
              spy={true}
              offset={-80}
              smooth={true}
              className='mt-2 bg-blue-600 text-white text-sm font-medium px-4 py-3 rounded-lg cursor-pointer text-center block'
            >
              Try AI Tools →
            </Link>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar