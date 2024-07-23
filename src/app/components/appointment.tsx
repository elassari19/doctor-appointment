'use client';
import React from 'react';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import TimePicker from 'react-time-picker';
import 'react-datepicker/dist/react-datepicker.css';

const appointmentSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  phone: Yup.string().required('Phone number is required'),
  preferredDate: Yup.date().required('Preferred date is required'),
  preferredTime: Yup.string().required('Preferred time is required'),
});

const Appointment = () => {
  const handleSubmit = (values: any, e: any) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to server
    console.log(values);
  };

  return (
    <Formik
      initialValues={{
        name: '',
        phone: '',
        preferredDate: new Date(),
        preferredTime: '',
      }}
      validationSchema={appointmentSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, values, setFieldValue }) => (
        <Form className="space-y-4">
          <div className="flex gap-4">
            <div className="form-groupw-full">
              <label className="text-base font-light" htmlFor="name">
                Full Name
              </label>{' '}
              <br />
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="David John"
                className="border border-green-600 bg-transparent rounded-lg p-2"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="form-groupw-full">
              <label className="text-base font-light" htmlFor="phone">
                Phone
              </label>{' '}
              <br />
              <Field
                type="text"
                id="phone"
                name="phone"
                placeholder="David John"
                className="border border-green-600 bg-transparent rounded-lg p-2"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="text-red-500"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="form-groupw-full">
              <label className="text-base font-light" htmlFor="preferredDate">
                Preferred Date
              </label>{' '}
              <br />
              <DatePicker
                selected={values.preferredDate}
                onChange={(date) => setFieldValue('preferredDate', date)}
                showDateSelect
                timeCaption="Date"
                dateFormat="yyyy-MM-dd"
                className="border border-green-600 bg-transparent rounded-lg p-2"
              />
            </div>

            <div className="w-full">
              <label className="text-base font-light" htmlFor="preferredTime">
                Preferred Time
              </label>{' '}
              <br />
              <DatePicker
                selected={values.preferredDate}
                onChange={(date) => setFieldValue('preferredTime', date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
                className="border border-green-600 bg-transparent rounded-lg p-2"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="cursor-pointer bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Appointment;
