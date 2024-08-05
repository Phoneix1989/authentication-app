import React, { useState } from 'react';

const OTP: React.FC = () => {
  const [otp, setOtp] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle OTP verification logic here
    console.log('OTP:', otp);
  };

  return (
    <div className="bg-white p-8 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Enter OTP</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
            OTP
          </label>
          <input
            type="text"
            id="otp"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white rounded-md py-2 px-4 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
        >
          Verify OTP
        </button>
      </form>
    </div>
  );
};

export default OTP;