'use client';
import FormProfile from '@/app/components/FormProfile';
import { profile } from '@/app/lib/localStorage';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const CreateProfilePage = () => {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!!profile) {
      setSuccess(true);
      const jobTitle = profile.jobTitle;
      const searchVal = { search: jobTitle };
      localStorage.setItem('search', JSON.stringify(searchVal));
    } else {
      setSuccess(false);
    }
  }, [profile, success]);

  return (
    <div className="min-h-screen mt-32">
      {!!profile && success ? (
        <div className="py-10">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-800 text-5xl text-center pb-10">
            {profile.name}
          </p>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-400 text-2xl text-center pb-10">
            {profile.jobTitle}
          </p>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-purple-200 text-xl text-center pb-10">
            {profile.aboutMe}
          </p>
          <Link href="/jobs">
            <div className="flex justify-center ">
              <button className="rounded-xl bg-purple-300 text-black mt-2 p-2 w-36 hover:scale-105 transition-all">
                Jobs for you {'>'}
              </button>
            </div>
          </Link>
        </div>
      ) : (
        <>
          <div className="flex justify-center py-10">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-800 text-5xl ">
              Create your profile!
            </span>
          </div>
          <FormProfile setSuccess={setSuccess} />
        </>
      )}
    </div>
  );
};

export default CreateProfilePage;
