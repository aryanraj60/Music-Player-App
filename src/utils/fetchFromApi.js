const BASE_URL = "https://shazam.p.rapidapi.com";

const options = {
  //   params: {
  //     maxResults: "50",
  //   },
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY,
    "X-RapidAPI-Host": "shazam.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const response = await fetch(`${BASE_URL}/${url}`, options);
  const data = await response.json();

  return data;
};
