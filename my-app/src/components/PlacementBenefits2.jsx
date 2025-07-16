import React from 'react';
import { Github, Linkedin, FileText, Edit3, Users } from 'lucide-react';
import DottedBackground from './DottedBackground';

const PlacementBenefits2 = () => {
    const benefits = [
        {
            icon: <Github className="w-8 h-8 text-green-400" />,
            title: "Github profile",
            description: "Showcase your projects and technical contributions."
        },
        {
            icon: <Linkedin className="w-8 h-8 text-blue-400" />,
            title: "LinkedIn profile",
            description: "Build a professional presence and network with recruiters."
        },
        {
            icon: <FileText className="w-8 h-8 text-yellow-400" />,
            title: "Resume writing",
            description: "Craft a professional and impactful resume."
        },
        {
            icon: <Edit3 className="w-8 h-8 text-orange-400" />,
            title: "Soft skills",
            description: "Master communication and salary negotiation skills."
        },
        {
            icon: <Users className="w-8 h-8 text-pink-400" />,
            title: "Interview preparation",
            description: "Mock interviews and expert sessions."
        }
    ];

    return (
        <DottedBackground className=' bg-gray-900 text-white px-8 py-10 pb-30 '>

            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-20 mt-10">
                    Benefits beyond <span className='text-[#C63687]'>learning</span>
                </h2>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className={`bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-[#C63687] transition-all duration-300 hover:transform hover:scale-105 justify-items-center ${benefits.length === 5 && (index === 3 || index === 4) ? 'lg:col-span-3' : 'lg:col-span-2'
                                }`}
                        >

                            <div className="mb-4 ">
                                {benefit.icon}
                            </div>

                            <h3 className="text-xl font-semibold mb-4 text-white">
                                {benefit.title}
                            </h3>

                            {benefit.description && (
                                <p className="text-gray-400 leading-relaxed text-center">
                                    {benefit.description}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>


        </DottedBackground>
    );
};

export default PlacementBenefits2;