import React from 'react';
import { CheckCircle, Users, Trophy, Briefcase, TrendingUp, Star } from 'lucide-react';
import DottedBackground from '../../components/DottedBackground';

export default function WhyChooseUs() {
  const features = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Guaranteed Placement Assistance",
      description: "Get dedicated interview preparation and job placement support",
      highlight: "Interview Assistance"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Expert Mentorship",
      description: "Learn from industry veterans with 10+ years of experience",
      highlight: "10+ Years Experience"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Real-World Projects",
      description: "Build portfolio-worthy projects that employers actually want to see",
      highlight: "Portfolio Ready"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Dedicated Career Support",
      description: "Personal career coaches to guide you from learning to landing",
      highlight: "1-on-1 Support"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Cutting-Edge Curriculum",
      description: "Learn the latest technologies that top companies are hiring for",
      highlight: "Latest Tech Stack"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Lifetime Access",
      description: "Keep learning with lifetime access to course materials and updates",
      highlight: "Lifetime Access"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className='text-emerald-600'>Justacademy</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of successful graduates who transformed their careers with our proven bootcamp methodology
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-emerald-400"
            >
              {/* Icon */}
              <div 
                className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 text-white bg-emerald-600"
                // style={{ backgroundColor: '#B51D74' }}
              >
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
              
              {/* Highlight Badge */}
              <div 
                className="inline-block px-4 py-2 rounded-lg text-sm font-semibold text-white bg-emerald-600"
                // style={{ backgroundColor: '#B51D74' }}
              >
                {feature.highlight}
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>


        {/* Stats Section */}
        <DottedBackground className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Track Record Speaks</h3>
            <p className="text-gray-300 text-lg">Numbers that prove our commitment to your success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 text-emerald-500" >500+</div>
              <div className="text-gray-300">Hiring Partners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 text-emerald-500">4.9/5</div>
              <div className="text-gray-300">Student Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 text-emerald-500">3000+</div>
              <div className="text-gray-300">Learners Trained</div>
            </div>
            {/* 300+ */}
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 text-emerald-500" >300+</div>
              <div className="text-gray-300">Alumini Network Members</div>
            </div>
          </div>
        </DottedBackground>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6 text-lg">Ready to transform your career?</p>
          <button 
            className="px-8 py-4 text-white font-semibold rounded-xl text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-emerald-600"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Start Your Journey Today
          </button>
        </div>
      </div>
    </section>
  );
}