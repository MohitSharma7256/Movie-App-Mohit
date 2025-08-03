import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZTExNWI3NWQ0MWE1OGM1MDQyZjk4NzVlODk5OTMxYiIsIm5iZiI6MTc1MDYyNDE2Mi4zNDgsInN1YiI6IjY4NTg2N2EyYjM4M2QwZWMzYzM5OGY1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Sy1TTM6zgNDN2iDNMGzCwvNsaRW-mrTAZEN3DytI-_0",
  },
});


export default instance;
