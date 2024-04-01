'use client';
const profileDatafromLS = localStorage.getItem('profile');
export const profile = profileDatafromLS && JSON.parse(profileDatafromLS);
