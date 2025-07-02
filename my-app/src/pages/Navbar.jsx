import React, { useState } from 'react';
import logo from '../images/logo.jpg';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Close dropdown when clicking outside
  React.useEffect(() => {
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
            <a href="/" className="hover:text-[#B51D74] transition-colors duration-300">
              Home
            </a>
          </li>

          {/* Job Bootcamps Dropdown */}
          <li className="relative dropdown-container">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="hover:text-[#B51D74] transition-colors duration-300 focus:outline-none flex items-center gap-1 "
            >
              Job Bootcamps
              <ChevronDown className="w-6 h-6 mt-0.5 transition-transform" />
            </button>

            {dropdownOpen && (
              <ul className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md py-2 min-w-[180px] border border-gray-200 z-50">
                <li>
                  <a
                    href="/job-bootcamps/mern"
                    className="block px-4 py-2 hover:bg-gray-100 hover:text-[#B51D74]"
                  >
                    MERN Stack
                  </a>
                </li>
                <li>
                  <a
                    href="/job-bootcamps/mean"
                    className="block px-4 py-2 hover:bg-gray-100 hover:text-[#B51D74]"
                  >
                    MEAN Stack
                  </a>
                </li>
                <li>
                  <a
                    href="/job-bootcamps/flutter"
                    className="block px-4 py-2 hover:bg-gray-100 hover:text-[#B51D74]"
                  >
                    Data Analytics
                  </a>
                </li>
              </ul>
            )}
          </li>

          <li>
            <a href="/about" className="hover:text-[#B51D74] transition-colors duration-300">
              About Us
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-[#B51D74] transition-colors duration-300">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
