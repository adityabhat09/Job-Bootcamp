import React from 'react';
import { CheckCircle } from 'lucide-react';
import DottedBackground from '../../components/DottedBackground'

const Hero = () => {
    return (
        <DottedBackground className="h-full pb-8 bg-gray-900" >
            {/* ✅ Changed to flex-col for mobile, md:flex-row for desktop */}
            <div className="pt-28 flex h-full flex-col md:flex-row" id="contact">

                {/* Left Column */}
                {/* ✅ Changed to w-full on mobile, md:w-1/2 on desktop. Adjusted padding. */}
                <div className="w-full md:w-1/2 h-full flex items-center justify-center px-6 md:px-12">
                    <div className="max-w-3xl text-left space-y-8">
                        <p className="text-pink-400 font-medium text-lg">Restricted by opportunities?</p>

                        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                            Get the tech career<br />you deserve. <span className="text-white/90">Faster.</span>
                        </h1>

                        {/* Points Section */}
                        <div className="space-y-6 pt-8">
                            {/* Point 1 */}
                            <div className="flex items-start gap-6 bg-white/5 px-6 py-8 rounded-xl">
                                <CheckCircle className="text-pink-400 w-6 h-6 mt-1 flex-shrink-0" />
                                <p className="text-white text-lg">
                                    <span className="font-semibold">128% average hike</span> via our placement cell
                                </p>
                            </div>

                            {/* Point 2 */}
                            <div className="flex items-start gap-6 bg-white/5 px-6 py-8 rounded-xl">
                                <CheckCircle className="text-pink-400 w-6 h-6 mt-1 flex-shrink-0" />
                                <p className="text-white text-lg">
                                    <span className="font-semibold">1.5 Lac+ learners</span> cracked top tech companies
                                </p>
                            </div>

                            {/* Point 3 */}
                            <div className="flex items-start gap-6 bg-white/5 px-6 py-8 rounded-xl">
                                <CheckCircle className="text-pink-400 w-6 h-6 mt-1 flex-shrink-0" />
                                <p className="text-white text-lg">
                                    <span className="font-semibold">1,400+ alumni in MAANG</span> & 103 unicorn startups
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ---------------------------------------------------- */}

                {/* Right Column (Form) */}
                {/* ✅ Changed to w-full on mobile, md:w-1/2 on desktop. Adjusted padding and added top margin for mobile. */}
                <div className="w-full md:w-1/2 h-full flex items-center justify-center px-6 md:px-8 mt-16 md:mt-0">
                    <div className="w-full max-w-lg">
                        <form className="bg-white rounded-3xl p-8 shadow-[0_0_30px_rgba(255,255,255,0.3)]">
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
                            <button className="w-full bg-[#B81F77] hover:bg-[#9F1A65] text-white font-semibold py-4 px-8 rounded-lg transition-colors text-lg">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </DottedBackground>
    );
};

export default Hero;