'use client';

import { useState } from 'react';

export default function Register() {
  const [form, setForm] = useState({
    email: '',
    password: '',
    name: '',
    phone: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Call backend GraphQL mutation to register user
    alert('ثبت نام با موفقیت انجام شد. لطفا OTP را تایید کنید.');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800 p-4">
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">ثبت نام کاربر</h2>
        <label className="block mb-2">
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
        <label className="block mb-2">
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
        <label className="block mb-2">
          نام
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
          />
        </label>
        <label className="block mb-4">
          شماره تلفن
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
          />
        </label>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition-colors"
        >
          ثبت نام
        </button>
      </form>
    </div>
  );
}
