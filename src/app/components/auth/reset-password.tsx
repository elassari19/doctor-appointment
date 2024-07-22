'use client';

import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { redirectedTo } from '../../../lib/server-actions';

export const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const validationSchema = Yup.object().shape({
    newPassword: Yup.string()
      .email('Password must be at least 6 characters')
      .required('newPassword is required'),
    reNewPassword: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('reNewPassword is required'),
  });

  const formik = useFormik({
    initialValues: {
      newPassword: '',
      reNewPassword: '',
    },
    validationSchema,
    onSubmit: (values: any) => {
      // Handle form submission with values.e.g., send login request
      console.log('Submitting form:', values);
      redirectedTo('/reset-password');
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
          <input
            type="newPassword"
            id="newPassword"
            placeholder="New Password"
            {...formik.getFieldProps('newPassword')}
            className={`w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 ${
              formik.touched.newPassword && formik.errors.newPassword
                ? 'border-red-500'
                : ''
            }`}
          />
          {formik.touched.newPassword && formik.errors.newPassword ? (
            <div className="text-red-500 text-xs mt-1">
              {formik.errors.newPassword as string}
            </div>
          ) : null}
        </div>
        <div className="mb-6 relative">
          <input
            type={showPassword ? 'text' : 'password'}
            id="reNewPassword"
            placeholder="Re-enter New Password"
            {...formik.getFieldProps('reNewPassword')}
            className={`w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 ${
              formik.touched.reNewPassword && formik.errors.reNewPassword
                ? 'border-red-500'
                : ''
            }`}
          />
          <span
            className={`reNewPassword-toggle absolute cursor-pointer right-3 top-50% -translate-y-1/2 ${
              showPassword ? 'text-blue-500' : 'text-gray-400'
            }`}
            onClick={handlePasswordToggle}
          >
            {showPassword ? '️' : ''}
          </span>
          {formik.touched.reNewPassword && formik.errors.reNewPassword ? (
            <div className="text-red-500 text-xs mt-1">
              {formik.errors.reNewPassword as string}
            </div>
          ) : null}
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white font-medium py-2 rounded-md hover:bg-green-700 focus:outline-none"
        >
          Update Password
        </button>
      </form>
    </div>
  );
};
