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
import FloatingNav from '../components/FloatingNav';
import ContactUs from '../components/ContactUs';

// import {Helmet}
// import { Helmet } from 'react-helmet-async';


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

    useEffect(() => {
        if (!course) return;

        // Update title
        document.title = course.metaTitle || course.name;

        // Meta Description
        let descTag = document.querySelector('meta[name="description"]');
        if (!descTag) {
            descTag = document.createElement('meta');
            descTag.setAttribute('name', 'description');
            document.head.appendChild(descTag);
        }
        if (descTag) {
            descTag.setAttribute('content', course.metaDescription || course.description || '');
        }

        // Meta Keywords
        let keywordsTag = document.querySelector('meta[name="keywords"]');
        if (!keywordsTag) {
            keywordsTag = document.createElement('meta');
            keywordsTag.setAttribute('name', 'keywords');
            document.head.appendChild(keywordsTag);
        }
        if (keywordsTag) {
            keywordsTag.setAttribute('content', (course.metaKeywords || []).join(','));
        }

    }, [course]);



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


    // for floating nav
    const sections = [
        // { id: 'about', label: 'About the course' },
        { id: 'curriculum', label: 'Curriculum' },
        { id: 'hire', label: 'Hires' },
        { id: 'benefits', label: 'Benefits' },
        // { id: 'plans', label: 'Plans' },
        { id: 'faqs', label: 'FAQs' },
        { id: 'contact', label: 'Contact Us' },
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
            {/* {course && (
                <Helmet>
                    <title>{course.metaTitle || course.name}</title>
                    <meta name="description" content={course.metaDescription || course.description} />
                    <meta name="keywords" content={(course.metaKeywords || []).join(',')} />
                </Helmet>
            )} */}


            {/* modal overlay sits above everything else */}
            <BookWebinarModal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
            />


            <div className="pt-20  max-w-full mx-auto">
                {/* --- REVISED HERO SECTION --- */}
                <DottedBackground className="py-12 md:py-16 lg:py-20 text-center bg-gray-900 mb-20">
                    <div className="max-w-4xl mx-auto px-4">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-emerald-500 leading-tight">
                            {course.name}
                        </h1>

                        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
                            {course.description}
                        </p>

                        {/* Feature Pills */}
                        <div className="mt-6 sm:mt-8 flex flex-wrap justify-center items-center gap-2 sm:gap-4">
                            {heroFeatures.map((feature, index) => (
                                <div key={index} className="flex items-center gap-2 bg-gray-800/50 border border-gray-700 text-gray-300 text-sm px-3 py-1.5 rounded-full">
                                    {feature.icon}
                                    <span>{feature.text}</span>
                                </div>
                            ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
                            <button className="bg-emerald-500 text-white font-semibold px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors w-full sm:w-auto">
                                Register Now
                            </button>

                            {/* on click will open book webinar modal */}
                            <button onClick={() => setModalOpen(true)} className="bg-transparent border-2 border-gray-500 text-white font-semibold px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors w-full sm:w-auto">
                                Book a Free Webinar
                            </button>
                        </div>

                        {/* Stats Section */}
                        <div className="mt-12 sm:mt-16 bg-gray-950/50 border border-gray-800 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl max-w-4xl mx-auto">
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

                <div className='py-5'></div>
                <FloatingNav sections={sections} /> {/* --- sections are defined above in const sections --- */}

                <section id="curriculum"></section>   {/* for floating nav scrolling */}
                <div className='py-10'></div>
                {/* Course Curriculum Accordion */}
                <section className=" py-4 bg-white">
                    <div className="max-w-full mx-10 px-2 sm:px-6 lg:px-8">
                        <div className="text-left mb-12">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 ">
                                Course <span className="text-emerald-700">Curriculum</span>
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
                                                <span className="text-emerald-700">
                                                    {(idx + 1).toString().padStart(2, '0')}.
                                                </span>{' '}
                                                {mod.title}
                                            </h3>
                                            {expandedModules[idx] ? (
                                                <Minus className="w-5 h-5 text-emerald-700" />
                                            ) : (
                                                <Plus className="w-5 h-5 text-emerald-700" />
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
                                                            <span className="w-2 h-2 bg-emerald-700 rounded-full mr-3 flex-shrink-0"></span>
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
                <section id='hire'>
                    <div className='py-10'></div>
                    <div className="max-w-full mx-10 px-2 sm:px-6 lg:px-8 mt-10 mb-24 text-center">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 ">
                            <span className='text-emerald-700'>JustAcademy</span> Students get hired in
                        </h1>
                    </div>
                </section>

                <LogoSlider />


                <div className='py-10'></div>
                {/* placement benefits component */}
                <section id="benefits">
                    <PlacementBenefits />
                </section>


                {/* benefits beyond learning component */}
                <section>
                    <PlacementBenefits2 />
                </section>


                {/* faq component */}
                <section id="faqs">
                    <div className='py-5'></div>
                    <FAQAccordion faqs={course.faqs} />
                </section>


                <section id="contact"></section>
                <div className='py-5'></div>
                {/* conatct us section */}
                <ContactUs />

            </div>
        </>
    );

};

export default CoursePage;