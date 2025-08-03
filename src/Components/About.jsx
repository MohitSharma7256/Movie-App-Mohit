import React from "react";
import { FaReact, FaGithub, FaImdb } from "react-icons/fa";
import { SiTailwindcss, SiThemoviedatabase } from "react-icons/si";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-zinc-800 text-zinc-200 px-6 py-12 flex flex-col items-center">
      <div className="max-w-4xl w-full">
        <div className="flex items-center gap-3">
          <i
            onClick={() => navigate("/")}
            className="ri-arrow-left-line text-2xl hover:text-[#6556CC] cursor-pointer"
          ></i>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
          About <span className="text-rose-500">Movie-Web</span>{" "}
          <span className="text-sm text-zinc-400">|| MOHIT</span>
        </h1>

        <p className="text-center text-zinc-400 mb-10 text-lg">
          Your one-stop platform for movie discovery and exploration.
        </p>

        <div className="bg-zinc-700/60 rounded-xl shadow-md p-6 space-y-6 backdrop-blur">
          <p className="text-base md:text-lg leading-relaxed">
            <span className="text-rose-400 font-medium">Movie-Web</span> is a
            sleek and responsive web application built to help you explore
            movies, TV shows, and trending entertainment. It fetches real-time
            data using{" "}
            <span className="inline-flex items-center gap-1 font-medium text-sky-400">
              <SiThemoviedatabase /> TMDB API
            </span>{" "}
            and delivers a clean UI powered by{" "}
            <span className="inline-flex items-center gap-1 font-medium text-cyan-400">
              <SiTailwindcss /> Tailwind CSS
            </span>{" "}
            and{" "}
            <span className="inline-flex items-center gap-1 font-medium text-blue-400">
              <FaReact /> React
            </span>
            .
          </p>

          <p className="text-base md:text-lg leading-relaxed">
            It provides trailers, cast info, and trending content in a seamless
            and mobile-friendly experience. Perfect for cinephiles and casual
            viewers alike.
          </p>

          <div className="bg-zinc-600/40 p-4 rounded-md">
            <p className="text-sm md:text-base leading-relaxed">
              Designed & Developed by{" "}
              <span className="text-rose-400 font-semibold">Mohit Sharma</span>{" "}
              as part of a personal passion for UI/UX and real-world web apps.
              Connect with me on:
            </p>

            <div className="flex gap-4 mt-3 text-xl">
              <a
                href="https://github.com/MohitSharma7256"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.themoviedb.org/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
              >
                <SiThemoviedatabase />
              </a>
              <a
                href="https://reactjs.org/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
              >
                <FaReact />
              </a>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-zinc-500 mt-10">
          © {new Date().getFullYear()} Movie-Web | Built with 💙 by Mohit
        </p>
      </div>
    </div>
  );
}

export default About;
