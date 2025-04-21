'use client';

import { useState } from 'react';

export default function VerifyOtp() {
  const [otp, setOtp] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Call backend to verify OTP
    alert('OTP با موفقیت تایید شد.');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800 p-4">
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">تأیید OTP</h2>
        <label className="block mb-4">
          کد OTP
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
            className="w-full mt-1 p-2 border rounded dark:bg-gray-700 dark:border-gray-600 text-center"
            maxLength={6}
          />
        </label>
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded transition-colors"
        >
          تأیید
        </button>
      </form>
    </div>
  );
}
