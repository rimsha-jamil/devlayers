import React from 'react';

const ContactCard = () => {
  return (
    <div className="w-full sm:w-[500px] min-h-[520px] p-6 sm:p-8 bg-white rounded-xl shadow-lg space-y-6">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl font-semibold text-black">Let's Talk</h2>

      {/* Full Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Full Name
        </label>
        <input
          type="text"
          placeholder="Name"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          placeholder="Example@domain.com"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          rows={4}
          placeholder="Tell us about your project..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md resize-y focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>

      {/* Button */}
      <button className="w-full bg-[#1d4ed8] text-white py-3 rounded-md hover:bg-blue-700 transition-colors duration-300 cursor-pointer">
        Send message
      </button>
    </div>
  );
};

export default ContactCard;
