'use client';

import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { JobCard } from '@/app/components/JobCard';
import { motion } from 'framer-motion';
import { cardVariants } from '@/app/lib/animation/JobCardAnimations';
import { getJobData } from '@/app/api';
import { Job } from '@/app/@types';
import LottieImage from '@/app/lib/LottieImage';
import Loading from '../../assets/json/loadingLotti.json';

const LikedPage = () => {
  const [jobs, setJobs] = useState<Job[]>();

  const searchfromLS = localStorage.getItem('search');
  const search = searchfromLS && JSON.parse(searchfromLS);
  const searchValue = search?.search;
  const ref = useRef(null);
  const likedJobsFromLS = () => {
    const data = localStorage.getItem('liked');
    return JSON.parse(data || '[]');
  };

  useEffect(() => {
    const fetchData = async () => {
      const options = getJobData(!!searchValue ? searchValue : 'front-end');
      try {
        const res = await axios.request(options);
        const data: Job[] = res.data.data;
        const likedJobs = [];
        for (const jobObj of data) {
          const jobId = jobObj.job_id;
          const matchingIdObject = likedJobsFromLS().find(
            (idObj: { id: string }) => idObj.id === jobId,
          );

          if (matchingIdObject) {
            likedJobs.push(jobObj);
          }
        }
        setJobs(likedJobs);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [searchValue]);
  return (
    <section className="container mx-auto p-4 sm:px-12 mt-32 min-h-screen ">
      <ul ref={ref} className="grid gap-8 ">
        {!!jobs &&
          jobs.map((job, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <JobCard
                key={job.job_id}
                id={job.job_id}
                title={job.job_title}
                description={job.job_description}
                imgUrl={job.employer_logo}
                detailButton={true}
              />
            </motion.li>
          ))}
        {!jobs && (
          <div className="w-1/2 mx-auto">
            <LottieImage image={Loading} />
          </div>
        )}
      </ul>
    </section>
  );
};

export default LikedPage;
