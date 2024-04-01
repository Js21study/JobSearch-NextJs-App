'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { JobCard } from '@/app/components/JobCard';
import SearchComponent from '@/app/components/SearchComponent';
import { cardVariants } from '@/app/lib/animation/JobCardAnimations';
import { Job } from '@/app/@types';
import { getJobData } from '@/app/api';
import LottieImage from '@/app/lib/LottieImage';
import LoadingLottie from '../../assets/json/loadingLotti.json';

const JobsPage = () => {
  const ref = useRef(null);
  const [jobs, setJobs] = useState<Job[]>();
  const [isSearchChanged, setSearchChanged] = useState(false);
  const searchfromLS = localStorage.getItem('search');
  const search = searchfromLS && JSON.parse(searchfromLS);
  const searchValue = search?.search;
  useEffect(() => {
    const fetchData = async () => {
      const options = getJobData(!!searchValue ? searchValue : 'front-end');
      try {
        const res = await axios.request(options);
        const data: Job[] = res.data.data;
        setJobs(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [searchValue, searchValue.length, isSearchChanged]);
  const handleSearchChanged = (value: boolean) => {
    setSearchChanged(value);
  };

  return (
    <section className="container mx-auto p-4 sm:px-12 mt-32 ">
      <SearchComponent setSearchChanged={handleSearchChanged} searchChanged={isSearchChanged} />
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
            <LottieImage image={LoadingLottie} />
          </div>
        )}
      </ul>
    </section>
  );
};

export default JobsPage;
