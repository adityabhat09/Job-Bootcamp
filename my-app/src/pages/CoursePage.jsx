import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import DottedBackground from '../components/DottedBackground';
import { Plus, Minus, ShieldCheck, Cpu, Users, Award } from 'lucide-react'; // Added new icons
import LogoSlider from '../components/LogoSlider';
import PlacementBenefits from '../components/PlacementBenefits';
import PlacementBenefits2 from '../components/PlacementBenefits2';
import FAQAccordion from '../components/FAQAccordion';
import BookWebinarModal from '../components/BookWebinarModal';

const CoursePage = ({ onOpen }) => {
    const { slug } = useParams();
    const [course, setCourse] = useState(null);
    const [expandedModules, setExpandedModules] = useState({});
    const [isModalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        axios
            .get(`/api/courses/${slug}`)
            .then((res) => setCourse(res.data))
            .catch((err) => console.error('Error fetching course:', err));
    }, [slug]);

    // Static data for the hero section features and stats
    const heroFeatures = [
        { icon: <ShieldCheck size={16} />, text: 'Placement assistance' },
        { icon: <Cpu size={16} />, text: 'AI-infused curriculum' },
        { icon: <Users size={16} />, text: '1:1 mentorship' },
        { icon: <Award size={16} />, text: 'Faculty from MAANG' },
    ];

    const heroStats = [
        { value: '95%', label: 'Placement Rate' },
        { value: '1200+', label: 'Companies Hiring' },
        { value: '128%', label: 'Average Hike' },
        { value: '1.5 L+', label: 'Learners' },
    ];


    if (!course) {
        return (
            <div className="min-h-screen flex items-center justify-center text-gray-500">
                Loading...
            </div>
        );
    }

    return (
        <>
            {/* modal overlay sits above everything else */}
            <BookWebinarModal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
            />


            <div className="pt-20 pb-10 max-w-full mx-auto">
                {/* --- REVISED HERO SECTION --- */}
                <DottedBackground className="py-20 text-center bg-gray-900">
                    <div className="max-w-4xl mx-auto px-4">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-pink-600 leading-tight">
                            {course.name}
                        </h1>

                        <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
                            {course.description}
                        </p>

                        {/* Feature Pills */}
                        <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
                            {heroFeatures.map((feature, index) => (
                                <div key={index} className="flex items-center gap-2 bg-gray-800/50 border border-gray-700 text-gray-300 text-sm px-3 py-1.5 rounded-full">
                                    {feature.icon}
                                    <span>{feature.text}</span>
                                </div>
                            ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
                            <button className="bg-pink-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-pink-700 transition-colors w-full sm:w-auto">
                                Register Now
                            </button>

                            {/* on click will open book webinar modal */}
                            <button onClick={() => setModalOpen(true)} className="bg-transparent border-2 border-gray-500 text-white font-semibold px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors w-full sm:w-auto">
                                Book a Free Webinar
                            </button>
                        </div>

                        {/* Stats Section */}
                        <div className="mt-16 bg-gray-950/50 border border-gray-800 backdrop-blur-sm p-6 sm:p-8 rounded-2xl max-w-4xl mx-auto">
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-4">
                                {heroStats.map((stat, index) => (
                                    <div key={index} className="text-center">
                                        <p className="text-3xl sm:text-4xl font-bold text-white">{stat.value}</p>
                                        <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </DottedBackground>
                {/* --- END OF HERO SECTION --- */}


                {/* Course Curriculum Accordion */}
                <section id="curriculum" className="scroll-mt-16 py-12 sm:py-16 bg-white">
                    <div className="max-w-full mx-10 px-2 sm:px-6 lg:px-8">
                        <div className="text-left mb-12">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                                Course <span className="text-[#C63687]">Curriculum</span>
                            </h2>
                            <p className="text-base sm:text-lg text-gray-600 max-w-3xl">
                                A comprehensive curriculum designed to make you a professional developer
                            </p>
                        </div>

                        <div className="columns-1 lg:columns-2 gap-6">
                            {course.modules?.length > 0 ? (
                                course.modules.map((mod, idx) => (
                                    <div
                                        key={idx}
                                        className="break-inside-avoid mb-6 bg-white rounded-lg shadow-md overflow-hidden border border-gray-100"
                                    >
                                        <button
                                            onClick={() =>
                                                setExpandedModules((prev) => ({
                                                    ...prev,
                                                    [idx]: !prev[idx],
                                                }))
                                            }
                                            className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                                        >
                                            <h3 className="text-lg font-semibold text-gray-900 text-left">
                                                <span className="text-[#C63687]">
                                                    {(idx + 1).toString().padStart(2, '0')}.
                                                </span>{' '}
                                                {mod.title}
                                            </h3>
                                            {expandedModules[idx] ? (
                                                <Minus className="w-5 h-5 text-[#C63687]" />
                                            ) : (
                                                <Plus className="w-5 h-5 text-[#C63687]" />
                                            )}
                                        </button>

                                        {expandedModules[idx] && (
                                            <div className="px-6 py-4 bg-gray-50">
                                                <ul className="space-y-2">
                                                    {mod.topics?.map((topic, i) => (
                                                        <li
                                                            key={i}
                                                            className="flex items-center text-gray-700"
                                                        >
                                                            <span className="w-2 h-2 bg-[#C63687] rounded-full mr-3 flex-shrink-0"></span>
                                                            <span>{topic}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-500">Modules coming soon.</p>
                            )}
                        </div>
                    </div>
                </section>


                {/* company logo slider */}
                <div className="max-w-full mx-10 px-2 sm:px-6 lg:px-8 mt-15 mb-24 text-center">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        <span className='text-[#C63687]'>JustAcademy</span> Students get hired in
                    </h1>
                </div>
                <LogoSlider />

                <div className='py-10'></div>
                {/* placement benefits component */}
                <PlacementBenefits />


                {/* benefits beyond learning component */}
                <PlacementBenefits2 />


                {/* faq component */}
                <FAQAccordion faqs={course.faqs} />

            </div>
        </>
    );

};

export default CoursePage;