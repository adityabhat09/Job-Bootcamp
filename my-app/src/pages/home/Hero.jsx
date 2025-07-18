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
        <DottedBackground className="h-full pb-8 bg-gray-900" >
            <div className="pt-28 flex h-full " id="contact">

                <div className="w-1/2 h-full flex items-center justify-center px-12">
                    <div className="max-w-3xl text-left space-y-8">
                        <p className="text-pink-400 font-medium text-lg">Restricted by opportunities?</p>

                        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                            Get the tech career<br />you deserve. <span className="text-white/90">Faster.</span>
                        </h1>

                        {/* Points Section */}
                        <div className="space-y-6 pt-8">
                            {/* Point 1 */}
                            <div className="flex items-start gap-6 bg-white/5 px-6 py-8 rounded-xl">
                                <CheckCircle className="text-pink-400 w-6 h-6 mt-1" />
                                <p className="text-white text-lg">
                                    <span className="font-semibold">128% average hike</span> via our placement cell
                                </p>
                            </div>

                            {/* Point 2 */}
                            <div className="flex items-start gap-6 bg-white/5 px-6 py-8 rounded-xl">
                                <CheckCircle className="text-pink-400 w-6 h-6 mt-1" />
                                <p className="text-white text-lg">
                                    <span className="font-semibold">1.5 Lac+ learners</span> cracked top tech companies
                                </p>
                            </div>

                            {/* Point 3 */}
                            <div className="flex items-start gap-6 bg-white/5 px-6 py-8 rounded-xl">
                                <CheckCircle className="text-pink-400 w-6 h-6 mt-1" />
                                <p className="text-white text-lg">
                                    <span className="font-semibold">1,400+ alumni in MAANG</span> & 103 unicorn startups
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ---------------------------------------------------- */}

                {/* Right Column */}
                <div className="w-1/2 h-full flex items-center justify-center px-8">
                    {/* Mobile-style Contact Us Form */}
                    <div className="w-full max-w-lg">
                        <form className="bg-white rounded-4xl p-8 border-12 border-gray-950 shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                            <h2 className="text-sm text-gray-500 pb-4">Let's find the right course for you</h2>
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Us</h2>

                            {/* Name Field */}
                            <div className="mb-6">
                                <label className="block text-base font-medium text-[#B51D74] mb-3">Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter name"
                                    className="w-full p-4 border border-gray-300 rounded-lg placeholder-gray-400 text-base"
                                />
                            </div>

                            {/* Phone Number Field */}
                            <div className="mb-6">
                                <label className="block text-base font-medium text-[#B51D74] mb-3">Phone Number</label>
                                <input
                                    type="tel"
                                    placeholder="Enter phone number"
                                    className="w-full p-4 border border-gray-300 rounded-lg placeholder-gray-400 text-base"
                                />
                            </div>

                            {/* Email Field */}
                            <div className="mb-6">
                                <label className="block text-base font-medium text-[#B51D74] mb-3">Email</label>
                                <input
                                    type="email"
                                    placeholder="Enter email"
                                    className="w-full p-4 border border-gray-300 rounded-lg placeholder-gray-400 text-base"
                                />
                            </div>

                            {/* Message Field */}
                            <div className="mb-8">
                                <label className="block text-base font-medium text-[#B51D74] mb-3">Message</label>
                                <textarea
                                    placeholder="Enter your message"
                                    rows="4"
                                    className="w-full p-4 border border-gray-300 rounded-lg placeholder-gray-400 text-base resize-none"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button className="w-full bg-pink-700 hover:bg-pink-900 text-white font-semibold py-4 px-8 rounded-lg transition-colors text-lg">
                                Send Message
                            </button>

                            {/* Footer Text */}
                            {/* <p className="text-sm text-gray-500 mt-6 leading-relaxed">
                                I authorize Coding Ninjas to contact me via course updates & offers via
                                Email/SMS/WhatsApp/Call. I have read and agree to <span className="text-blue-600">Privacy Policy</span> & <span className="text-blue-600">Terms of use</span>
                            </p> */}
                        </form>
                    </div>
                </div>

                {/* right col end */}
            </div>
        </DottedBackground>
    );
};

export default Hero;