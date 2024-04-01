'use client';

import { useEffect, useState } from 'react';
import { JobCard } from '@/app/components/JobCard';
import { getJobData } from '@/app/api';
import axios from 'axios';
import { Job } from '@/app/@types';
import LottieImage from '@/app/lib/LottieImage';
import LoadingLottie from '../../../assets/json/loadingLotti.json';
import { search } from '@/app/lib/localStorage';

const JobDetails = ({ params }: { params: { id: string } }) => {
  const [jobs, setJobs] = useState<Job[]>();
  const decodedID = decodeURIComponent(params.id.replace(/%3D%3D/g, '=='));

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
  }, [searchValue]);

  return (
    <section className="container mx-auto p-4 sm:px-12 mt-32 min-h-screen ">
      {jobs &&
        jobs.map(
          (job) =>
            job.job_id === decodedID && (
              <JobCard
                key={job?.job_id}
                id={job?.job_id}
                title={job.job_title}
                description={job.job_description}
                imgUrl={job.employer_logo}
                detailButton={false}
                city={job.job_city}
                country={job.job_country}
                state={job.job_state}
                employerName={job.employer_name}
                jobType={job.employer_company_type}
              />
            ),
        )}
      {!jobs && (
        <div className="w-1/2 mx-auto">
          <LottieImage image={LoadingLottie} />
        </div>
      )}
    </section>
  );
};

export default JobDetails;
