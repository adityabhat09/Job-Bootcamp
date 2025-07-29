import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function BookWebinarModal({ isOpen, onClose }) {
    const form = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: 'I am reaching out from Job Bootcamp site and I am interested in the free webinar.' // Default message
    });
    const [isSending, setIsSending] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const sendEmail = (e) => {
        e.preventDefault(); // Prevents the default form submission behavior (page reload)
        setIsSending(true);

        emailjs.sendForm(
            'service_opmzybd',      // Your Service ID
            'template_wv116ka',     // Your Template ID
            form.current,           // Form element reference
            'zL-QIZHE2XqwI-1MF'       // Your Public Key
        ).then(
            (result) => {
                console.log('SUCCESS!', result.text);
                alert('Booking confirmed! We have sent you a confirmation email.');
                setIsSending(false);
                onClose(); // Close the modal on success
            },
            (error) => {
                console.log('FAILED...', error.text);
                alert('Failed to confirm booking. Please try again.');
                setIsSending(false);
            }
        );
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/50">
            <div className="relative w-full max-w-md bg-white rounded-2xl p-8 shadow-lg">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl cursor-pointer"
                >
                    ✕
                </button>

                {/* Header text */}
                <h2 className="text-sm text-gray-500 mb-1">
                    Let’s schedule your live webinar
                </h2>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    Book Your Seat
                </h3>

                {/* Form */}
                {/* Add ref and onSubmit to the form tag */}
                <form ref={form} onSubmit={sendEmail} className="space-y-5">
                    {/* Name */}
                    <div>
                        <label className="block text-base font-medium text-emerald-600 mb-2">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="name" // Matches {{name}} in your template
                            placeholder="Your name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full p-4 border border-gray-300 rounded-lg placeholder-gray-400 text-base"
                        />
                    </div>

                    {/* Phone Number */}
                    <div>
                        <label className="block text-base font-medium text-emerald-600 mb-2">
                            Phone Number
                        </label>
                        <input
                            type="tel" // Use "tel" for phone numbers
                            name="phone" // Matches {{phone}} in your template
                            placeholder="Your phone no."
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            className="w-full p-4 border border-gray-300 rounded-lg placeholder-gray-400 text-base"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-base font-medium text-emerald-600 mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email" // Matches {{email}} in your template
                            placeholder="you@example.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full p-4 border border-gray-300 rounded-lg placeholder-gray-400 text-base"
                        />
                    </div>

                    {/* Hidden Message Field */}
                    <input
                        type="hidden"
                        name="message" // Matches {{message}} in your template
                        value={formData.message}
                    />

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isSending}
                        className="w-full bg-emerald-600 hover:bg-emerald-800 text-white font-semibold py-4 rounded-lg text-lg transition-colors disabled:bg-gray-400"
                    >
                        {isSending ? 'Booking...' : 'Confirm Booking'}
                    </button>
                </form>
            </div>
        </div>
    );
}