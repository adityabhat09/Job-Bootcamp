import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import BookWebinarModal from '../components/BookWebinarModal';


const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);

  // Fetch courses from backend
  useEffect(() => {
    axios.get('/api/courses')
      .then((res) => {
        setCourses(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading courses:', err);
        setLoading(false);
      });
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.dropdown-container')) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Prevent body scroll when mobile menu or modal is open
  useEffect(() => {
    if (isMobileMenuOpen || isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen, isModalOpen]);

  // Helper function to close all menus
  const closeAllMenus = () => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  // Handle opening the modal and ensure mobile menu closes
  const handleBookWebinarClick = (e) => {
    e.preventDefault();
    closeAllMenus();
    setModalOpen(true);
  };

  return (
    <>
      <BookWebinarModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
      />

      <nav className="bg-white shadow-lg fixed top-0 left-0 w-full z-50 border-b-2 border-emerald-500">
        <div className="container mx-auto px-4 py-5 flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 pl-4 lg:pl-10"> {/* ✅ Changed md: to lg: */}
            <Link to="/" onClick={closeAllMenus}>
              <img src="/logo.png" alt="JustAcademy Logo" className="h-10 w-auto" />
            </Link>
          </div>

          {/* ================================== */}
          {/* ✅ DESKTOP NAVIGATION (Hidden on Medium & Small) */}
          {/* ================================== */}
          <div className="hidden lg:flex items-center space-x-8"> {/* ✅ Changed md: to lg: */}
            <ul className="flex items-center space-x-10 text-gray-700 font-semibold text-lg">
              <li>
                <Link to="/" className="hover:text-emerald-700 transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li className="relative dropdown-container">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="hover:text-emerald-900 transition-colors duration-300 focus:outline-none flex items-center gap-1"
                >
                  Job Bootcamps
                  <ChevronDown className={`w-5 h-5 mt-0.5 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {dropdownOpen && (
                  <ul className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white shadow-xl rounded-lg py-2 min-w-[220px] border border-gray-200 z-50">
                    {loading ? (
                      <li className="px-4 py-2 text-gray-500">Loading...</li>
                    ) : courses.length > 0 ? (
                      courses.map((course) => (
                        <li key={course.slug}>
                          <Link
                            to={`/courses/${course.slug}`}
                            onClick={() => setDropdownOpen(false)}
                            className="block w-full text-left px-4 py-2 hover:bg-gray-100 hover:text-emerald-500 transition-colors duration-200"
                          >
                            {course.name}
                          </Link>
                        </li>
                      ))
                    ) : (
                      <li className="px-4 py-2 text-gray-500">No courses</li>
                    )}
                  </ul>
                )}
              </li>
              <li>
                <Link to="/blogs" className="hover:text-emerald-700 transition-colors duration-300">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/articles" className="hover:text-emerald-700 transition-colors duration-300">
                  Articles
                </Link>
              </li>
            </ul>
            <div className="flex items-center gap-4">
              <Link
                to="#"
                onClick={handleBookWebinarClick}
                className="px-5 py-2 border border-emerald-500 text-emerald-900 rounded-full font-semibold hover:bg-[#045f34] hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-md"
              >
                Book a Free Webinar
              </Link>
              <Link
                to="#"
                onClick={handleBookWebinarClick}
                className="px-5 py-2 bg-emerald-600 text-white rounded-full font-semibold hover:bg-[#045f34] transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
              >
                Register Now
              </Link>
            </div>
          </div>

          {/* ================================== */}
          {/* ✅ MOBILE MENU BUTTON (Visible on Medium & Small) */}
          {/* ================================== */}
          <div className="lg:hidden flex items-center pr-4"> {/* ✅ Changed md: to lg: */}
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-emerald-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* ================================== */}
        {/* ✅ MOBILE MENU PANEL */}
        {/* ================================== */}
        <div
          className={`lg:hidden absolute top-full left-0 w-full bg-white transition-all duration-300 ease-in-out overflow-hidden z-40 ${ /* ✅ Changed md: to lg: */
            isMobileMenuOpen ? 'max-h-screen border-t border-gray-200' : 'max-h-0'
          }`}
        >
          <div className="py-4 px-6">
            <ul className="flex flex-col space-y-4 text-gray-700 font-semibold text-lg">
              <li>
                <Link to="/" onClick={closeAllMenus} className="block py-2 hover:text-emerald-700">
                  Home
                </Link>
              </li>
              <li className="dropdown-container">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="w-full flex justify-between items-center py-2 hover:text-emerald-600"
                >
                  <span>Job Bootcamps</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {dropdownOpen && (
                  <ul className="mt-2 pl-4 border-l-2 border-gray-200">
                    {loading ? (
                      <li className="py-2 text-gray-500">Loading...</li>
                    ) : courses.length > 0 ? (
                      courses.map((course) => (
                        <li key={course.slug}>
                          <Link
                            to={`/courses/${course.slug}`}
                            onClick={closeAllMenus}
                            className="block w-full text-left py-2 hover:bg-gray-100 hover:text-emerald-600"
                          >
                            {course.name}
                          </Link>
                        </li>
                      ))
                    ) : (
                      <li className="py-2 text-gray-500">No courses</li>
                    )}
                  </ul>
                )}
              </li>
              <li>
                <Link to="/blogs" onClick={closeAllMenus} className="block py-2 hover:text-emerald-700">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/articles" onClick={closeAllMenus} className="block py-2 hover:text-emerald-700">
                  Articles
                </Link>
              </li>
            </ul>
            <div className="flex flex-col gap-4 mt-6 border-t border-gray-200 pt-6">
              <Link
                to="#"
                onClick={handleBookWebinarClick}
                className="w-full text-center px-5 py-2 border border-emerald-600 text-emerald-600 rounded-full font-semibold hover:bg-[#045f34] hover:text-white transition-all"
              >
                Book a Free Webinar
              </Link>
              <Link
                to="#"
                onClick={handleBookWebinarClick}
                className="w-full text-center px-5 py-2 bg-emerald-600 text-white rounded-full font-semibold hover:bg-[#045f34] transition-all"
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;