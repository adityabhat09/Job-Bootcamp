import React from 'react';
import { useState } from 'react';
import { Facebook, Twitter, Linkedin, Instagram, MapPin } from 'lucide-react';
import logo from '../images/logo.png'
import { HashLink } from 'react-router-hash-link';
import BookWebinarModal from '../components/BookWebinarModal';

const Footer = () => {
    // Replace with your actual social media profile URLs
    const socialLinks = {
  facebook: "https://www.facebook.com/JustAcademyIN/",
  twitter: "https://x.com/justacademy23",
  linkedin: "https://www.linkedin.com/company/justacademy/",
  instagram: "https://www.instagram.com/justacademyin/",
  googleMaps:
    "https://www.google.com/maps/place/JustAcademy/@19.2796842,72.8833987,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7b706aaaaaaa9:0x1c753433af032d39!8m2!3d19.2796842!4d72.8833987!16s%2Fg%2F11g65dw1pf?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D",
};


    const [isModalOpen, setModalOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Handle opening the modal and ensure mobile menu closes
    const handleBookWebinarClick = (e) => {
        e.preventDefault();
        closeAllMenus();
        setModalOpen(true);
    };

    // Helper function to close all menus
  const closeAllMenus = () => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  };

    return (
        <>
            <BookWebinarModal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
            />

            <footer className="bg-gray-900 text-white pt-12 pb-8 border-t-2 border-emerald-600">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                        {/* */}
                        <div className="col-span-1">
                            <div className="h-12 mb-4 flex items-center justify-center">
                                {/* Add your <img src="/logo.png" alt="JustAcademy Logo" /> here */}
                                <img src={logo} alt='justacademy logo' className='h-10  lg:h-14 w-auto' />
                            </div>
                            <p className="text-gray-400">
                                Master in-demand tech skills with our expert-led bootcamps.
                            </p>
                        </div>

                        {/* */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                            <ul>
                                <li className="mb-2"><a href="/" className="hover:text-emerald-500">Home</a></li>

                                <li className="mb-2"><a href='#' onClick={(e) => {
                                    e.preventDefault(); // stop navigation
                                    setModalOpen(true); // open modal
                                }} className="hover:text-emerald-500">Book a Free Webinar</a></li>

                                <li className="mb-2">
  <a href="#" onClick={handleBookWebinarClick} className="hover:text-emerald-500">
    Register Now
  </a>
</li>

                                <li className="mb-2"><a href="#contact" className="hover:text-emerald-500">Contact Us</a></li>
                            </ul>
                        </div>

                        {/* */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Popular Bootcamps</h3>
                            <ul>
                                <li className="mb-2"><a href="/courses/mean" className="hover:text-emerald-500">MEAN Stack</a></li>
                                <li className="mb-2"><a href="/courses/mern" className="hover:text-emerald-500">MERN Stack</a></li>
                                <li className="mb-2"><a href="/courses/data-analytics" className="hover:text-emerald-500">Data Analytics</a></li>
                            </ul>
                        </div>

                        {/* */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Resources</h3>
                            <ul>
                                <li className="mb-2"><a href="/blogs" className="hover:text-emerald-500">Blogs</a></li>
                                <li className="mb-2"><a href="/articles" className="hover:text-emerald-500">Articles</a></li>
                            </ul>
                        </div>

                    </div>

                    <div className="mt-8 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-500 text-sm">© {new Date().getFullYear()} JustAcademy. All rights reserved.</p>

                        {/* */}
                        <div className="flex space-x-4 mt-4 md:mt-0">
                            <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-500" aria-label="Facebook">
                                <Facebook size={20} />
                            </a>
                            <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-500" aria-label="Twitter">
                                <Twitter size={20} />
                            </a>
                            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-500" aria-label="LinkedIn">
                                <Linkedin size={20} />
                            </a>
                            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-500" aria-label="Instagram">
                                <Instagram size={20} />
                            </a>
                            <a href={socialLinks.googleMaps} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-500" aria-label="Google Maps">
                                <MapPin size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;