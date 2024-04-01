import * as yup from 'yup';

export const validation = yup.object({
  name: yup.string().trim().required('Name is required'),
  jobTitle: yup.string().trim().required('Desired Job Title is required'),
  aboutMe: yup.string().trim().required('The field About Me is required'),
});
