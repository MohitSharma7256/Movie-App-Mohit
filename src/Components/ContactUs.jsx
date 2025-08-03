import React from "react";
import { FaGithub, FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function ContactUs() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-zinc-800 text-zinc-200 px-6 py-12 flex flex-col items-center">
      <div className="max-w-3xl w-full">
        <div className="flex items-center gap-3">
          <i
            onClick={() => navigate("/")}
            className="ri-arrow-left-line text-2xl hover:text-[#6556CC] cursor-pointer"
          ></i>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
          Contact <span className="text-rose-500">Us</span>
        </h1>
        <p className="text-center text-zinc-400 mb-10 text-lg">
          We'd love to hear from you! Get in touch with us through any of the
          following ways.
        </p>

        <div className="bg-zinc-700/60 rounded-xl shadow-md p-6 backdrop-blur space-y-6">
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-rose-400 text-xl" />
            <span className="text-base">ms1361277@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <FaPhone className="text-green-400 text-xl" />
            <span className="text-base">+91 72560 63776</span>
          </div>
          <div className="flex items-center gap-4">
            <FaGithub className="text-gray-300 text-xl" />
            <a
              href="https://github.com/MohitSharma7256"
              target="_blank"
              rel="noreferrer"
              className="hover:underline hover:text-white"
            >
              GitHub: MohitSharma7256
            </a>
          </div>
          <div className="flex items-center gap-4">
            <FaLinkedin className="text-sky-400 text-xl" />
            <a
              href="https://www.linkedin.com/in/mohit-sharma-6704522b6"
              target="_blank"
              rel="noreferrer"
              className="hover:underline hover:text-white"
            >
              LinkedIn: Mohit Sharma
            </a>
          </div>
        </div>

        <p className="text-center text-sm text-zinc-500 mt-10">
          © {new Date().getFullYear()} Movie-Web | Built with 💙 by Mohit
        </p>
      </div>
    </div>
  );
}

export default ContactUs;
