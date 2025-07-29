// SuccessStories.jsx
import React from 'react';
import success1 from '../../images/success1.jpg';
import success2 from '../../images/success2.jpg';
import success3 from '../../images/success3.jpg';
import success4 from '../../images/success4.jpg';
import success5 from '../../images/success5.jpg';
import success6 from '../../images/success6.jpg';
import success7 from '../../images/success7.jpg'

const SuccessStories = () => {
    // Success stories data
    const stories = [
        {
            id: 1,
            name: "Swati Inje",
            course: "MEAN Stack Development",
            date: "Dec, 2023",
            testimonial: " The practical projects were especially helpful since they enabled me to use what I had learned in.... ",
            link: "https://www.justacademy.co/success-detail/swati-inje",
            company: "Amazon",
            image: success1,
        },
        // {
        //     id: 2,
        //     name: "Tinku Yadav",
        //     course: "Flutter App Development",
        //     date: "Dec, 2023",
        //     testimonial: "One of the best decisions I've ever made for my profession is to enroll in the JustAcademy Flutter App...",
        //     link: "https://www.justacademy.co/success-detail/tinku-yadav",
        //     company: "Microsoft",
        //     image: success2,
        // },
        // {
        //     id: 3,
        //     name: "Bharat",
        //     course: "Flutter App Development",
        //     date: "Dec, 2023",
        //     testimonial: "I am beyond impressed with the quality of education and the overall learning experience. The course...",
        //     link: "https://www.justacademy.co/success-detail/bharat",
        //     company: "Ola",
        //     image: success3,
        // },
        // {
        //     id: 4,
        //     name: "Deepa Shetty",
        //     course: "Python",
        //     date: "Dec, 2023",
        //     testimonial: "Avinash Shukla, our instructor, demonstrated a profound understanding of Python and its applications...",
        //     link: "https://www.justacademy.co/success-detail/deepa-shetty",
        //     company: "Google",
        //     image: success4,
        // },
        // {
        //     id: 5,
        //     name: "Shalini Maurya",
        //     course: "Android App Development",
        //     date: "Dec, 2023",
        //     testimonial: "What sets JustAcademy apart is its commitment to excellence. The support from Tejas Gupta and the...",
        //     link: "https://www.justacademy.co/success-detail/shalini-maurya",
        //     company: "Flipkart",
        //     image: success5,
        // },
        {
            id: 6,
            name: "Sagar Mane",
            course: "React JS",
            date: "Jan, 2024",
            testimonial: "The practical experience gained from the assignments and projects served to reinforce the theoretical... ",
            link: "https://www.justacademy.co/success-detail/sagar-mane",
            company: "Netflix",
            image: success6,
        },
        {
            id: 7,
            name: "Aditya Bhat",
            course: "React JS",
            date: "Dec, 2023",
            testimonial: "If you’re looking to dive into frontend development, I highly recommend the React Js course at JustAcademy... ",
            link: "https://www.justacademy.co/success-detail/sagar-mane",
            company: "Netflix",
            image: success7,
        }
    ];

    return (
        <section className="success-stories py-16 bg-gray-50">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                        <span className="text-emerald-600">Success</span> Stories
                    </h2>
                    <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Hear from our alumni who transformed their careers and achieved their dream roles in top tech companies
                    </p>
                </div>

                {/* Stats Banner */}
                <div className="bg-gradient-to-r from-emerald-500 to-emerald-900 rounded-2xl p-6 mb-16 flex flex-col md:flex-row justify-around items-center shadow-lg">
                    <div className="text-center mb-6 md:mb-0">
                        <div className="text-4xl font-bold text-white">100%</div>
                        <p className="text-gray-100">Project based Learning</p>
                    </div>
                    <div className="text-center mb-6 md:mb-0">
                        <div className="text-4xl font-bold text-white">100%</div>
                        <p className="text-gray-100">Placement/Internship assistance</p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-white">10-15 yrs</div>
                        <p className="text-gray-100">Industry Experienced Faculties</p>
                    </div>
                </div>

                {/* Stories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {stories.map((story) => (
                        <div
                            key={story.id}
                            className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 flex flex-col"
                        >
                            {/* Certificate Photo */}
                            <div className="relative h-auto bg-gradient-to-r  flex items-center justify-center px-2 py-2 ">
                                <div className="   w-full h-56 bg-white rounded-lg shadow-lg flex items-center justify-center">
                                    {/* <div className="w-full h-52 bg-gradient-to-r from-emerald-600 to-[#8a1556] rounded-lg flex items-center justify-center text-white text-4xl font-bold"> */}
                                    <img src={story.image} alt={story.name} className="w-full h-full object-cover rounded-lg" />
                                    {/* </div> */}
                                </div>
                                {/* <div className="absolute bottom-0 w-full h-8 bg-gradient-to-t from-white to-transparent"></div> */}
                            </div>

                            {/* Student Info */}
                            <div className="p-6 pt-4 relative flex flex-col flex-1">
                                {/* <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <div className="w-14 h-14 bg-emerald-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{story.company.charAt(0)}</span>
                  </div>
                </div> */}

                                <div className="text-center mb-4">
                                    <h3 className="text-2xl font-bold text-gray-900">{story.name}</h3>
                                    <p className="text-emerald-600 font-semibold">{story.course}</p>
                                    <p className="text-gray-500 text-sm mt-1">{story.date}</p>
                                </div>

                                {/* Testimonial Excerpt */}
                                <div className="relative my-6 p-4 bg-gray-50 rounded-lg border-l-4 border-emerald-600">
                                    {/* <div className="absolute -top-4 left-4 text-emerald-600 text-3xl">“</div> */}
                                    <p className="text-gray-700">
                                        {story.testimonial}
                                    </p>
                                </div>

                                {/* Read More Button */}
                                <div className="mt-auto pt-6 text-center">
                                    <a
                                        href={story.link}
                                        className="inline-block bg-white border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white font-medium py-2 px-6 rounded-full transition-all duration-300"
                                    >
                                        Read Full Story
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="w-full mt-16">
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="https://www.justacademy.co/success"
                            className="basis-full md:basis-[calc(50%-0.5rem)] bg-emerald-600 hover:bg-emerald-900 text-white font-bold py-4 px-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
                        >
                            View All Success Stories
                        </a>

                        <a
                            href="https://www.justacademy.co/student-placed"
                            className="basis-full md:basis-[calc(50%-0.5rem)] bg-emerald-600 hover:bg-emerald-900 text-white font-bold py-4 px-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
                        >
                            View Placements
                        </a>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default SuccessStories;