import React from 'react';
import { Users, GraduationCap, Lightbulb, Headphones, BookOpen, TrendingUp } from 'lucide-react';
import DottedBackground from './DottedBackground';

// Placeholder for your DottedBackground component
// const DottedBackground = ({ children }) => (
//   <div className="relative">
//     {/* Add your animated background here */}
//     <div className="absolute inset-0 opacity-10">
//       {/* Animated dots pattern would go here */}
//     </div>
//     {children}
//   </div>
// );

const PlacementBenefits = () => {
    const benefits = [
        {
            icon: <Users className="w-8 h-8 text-green-400" />,
            title: "1:1 career counseling",
            description: "Personalized guidance to align your skills with market demands and career goals"
        },
        {
            icon: <GraduationCap className="w-8 h-8 text-purple-400" />,
            title: "Industry expert mentorship",
            description: "Learn from professionals currently working in top-tier companies"
        },
        {
            icon: <Lightbulb className="w-8 h-8 text-emerald-400" />,
            title: "Portfolio development",
            description: "Build impressive projects that showcase your abilities to potential employers"
        },
        {
            icon: <Headphones className="w-8 h-8 text-yellow-400" />,
            title: "Interview preparation",
            description: "Mock interviews and feedback to boost your confidence and performance"
        },
        {
            icon: <BookOpen className="w-8 h-8 text-orange-400" />,
            title: "Resume optimization",
            description: "Professional resume crafting to highlight your strengths and achievements"
        },
        {
            icon: <TrendingUp className="w-8 h-8 text-blue-400" />,
            title: "Job placement assistance",
            description: "Direct connections with hiring partners and ongoing support until placement"
        }
    ];

    return (
        <DottedBackground className=' bg-gray-900 text-white px-8 py-16 mt-20'>
            
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-20 mt-20">
                        Job Bootcamp <span className='text-emerald-500'>Benefits</span>
                    </h2>

                    {/* Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-emerald-500 transition-all duration-300 hover:transform hover:scale-105"
                            >
                                <div className="mb-6">
                                    {benefit.icon}
                                </div>

                                <h3 className="text-xl font-semibold mb-4 text-white">
                                    {benefit.title}
                                </h3>

                                <p className="text-gray-400 leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>


            
        </DottedBackground>
    );
};

export default PlacementBenefits;