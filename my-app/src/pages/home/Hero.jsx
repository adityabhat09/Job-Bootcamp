import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { CheckCircle, Send, Loader, AlertTriangle } from 'lucide-react';
import DottedBackground from '../../components/DottedBackground';
import ReCAPTCHA from 'react-google-recaptcha';

// This is a placeholder for your DottedBackground component.
// Make sure this file exists in the correct directory.



const Hero = () => {
    // --- State Management & Refs for the Form ---
    const form = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState('idle'); // 'idle', 'sending', 'success', 'error'

    // --- EmailJS Configuration ---
    // Using the same credentials you provided earlier
    const SERVICE_ID = 'service_opmzybd';
    const TEMPLATE_ID = 'template_wv116ka';
    const PUBLIC_KEY = 'zL-QIZHE2XqwI-1MF';

    // --- Form Validation ---
    const validate = () => {
        let tempErrors = {};
        if (!formData.name.trim()) tempErrors.name = 'Name is required.';
        if (!formData.email.trim()) {
            tempErrors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = 'Email is invalid.';
        }
        if (!formData.phone.trim()) {
            tempErrors.phone = 'Phone number is required.';
        } else if (!/^\d{10}$/.test(formData.phone)) {
            tempErrors.phone = 'Phone number must be 10 digits.';
        }
        if (!formData.message.trim()) tempErrors.message = 'Message is required.';

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    


    // --- Input Change Handler ---
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };



    // captcha cheeze
    const [captchaToken, setCaptchaToken] = useState(null);
    const handleCaptcha = (token) => {
        setCaptchaToken(token);
    };

    // --- Form Submission Handler ---
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) {
            return;
        }
        
        if (!captchaToken) {     //captcha logic
            alert('Please complete the CAPTCHA');
            return;
        }

        setStatus('sending');
        setErrors({});

        // --- Prepare Template Parameters ---
        // We add a source identifier to the message
        const templateParams = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: `Reaching out from the Job Bootcamp page.\n${formData.message}`,
        };

        // --- Send Email via EmailJS ---
        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setStatus('success');
                setFormData({ name: '', email: '', phone: '', message: '' }); // Clear form
                setTimeout(() => setStatus('idle'), 5000); // Reset after 5 seconds
            }, (err) => {
                console.error('FAILED...', err);
                setStatus('error');
                setTimeout(() => setStatus('idle'), 5000); // Reset after 5 seconds
            });
    };

    return (
        <DottedBackground className="h-full pb-8 bg-gray-900" >
            <div className="pt-28 flex h-full flex-col md:flex-row" id="contact">

                {/* Left Column */}
                <div className="w-full md:w-1/2 h-full flex items-center justify-center px-6 md:px-12">
                    <div className="max-w-3xl text-left space-y-8">
                        <p className="text-emerald-500 font-medium text-lg">Restricted by opportunities?</p>

                        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                            Get the tech career<br />you deserve. <span className="text-white/90">Faster.</span>
                        </h1>

                        {/* Points Section */}
                        <div className="space-y-6 pt-8">
                            <div className="flex items-start gap-6 bg-white/5 px-6 py-8 rounded-xl">
                                <CheckCircle className="text-emerald-500 w-6 h-6 mt-1 flex-shrink-0" />
                                <p className="text-white text-lg">
                                    <span className="font-semibold">128% average hike</span> via our placement cell
                                </p>
                            </div>
                            <div className="flex items-start gap-6 bg-white/5 px-6 py-8 rounded-xl">
                                <CheckCircle className="text-emerald-500 w-6 h-6 mt-1 flex-shrink-0" />
                                <p className="text-white text-lg">
                                    <span className="font-semibold">1.5 Lac+ learners</span> cracked top tech companies
                                </p>
                            </div>
                            <div className="flex items-start gap-6 bg-white/5 px-6 py-8 rounded-xl">
                                <CheckCircle className="text-emerald-500 w-6 h-6 mt-1 flex-shrink-0" />
                                <p className="text-white text-lg">
                                    <span className="font-semibold">1,400+ alumni in MAANG</span> & 103 unicorn startups
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ---------------------------------------------------- */}

                {/* Right Column (Form) */}
                <div className="w-full md:w-1/2 h-full flex items-center justify-center px-6 md:px-8 mt-16 md:mt-0">
                    <div className="w-full max-w-lg">
                        {/* --- UPDATED FORM TAG --- */}
                        <form ref={form} onSubmit={handleSubmit} noValidate className="bg-white rounded-3xl p-8 shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                            <h2 className="text-sm text-gray-500 pb-4">Let's find the right course for you</h2>
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Us</h2>

                            {/* Name Field */}
                            <div className="mb-6">
                                <label className="block text-base font-medium text-emerald-700 mb-3">Name</label>
                                <input
                                    type="text"
                                    name="name" // Added name attribute
                                    placeholder="Enter name"
                                    value={formData.name} // Controlled component
                                    onChange={handleChange} // Handle changes
                                    className={`w-full p-4 border rounded-lg placeholder-gray-400 text-base ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                                />
                                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                            </div>

                            {/* Phone Number Field */}
                            <div className="mb-6">
                                <label className="block text-base font-medium text-emerald-700 mb-3">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone" // Added name attribute
                                    placeholder="Enter 10-digit phone number"
                                    value={formData.phone} // Controlled component
                                    onChange={handleChange} // Handle changes
                                    className={`w-full p-4 border rounded-lg placeholder-gray-400 text-base ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                                />
                                {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                            </div>

                            {/* Email Field */}
                            <div className="mb-6">
                                <label className="block text-base font-medium text-emerald-700 mb-3">Email</label>
                                <input
                                    type="email"
                                    name="email" // Added name attribute
                                    placeholder="Enter email"
                                    value={formData.email} // Controlled component
                                    onChange={handleChange} // Handle changes
                                    className={`w-full p-4 border rounded-lg placeholder-gray-400 text-base ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                                />
                                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                            </div>

                            {/* Message Field */}
                            <div className="mb-8">
                                <label className="block text-base font-medium text-emerald-700 mb-3">Message</label>
                                <textarea
                                    name="message" // Added name attribute
                                    placeholder="Enter your message"
                                    rows="4"
                                    value={formData.message} // Controlled component
                                    onChange={handleChange} // Handle changes
                                    className={`w-full p-4 border rounded-lg placeholder-gray-400 text-base resize-none ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                                ></textarea>
                                <div className='flex justify-center pt-6'>
                                    <div >
                                    <ReCAPTCHA 
                                        sitekey="6Lf9-5IrAAAAAPBckCr_YscQUD0DLLxxfJdp9IiZ" // replace this with your actual site key
                                        onChange={handleCaptcha}
                                    />
                                    </div>
                                </div>
                                {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                            </div>


                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full bg-emerald-600 hover:bg-emerald-900 text-white font-semibold py-4 px-8 rounded-lg transition-colors text-lg flex items-center justify-center disabled:bg-gray-400 disabled:cursor-not-allowed"
                            >
                                {status === 'sending' ? (
                                    <>
                                        <Loader className="animate-spin mr-3 h-5 w-5" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send className="ml-3 h-5 w-5" />
                                    </>
                                )}
                            </button>

                            {/* --- Status Messages --- */}
                            {status === 'success' && (
                                <div className="mt-4 flex items-center text-green-600">
                                    <CheckCircle className="h-5 w-5 mr-2" />
                                    <p>Message sent successfully!</p>
                                </div>
                            )}
                            {status === 'error' && (
                                <div className="mt-4 flex items-center text-red-600">
                                    <AlertTriangle className="h-5 w-5 mr-2" />
                                    <p>Failed to send message. Please try again.</p>
                                </div>
                            )}
                        </form>
                    </div>
                </div>

            </div>
        </DottedBackground>
    );
};

export default Hero;
