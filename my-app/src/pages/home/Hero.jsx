import React from 'react';
import { CheckCircle } from 'lucide-react';
import DottedBackground from '../../components/DottedBackground'

// const DottedBackground = ({ children, className = "" }) => {
//     return (
//         <div className={`relative ${className}`}>
//             <div 
//                 className="absolute inset-0 opacity-20"
//                 style={{
//                     backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
//                     backgroundSize: '30px 30px',
//                 }}
//             />
//             <div className="relative z-10">
//                 {children}
//             </div>
//         </div>
//     );
// };

const Hero = () => {
    return (
        <DottedBackground className="h-screen bg-gray-900">
            <div className="pt-20 flex h-full">
                {/* Left Column */}
                <div className="w-1/2 h-full flex items-center justify-center px-8">
                    <div className="max-w-xl text-left space-y-6">
                        <p className="text-green-400 font-medium">Restricted by opportunities?</p>

                        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                            Get the tech career<br />you deserve. <span className="text-white/90">Faster.</span>
                        </h1>

                        {/* Points Section */}
                        <div className="space-y-4 pt-6">
                            {/* Point 1 */}
                            <div className="flex items-start gap-4 bg-white/5 px-4 py-3 rounded-lg">
                                <CheckCircle className="text-green-400 w-5 h-5 mt-1" />
                                <p className="text-white text-sm">
                                    <span className="font-semibold">128% average hike</span> via our placement cell
                                </p>
                            </div>

                            {/* Point 2 */}
                            <div className="flex items-start gap-4 bg-white/5 px-4 py-3 rounded-lg">
                                <CheckCircle className="text-green-400 w-5 h-5 mt-1" />
                                <p className="text-white text-sm">
                                    <span className="font-semibold">1.5 Lac+ learners</span> cracked top tech companies
                                </p>
                            </div>

                            {/* Point 3 */}
                            <div className="flex items-start gap-4 bg-white/5 px-4 py-3 rounded-lg">
                                <CheckCircle className="text-green-400 w-5 h-5 mt-1" />
                                <p className="text-white text-sm">
                                    <span className="font-semibold">1,400+ alumni in MAANG</span> & 103 unicorn startups
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ---------------------------------------------------- */}

                {/* Right Column */}
                <div className="w-1/2 h-full flex items-center justify-center px-8"> 
                    {/* Mobile-style Course Finder Form */}
                    <div className="w-full max-w-lg">
                        <div className="bg-white rounded-4xl p-8 border-12 border-gray-950 shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                            <h2 className="text-2xl font-bold text-gray-900 mb-8">Let's find the right course for you</h2>

                            {/* Experience Section */}
                            <div className="mb-8">
                                <label className="block text-base font-medium text-orange-600 mb-4">Experience</label>
                                <div className="space-y-4">
                                    <label className="flex items-center">
                                        <input type="radio" name="experience" className="mr-4 scale-110" />
                                        <span className="text-base text-blue-600">Working Professional - Technical Roles</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="radio" name="experience" className="mr-4 scale-110" />
                                        <span className="text-base text-blue-600">Working Professional - Non Technical</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="radio" name="experience" className="mr-4 scale-110" />
                                        <span className="text-base text-blue-600">College Student - Final Year</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="radio" name="experience" className="mr-4 scale-110" />
                                        <span className="text-base text-blue-600">College Student - 1st to Pre-final Year</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="radio" name="experience" className="mr-4 scale-110" />
                                        <span className="text-base text-blue-600">Others</span>
                                    </label>
                                </div>
                            </div>

                            {/* Topic Selection */}
                            <div className="mb-6">
                                <label className="block text-base font-medium text-orange-600 mb-3">Select topic of interest</label>
                                <select className="w-full p-4 border border-gray-300 rounded-xl text-gray-500 bg-white text-base">
                                    <option>Select your options/choices</option>
                                    <option>Full Stack Development</option>
                                    <option>Data Science</option>
                                    <option>Machine Learning</option>
                                    <option>DevOps</option>
                                </select>
                            </div>

                            {/* Name Field */}
                            <div className="mb-6">
                                <label className="block text-base font-medium text-orange-600 mb-3">Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter name"
                                    className="w-full p-4 border border-gray-300 rounded-lg placeholder-gray-400 text-base"
                                />
                            </div>

                            {/* Phone Number Field */}
                            <div className="mb-6">
                                <label className="block text-base font-medium text-orange-600 mb-3">Phone Number</label>
                                <input
                                    type="tel"
                                    placeholder="Enter phone number"
                                    className="w-full p-4 border border-gray-300 rounded-lg placeholder-gray-400 text-base"
                                />
                            </div>

                            {/* Email Field */}
                            <div className="mb-8">
                                <label className="block text-base font-medium text-orange-600 mb-3">Email</label>
                                <input
                                    type="email"
                                    placeholder="Enter email"
                                    className="w-full p-4 border border-gray-300 rounded-lg placeholder-gray-400 text-base"
                                />
                            </div>

                            {/* Submit Button */}
                            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors text-lg">
                                Find your course
                            </button>

                            {/* Footer Text */}
                            <p className="text-sm text-gray-500 mt-6 leading-relaxed">
                                I authorize Coding Ninjas to contact me via course updates & offers via
                                Email/SMS/WhatsApp/Call. I have read and agree to <span className="text-blue-600">Privacy Policy</span> & <span className="text-blue-600">Terms of use</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* right col end */}
            </div>
        </DottedBackground>
    );
};

export default Hero;