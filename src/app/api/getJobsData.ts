export const getJobData = (query: string) => {
  const options = {
    method: 'GET',
    url: 'https://jsearch.p.rapidapi.com/search',
    params: {
      query: query.length > 0 ? query : 'Python developer in Texas, USA',
      page: '1',
      num_pages: '1',
    },
    headers: {
      'X-RapidAPI-Key': '6d708e3bf9msh8aaa3a5e21d38c0p11280fjsndf5d06aebd96',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
    },
  };

  return options;
};
