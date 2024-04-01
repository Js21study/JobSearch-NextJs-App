const searchfromLS = localStorage.getItem('search');
export const search = searchfromLS && JSON.parse(searchfromLS);
