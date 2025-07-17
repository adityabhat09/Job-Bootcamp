import { useState } from 'react';

export default function BookWebinarModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
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

        {/* Form fields */}
        <form className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-base font-medium text-[#C63687] mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full p-4 border border-gray-300 rounded-lg placeholder-gray-400 text-base"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-base font-medium text-[#C63687] mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full p-4 border border-gray-300 rounded-lg placeholder-gray-400 text-base"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-800 text-white font-semibold py-4 rounded-lg text-lg transition-colors"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
}
