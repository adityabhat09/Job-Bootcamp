import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import DottedBackground from '../components/DottedBackground';

const CoursePage = () => {
    const { slug } = useParams(); // e.g. 'mern', 'mean'
    const [course, setCourse] = useState(null);

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
        <div className="pt-20 pb-10  max-w-full mx-auto">


            {/* ✅ Hero Section with Dotted Background */}
            <DottedBackground className="min-h-[300px] py-30 text-center bg-gray-900">
                {/* <div className="text-center  p-8 rounded-2xl shadow mb-10"> */}
                    <h1 className="text-8xl font-bold text-pink-600 pb-8">{course.name}</h1>
                    <p className="mt-4 text-white text-lg font-semibold max-w-2xl mx-auto">
                        {course.description}
                    </p>
                {/* </div> */}
            </DottedBackground>


            {/* ✅ Curriculum Heading */}
            <section>
                <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-[#B51D74] inline-block pb-1 mb-6">
                    Curriculum
                </h2>

                {/* 🧩 Curriculum Modules (Optional Placeholder) */}
                {course.modules && course.modules.length > 0 ? (
                    <div className="space-y-6">
                        {course.modules.map((mod, idx) => (
                            <div key={idx} className="p-4 border rounded-lg shadow-sm hover:shadow-md transition">
                                <h3 className="text-xl font-bold text-[#B51D74]">{mod.title}</h3>
                                <p className="mt-2 text-gray-700">{mod.description}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500">Modules coming soon.</p>
                )}
            </section>
        </div>
    );
};

export default CoursePage;
