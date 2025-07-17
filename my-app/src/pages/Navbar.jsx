import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from '../images/logo.jpg';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

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
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  


return (
  <nav className="bg-white shadow-lg fixed top-0 left-0 w-full z-50 border-b-2 border-[#B81F77]">
    <div className="container mx-auto px-4 py-4 flex items-center justify-between">
      
      {/* Logo */}
      <div className="flex-shrink-0 pl-10">
        <Link to="/">
          <img src={logo} alt="JustAcademy Logo" className="h-12 w-auto" />
        </Link>
      </div>

      {/* ✅ RIGHT-SIDE CONTAINER: Grouping Nav Links and CTA Buttons */}
      <div className="hidden md:flex items-center space-x-8">
        
        {/* Navigation Links */}
        <ul className="flex items-center space-x-10 text-gray-700 font-semibold text-lg">
          <li>
            <Link to="/" className="hover:text-[#B51D74] transition-colors duration-300">
              Home
            </Link>
          </li>

          {/* ✅ Job Bootcamps Dropdown (Improved Interactivity) */}
          <li className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              onBlur={() => setDropdownOpen(false)} // Optional: close dropdown on focus loss
              className="hover:text-[#B51D74] transition-colors duration-300 focus:outline-none flex items-center gap-1"
            >
              Job Bootcamps
              {/* ✅ Chevron icon now rotates on open/close */}
              <ChevronDown className={`w-5 h-5 mt-0.5 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {dropdownOpen && (
              <ul className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white shadow-xl rounded-lg py-2 min-w-[220px] border border-gray-200 z-50">
                {loading ? (
                  <li className="px-4 py-2 text-gray-500">Loading...</li>
                ) : courses.length === 0 ? (
                  <li className="px-4 py-2 text-gray-500">No courses available</li>
                ) : (
                  courses.map((course) => (
                    <li key={course.slug}>
                      <Link
                        to={`/courses/${course.slug}`}
                        onClick={() => setDropdownOpen(false)} // Close dropdown on link click
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100 hover:text-[#B51D74] transition-colors duration-200"
                      >
                        {course.name}
                      </Link>
                    </li>
                  ))
                )}
              </ul>
            )}
          </li>
        </ul>

        {/* ✅ CTA Buttons (Visually Enhanced) */}
        <div className="flex items-center gap-4">
          <Link
            to="/webinar"
            className="px-5 py-2 border border-[#B81F77] text-[#B81F77] rounded-full font-semibold hover:bg-[#B81F77] hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-md"
          >
            Book a Free Webinar
          </Link>
          <Link
            to="/register"
            className="px-5 py-2 bg-[#B81F77] text-white rounded-full font-semibold hover:bg-[#9F1A65] transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
          >
            Register Now
          </Link>
        </div>
      </div>

      {/* Mobile Menu Button can go here if needed */}
      {/* <div className="md:hidden"> ... </div> */}

    </div>
  </nav>
);


};

export default Navbar;
