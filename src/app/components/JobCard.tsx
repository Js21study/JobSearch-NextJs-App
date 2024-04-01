import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Like from './elements/Like';

interface JobCardProps {
  id: string;
  title: string;
  description: string;
  imgUrl: string;
  detailButton: boolean;
  city?: string;
  country?: string;
  state?: string;
  employerName?: string;
  jobType?: string | null;
}

export const JobCard = ({
  id,
  title,
  description,
  imgUrl,
  detailButton,
  city,
  country,
  state,
  employerName,
  jobType,
}: JobCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  const likedJobsFromLS = () => {
    const data = localStorage.getItem('liked');
    return JSON.parse(data || '[]');
  };
  const likedJobs = likedJobsFromLS();
  const isInArray = likedJobs.some((job: { id: string }) => job.id === id);
  useEffect(() => {
    if (isInArray) {
      setIsLiked(true);
    }
  }, [isInArray]);

  return (
    <div className=" h-full  rounded-xl group p-4 bg-slate-50">
      <div className="text-purple-950 rounded-b-xl mt-3 bg-[#181818]py-6 px-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex flex-col  justify-between items-center sm:block">
          <h5 className="text-xl font-semibold mb-2 ">{title}</h5>
          <p className={`text-[#2f3030] mb-2 ${detailButton ? 'max-h-28 overflow-y-hidden' : ''}`}>
            {description}
          </p>
          <div onClick={() => setIsLiked(!isLiked)}>
            <Like id={id} isLiked={isLiked} />
          </div>
        </div>
        <div className="flex flex-col items-center pl-5">
          <img src={imgUrl} alt={title} className="rounded" />
          {employerName && <span className="text-blue-700 font-bold ">{employerName}</span>}
          {city && <span className="text-slate-700 font-bold ">{city}</span>}
          {country && <span className="text-slate-700  ">{country}</span>}
          {state && <span className="text-slate-700  ">{state}</span>}
          {jobType && <span className="text-slate-700 ">{jobType}</span>}
          {detailButton && (
            <Link href={`/job-details/${id}`}>
              <button className="rounded-xl bg-purple-300 text-black mt-2 p-2 w-36 hover:scale-105 transition-all">
                Detail →
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
