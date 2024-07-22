'use client';

import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';

export const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: 'benson1@gmail.com',
      password: '',
    },
    validationSchema,
    onSubmit: (values: any) => {
      // Handle form submission with values.e.g., send login request
      console.log('Submitting form:', values);
    },
  });

  return (
    <div className="container mx-auto max-w-sm p-8 rounded-md shadow-md bg-white">
      <h1 className="text-2xl font-medium text-center mb-4">Welcome back</h1>
      <p className="text-gray-600 text-center mb-8">
        You can search courses, apply, and find scholarships for abroad studies.
      </p>

      <form onSubmit={formik.handleSubmit} className="mb-8">
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            {...formik.getFieldProps('email')}
            className={`w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 ${
              formik.touched.email && formik.errors.email
                ? 'border-red-500'
                : ''
            }`}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-xs mt-1">
              {formik.errors.email as string}
            </div>
          ) : null}
        </div>
        <div className="mb-6 relative">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Password
          </label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            {...formik.getFieldProps('password')}
            className={`w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 ${
              formik.touched.password && formik.errors.password
                ? 'border-red-500'
                : ''
            }`}
          />
          <span
            className={`password-toggle absolute cursor-pointer right-3 top-50% -translate-y-1/2 ${
              showPassword ? 'text-blue-500' : 'text-gray-400'
            }`}
            onClick={handlePasswordToggle}
          >
            {showPassword ? '️' : ''}
          </span>
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500 text-xs mt-1">
              {formik.errors.password as string}
            </div>
          ) : null}
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white font-medium py-2 rounded-md hover:bg-green-700 focus:outline-none"
        >
          Sign in
        </button>
      </form>
      <div className="text-center">
        <Link href="forget-password" className="text-green-600 hover:underline">
          Forgot password?
        </Link>
      </div>
      {/*  */}
      <div className="mt-4 text-center">
        <span className="text-gray-500">Don't have an account?</span>
        <Link href="sign-up" className="text-green-600 hover:underline">
          Join us
        </Link>
      </div>
    </div>
  );
};
