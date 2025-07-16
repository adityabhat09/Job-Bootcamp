import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import DottedBackground from '../components/DottedBackground';
import { Plus, Minus } from 'lucide-react';
import LogoSlider from '../components/LogoSlider';
import PlacementBenefits from '../components/PlacementBenefits';
import PlacementBenefits2 from '../components/PlacementBenefits2';
import FAQAccordion from '../components/FAQAccordion';


const CoursePage = () => {
    const { slug } = useParams(); // e.g. 'mern', 'mean'
    const [course, setCourse] = useState(null);
    const [expandedModules, setExpandedModules] = useState({});


    useEffect(() => {
        axios
            .get(`/api/courses/${slug}`)
            .then((res) => setCourse(res.data))
            .catch((err) => console.error('Error fetching course:', err));
    }, [slug]);

    if (!course) {
        return (
            <div className="min-h-screen flex items-center justify-center text-gray-500">
                Loading...
            </div>
        );
    }

    return (
        <div className="pt-20 pb-10 max-w-full mx-auto">
            <DottedBackground className="min-h-[300px] py-30 text-center bg-gray-900">
                <h1 className="text-8xl font-bold text-pink-600 pb-8">{course.name}</h1>
                <p className="mt-4 text-white text-lg font-semibold max-w-2xl mx-auto">
                    {course.description}
                </p>
            </DottedBackground>

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

                    <div className="space-y-4">
                        {course.modules?.length > 0 ? (
                            course.modules.map((mod, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100"
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
                                        <h3 className="text-lg font-semibold text-gray-900">
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
                                                        <span className="w-2 h-2 bg-[#C63687] rounded-full mr-3"></span>
                                                        {topic}
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
            <div className="max-w-full mx-10 px-2 sm:px-6 lg:px-8 mt-15 mb-10 text-center">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                    <span className='text-[#C63687]'>JustAcademy</span> Students get hired in
                </h1>
            </div>
            <LogoSlider/>


            {/* placement benefits component */}
            <PlacementBenefits/>


            {/* benefits beyond learning component */}
            <PlacementBenefits2/>


            {/* faq component */}
            <FAQAccordion faqs={course.faqs} />

        </div>
    );

};

export default CoursePage;
