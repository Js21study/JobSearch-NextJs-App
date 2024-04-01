export const getJobByIdData = (id: string) => {
  const options = {
    method: 'GET',
    url: 'https://jsearch.p.rapidapi.com/job-details',
    params: {
      job_id: id,
      extended_publisher_details: 'false',
    },
    headers: {
      'X-RapidAPI-Key': '6d708e3bf9msh8aaa3a5e21d38c0p11280fjsndf5d06aebd96',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
    },
  };

  return options;
};
