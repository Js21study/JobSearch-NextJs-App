export const likedJobsFromLS = () => {
  const data = localStorage.getItem('liked');
  return JSON.parse(data || '[]');
};
