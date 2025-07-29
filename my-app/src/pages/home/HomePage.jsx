import React, { useEffect } from 'react';
import Hero from './Hero';
import WhyChooseUs from './WhyChooseUs';
import SuccessStories from './SuccessStories';

const HomePage = () => {
  useEffect(() => {
    // --- SEO Meta Tags ---

    // 1. Set Meta Title
    document.title = 'Tech Job Bootcamps with Placement Assistance | Just Career';

    // 2. Set Meta Description
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Get the tech career you deserve, faster. Join our expert-led bootcamps with guaranteed placement assistance, build a portfolio with real-world projects, and land a job in top tech companies.';
    document.head.appendChild(metaDescription);

    // 3. Set Meta Keywords
    const metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = 'just career, tech careers, job bootcamp, placement assistance, MEAN stack, MERN stack, data analytics, React JS, full stack development, tech training, career support, learn to code, IT jobs';
    document.head.appendChild(metaKeywords);

    // Cleanup function to remove the meta tags when the component unmounts
    return () => {
      document.head.removeChild(metaDescription);
      document.head.removeChild(metaKeywords);
    };
  }, []); // The empty array [] ensures this effect runs only once when the component mounts.

  return (
    <div>
        <Hero/>
        <WhyChooseUs/>
        <SuccessStories/>
    </div>
  );
};

export default HomePage;