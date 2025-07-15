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
        <div className="flex-shrink-0">
          <img src={logo} alt="JustAcademy Logo" className="h-12 w-auto" />
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-10 text-gray-700 font-semibold text-lg relative">
          <li>
            <Link to="/" className="hover:text-[#B51D74] transition-colors duration-300">
              Home
            </Link>
          </li>

          {/* ✅ Job Bootcamps Dropdown */}
          <li className="relative dropdown-container">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="hover:text-[#B51D74] transition-colors duration-300 focus:outline-none flex items-center gap-1"
            >
              Job Bootcamps
              <ChevronDown className="w-6 h-6 mt-0.5 transition-transform" />
            </button>

            {dropdownOpen && (
              <ul className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md py-2 min-w-[200px] border border-gray-200 z-50">
                {loading ? (
                  <li className="px-4 py-2 text-gray-500">Loading...</li>
                ) : courses.length === 0 ? (
                  <li className="px-4 py-2 text-gray-500">No courses available</li>
                ) : (
                  courses.map((course) => (
                    <li key={course.slug}>
                      <Link
                        to={`/courses/${course.slug}`}
                        className="block px-4 py-2 hover:bg-gray-100 hover:text-[#B51D74]"
                      >
                        {course.name}
                      </Link>
                    </li>
                  ))
                )}
              </ul>
            )}
          </li>

          <li>
            <Link to="/about" className="hover:text-[#B51D74] transition-colors duration-300">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-[#B51D74] transition-colors duration-300">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
