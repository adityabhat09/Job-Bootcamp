// SuccessStories.jsx
import React from 'react';

const SuccessStories = () => {
  // Success stories data
  const stories = [
    {
      id: 1,
      name: "Shubham Kumar",
      course: "Data Structures & Algorithms Mastery",
      date: "Placed in June 2024",
      testimonial: "Just Academy helped me crack top companies with personalized mock interviews and comprehensive DSA preparation.",
      link: "/success/shubham-kumar",
      company: "Amazon"
    },
    {
      id: 2,
      name: "Priya Sharma",
      course: "Product Management Certification",
      date: "Placed in May 2024",
      testimonial: "The mentorship I received transformed my approach to product thinking and secured multiple offers.",
      link: "/success/priya-sharma",
      company: "Microsoft"
    },
    {
      id: 3,
      name: "Rahul Verma",
      course: "Data Science & Machine Learning",
      date: "Placed in April 2024",
      testimonial: "The hands-on projects gave me real-world experience that impressed interviewers at top companies.",
      link: "/success/rahul-verma",
      company: "Ola"
    },
    {
      id: 4,
      name: "Ananya Patel",
      course: "Full Stack Web Development",
      date: "Placed in March 2024",
      testimonial: "Specialized training helped me master advanced concepts and land my dream job at a top tech company.",
      link: "/success/ananya-patel",
      company: "Google"
    },
    {
      id: 5,
      name: "Vikram Singh",
      course: "DevOps Engineering Program",
      date: "Placed in February 2024",
      testimonial: "Practical approach and industry projects prepared me perfectly for challenging interview processes.",
      link: "/success/vikram-singh",
      company: "Flipkart"
    },
    {
      id: 6,
      name: "Sneha Reddy",
      course: "System Design Masterclass",
      date: "Placed in January 2024",
      testimonial: "Mock interviews with industry professionals helped me ace the final rounds with confidence.",
      link: "/success/sneha-reddy",
      company: "Netflix"
    }
  ];

  return (
    <section className="success-stories py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            <span className="text-[#B51D74]">Success</span> Stories
          </h2>
          <div className="w-24 h-1 bg-[#B51D74] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our alumni who transformed their careers and achieved their dream roles in top tech companies
          </p>
        </div>

        {/* Stats Banner */}
        <div className="bg-gradient-to-r from-[#B51D74] to-[#8a1556] rounded-2xl p-6 mb-16 flex flex-col md:flex-row justify-around items-center shadow-lg">
          <div className="text-center mb-6 md:mb-0">
            <div className="text-4xl font-bold text-white">128%</div>
            <p className="text-gray-100">Average Salary Hike</p>
          </div>
          <div className="text-center mb-6 md:mb-0">
            <div className="text-4xl font-bold text-white">1.5 Lac+</div>
            <p className="text-gray-100">Learners Placed</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white">1,400+</div>
            <p className="text-gray-100">Alumni in Top Companies</p>
          </div>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {stories.map((story) => (
            <div 
              key={story.id} 
              className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              {/* Certificate Photo */}
              <div className="relative h-56 bg-gradient-to-r from-[#f8e0ee] to-[#f0c6e0] flex items-center justify-center px-2 ">
                <div className=" px-2 py-2  w-full h-40 bg-white rounded-lg shadow-lg flex items-center justify-center">
                  <div className="w-full h-36 bg-gradient-to-r from-[#B51D74] to-[#8a1556] rounded-lg flex items-center justify-center text-white text-4xl font-bold">
                    {story.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div className="absolute bottom-0 w-full h-8 bg-gradient-to-t from-white to-transparent"></div>
              </div>
              
              {/* Student Info */}
              <div className="p-6 pt-16 relative flex flex-col flex-1">
                {/* <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <div className="w-14 h-14 bg-[#B51D74] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{story.company.charAt(0)}</span>
                  </div>
                </div> */}
                
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{story.name}</h3>
                  <p className="text-[#B51D74] font-semibold">{story.course}</p>
                  <p className="text-gray-500 text-sm mt-1">{story.date}</p>
                </div>
                
                {/* Testimonial Excerpt */}
                <div className="relative my-6 p-4 bg-gray-50 rounded-lg border-l-4 border-[#B51D74]">
                  {/* <div className="absolute -top-4 left-4 text-[#B51D74] text-3xl">“</div> */}
                  <p className="text-gray-700">
                    {story.testimonial}
                  </p>
                </div>
                
                {/* Read More Button */}
                <div className="mt-auto pt-6 text-center">
                  <a 
                    href={story.link}
                    className="inline-block bg-white border-2 border-[#B51D74] text-[#B51D74] hover:bg-[#B51D74] hover:text-white font-medium py-2 px-6 rounded-full transition-all duration-300"
                  >
                    Read Full Story
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <a 
            href="/success"
            className="inline-block bg-[#B51D74] hover:bg-[#9e1964] text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View All Success Stories
          </a>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;