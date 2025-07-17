import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { User, Mail, Phone, MessageSquare, Send, Loader, CheckCircle, AlertTriangle } from 'lucide-react';

const ContactUs = () => {
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
  const SERVICE_ID = 'service_opmzybd';
  const TEMPLATE_ID = 'template_wv116ka';
  const PUBLIC_KEY = 'zL-QIZHE2XqwI-1MF'; // <-- IMPORTANT: Add your EmailJS Public Key here

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = 'Name is required.';
    if (!formData.email) {
      tempErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is invalid.';
    }
    if (!formData.phone) {
      tempErrors.phone = 'Phone number is required.';
    } else if (!/^\d{10}$/.test(formData.phone)) {
        tempErrors.phone = 'Phone number must be 10 digits.';
    }
    if (!formData.message) tempErrors.message = 'Message is required.';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Optional: validate on change after first submission attempt
    if (status !== 'idle') {
        validate();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }
    
    if (!PUBLIC_KEY || PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
        console.error("EmailJS Public Key is missing. Please add it to the component.");
        setStatus('error');
        return;
    }

    setStatus('sending');

    // The keys here (e.g., 'name', 'email') MUST match the variables in your EmailJS template.
    // E.g., {{name}}, {{email}}
    const templateParams = {
        name: formData.name,
        email: formData.email, // This sends the email to the {{email}} variable in your template
        phone: formData.phone,
        message: formData.message,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000); // Reset form status after 5 seconds
      }, (err) => {
        console.error('FAILED...', err);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000); // Reset form status after 5 seconds
      });
  };

  // Helper to get border color based on error state
  const getBorderColor = (fieldName) => {
      if (errors[fieldName]) return 'border-red-500';
      return 'border-gray-600';
  }

  return (
    <div className="bg-[#0f172a] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl" style={{ color: '#B81F77' }}>
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Have questions about our bootcamps? We'd love to hear from you.
          </p>
        </div>

        <div className="mt-12">
          <form ref={form} onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            {/* Name Field */}
            <div className="sm:col-span-1">
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`block w-full rounded-md border-2 bg-gray-800 py-3 px-4 pl-10 text-white focus:outline-none focus:ring-2 focus:ring-[#B81F77] focus:border-[#B81F77] transition ${getBorderColor('name')}`}
                  placeholder="John Doe"
                />
              </div>
              {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
            </div>

            {/* Email Field */}
            <div className="sm:col-span-1">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`block w-full rounded-md border-2 bg-gray-800 py-3 px-4 pl-10 text-white focus:outline-none focus:ring-2 focus:ring-[#B81F77] focus:border-[#B81F77] transition ${getBorderColor('email')}`}
                  placeholder="you@example.com"
                />
              </div>
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
            </div>
            
            {/* Phone Field */}
            <div className="sm:col-span-2">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">Phone Number</label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Phone className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`block w-full rounded-md border-2 bg-gray-800 py-3 px-4 pl-10 text-white focus:outline-none focus:ring-2 focus:ring-[#B81F77] focus:border-[#B81F77] transition ${getBorderColor('phone')}`}
                  placeholder="1234567890"
                />
              </div>
              {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
            </div>

            {/* Message Field */}
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
              <div className="relative">
                 <div className="pointer-events-none absolute top-3.5 left-0 flex items-center pl-3">
                  <MessageSquare className="h-5 w-5 text-gray-400" />
                </div>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className={`block w-full rounded-md border-2 bg-gray-800 py-3 px-4 pl-10 text-white focus:outline-none focus:ring-2 focus:ring-[#B81F77] focus:border-[#B81F77] transition ${getBorderColor('message')}`}
                  placeholder="Your inquiry about the courses..."
                ></textarea>
              </div>
              {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
            </div>

            {/* Submit Button & Status Message */}
            <div className="sm:col-span-2 flex flex-col items-center">
                <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-transparent bg-[#B81F77] px-8 py-3 text-base font-semibold text-white shadow-md hover:bg-[#9F1A65] focus:outline-none focus:ring-2 focus:ring-[#B81F77] focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 transform hover:scale-105 disabled:bg-gray-500 disabled:cursor-not-allowed"
                >
                    {status === 'sending' ? (
                        <>
                            <Loader className="animate-spin -ml-1 mr-3 h-5 w-5" />
                            Sending...
                        </>
                    ) : (
                        <>
                            Send Message
                            <Send className="ml-3 -mr-1 h-5 w-5" />
                        </>
                    )}
                </button>

                {status === 'success' && (
                    <div className="mt-4 flex items-center text-green-400">
                        <CheckCircle className="h-5 w-5 mr-2" />
                        <p>Message sent successfully! We'll be in touch soon.</p>
                    </div>
                )}
                {status === 'error' && (
                    <div className="mt-4 flex items-center text-red-500">
                        <AlertTriangle className="h-5 w-5 mr-2" />
                        <p>Something went wrong. Please check your details or try again later.</p>
                    </div>
                )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;