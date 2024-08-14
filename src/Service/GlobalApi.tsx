import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "8ed1b9cac9b842e127140f34bc45e331";

const getTrendingVideos = axios.get(
  `${movieBaseUrl}/trending/all/day?api_key=${api_key}`
);

export default { getTrendingVideos };
