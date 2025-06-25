import React from 'react';
import DottedBackground from '../../components/DottedBackground';
import { CheckCircle } from 'lucide-react';

const Hero = () => {
    return (
        <DottedBackground className="h-screen bg-gray-900">
            <div className="flex h-full">
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

                {/* Right Column */}
                <div className="w-1/2 h-full flex items-center justify-center">
                    <h1 className='text-white text-2xl'>Right column content</h1>
                </div>
            </div>
        </DottedBackground>
    );
};

export default Hero;