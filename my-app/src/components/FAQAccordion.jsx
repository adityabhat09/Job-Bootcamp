import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const FAQAccordion = ({ faqs }) => {
    const [openIndex, setOpenIndex] = useState(null)

    const toggle = (idx) => {
        setOpenIndex(openIndex === idx ? null : idx)
    }

    if (!faqs?.length) return null

    return (
        <section className="scroll-mt-16 py-12 sm:py-16 bg-white">
            <div className="max-w-full mx-10 px-2 sm:px-6 lg:px-8">
                <div className="text-left mb-12">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Frequently Asked <span className="text-emerald-700 ">Questions</span>
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 max-w-3xl">
                        Here are some common questions students ask about this bootcamp.
                    </p>
                </div>
                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100"
                        >
                            <button
                                onClick={() => toggle(idx)}
                                className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                            >
                                <h3 className="text-lg font-medium text-gray-900 text-left">
                                    {faq.question}
                                </h3>
                                <ChevronDown
                                    className={`w-5 h-5 text-emerald-700 transform transition-transform duration-200 ${openIndex === idx ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>

                            {openIndex === idx && (
                                <div className="px-6 py-4 bg-gray-50 text-gray-700">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FAQAccordion;