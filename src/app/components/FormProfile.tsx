'use client';

import React, { useState } from 'react';
import { useFormik } from 'formik';
import { validation } from '../lib/validation';

interface FormProfile {
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}
const FormProfile = ({ setSuccess }: FormProfile) => {
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      jobTitle: '',
      aboutMe: '',
    },
    validationSchema: validation,
    onSubmit: (e) => {
      const profile = { name: e.name, jobTitle: e.jobTitle, aboutMe: e.aboutMe };
      localStorage.setItem('profile', JSON.stringify(profile));
      setMessage('Form submitted successfully!');
      setSubmitted(true);
      e.name = '';
      e.jobTitle = '';
      e.aboutMe = '';
      setSuccess(true);
    },
  });

  return (
    <div className="flex flex-col justify-center items-center">
      <div className={`alert alert-primary ${submitted ? '' : 'hidden'}`} role="alert">
        {message}
      </div>
      <form className="w-1/3 bg-slate-50 rounded-xl" onSubmit={formik.handleSubmit}>
        <div className="m-3">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="...name"
            className=" rounded border-2 border-slate-400 text-black p-2 w-full outline-none"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name && (
            <div className="text-red-500 text-sm">{formik.errors.name}</div>
          )}
        </div>
        <div className="m-3">
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            placeholder="...desired job title"
            className=" rounded border-2 border-slate-400 text-black p-2 w-full outline-none"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.jobTitle}
          />
          {formik.touched.jobTitle && formik.errors.jobTitle && (
            <div className="text-red-500 text-sm">{formik.errors.jobTitle}</div>
          )}
        </div>
        <div className="m-3">
          <textarea
            id="aboutMe"
            name="aboutMe"
            placeholder="...about me"
            className=" rounded border-2 border-slate-400 text-black p-2 w-full outline-none"
            rows={4}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.aboutMe}
          />
          {formik.touched.aboutMe && formik.errors.aboutMe && (
            <div className="text-red-500 text-sm">{formik.errors.aboutMe}</div>
          )}
        </div>
        <div className="m-3">
          <button
            type="submit"
            className="bg-purple-400 text-white rounded-xl hover:bg-purple-600 transition-all py-2 px-4 w-full  "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormProfile;
