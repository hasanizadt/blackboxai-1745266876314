'use client';

import { useState } from 'react';

export default function Login() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Call backend GraphQL mutation to login user and get JWT
    alert('ورود با موفقیت انجام شد.');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800 p-4">
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">ورود کاربر</h2>
        <label className="block mb-4">
          ایمیل
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
          />
        </label>
        <label className="block mb-6">
          رمز عبور
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
          />
        </label>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition-colors"
        >
          ورود
        </button>
      </form>
    </div>
  );
}
