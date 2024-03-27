import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">
          About Me
        </h1>
        <div className="flex items-center mt-4 gap-4">
          <img
            src="/src/assets/images/mainpic.jpg"
            alt="Gaurav Negi"
            className="w-48 h-48"
          />
          <p className="text-lg text-gray-600 dark:text-white">
            Welcome to my fitness journey!
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Instagram */}
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center hover:scale-105 transition-transform duration-300 dark:bg-slate-600">
            <FaInstagram className="text-4xl text-pink-600 mr-4 dark:text-white" />
            <div>
              <h2 className="text-xl font-bold mb-2">Instagram</h2>
              <p className="text-gray-700 dark:text-white">
                Follow me on Instagram for daily fitness inspiration!
              </p>
              <a
                href="https://www.instagram.com/bhrtsnegi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 mt-2 flex items-center"
              >
                <span>View Profile</span>
                <FaExternalLinkAlt className="ml-1" />
              </a>
            </div>
          </div>
          {/* LinkedIn */}
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center hover:scale-105 transition-transform duration-300 dark:bg-slate-600">
            <FaLinkedin className="text-4xl text-blue-600 mr-4 dark:text-white" />
            <div>
              <h2 className="text-xl font-bold mb-2">LinkedIn</h2>
              <p className="text-gray-700 dark:text-white">
                Connect with me on LinkedIn for professional networking.
              </p>
              <a
                href="https://www.linkedin.com/in/bhrtsnegi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 mt-2 flex items-center"
              >
                <span>View Profile</span>
                <FaExternalLinkAlt className="ml-1" />
              </a>
            </div>
          </div>
          {/* Personal Portfolio */}
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center hover:scale-105 transition-transform duration-300 dark:bg-slate-600">
            <FaExternalLinkAlt className="text-4xl text-purple-600 mr-4 dark:text-white" />
            <div>
              <h2 className="text-xl font-bold mb-2">Personal Portfolio</h2>
              <p className="text-gray-700 dark:text-white">
                Explore my personal portfolio to see my projects and skills.
              </p>
              <a
                href="https://bhrtsnegi.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 mt-2 flex items-center"
              >
                <span>Visit Portfolio</span>
                <FaExternalLinkAlt className="ml-1" />
              </a>
            </div>
          </div>
          {/* GitHub */}
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center hover:scale-105 transition-transform duration-300 dark:bg-slate-600">
            <FaGithub className="text-4xl text-gray-900 mr-4 dark:text-white" />
            <div>
              <h2 className="text-xl font-bold mb-2">GitHub</h2>
              <p className="text-gray-700 dark:text-white">
                Check out my GitHub repositories for more of my work.
              </p>
              <a
                href="https://github.com/bhrtsnegi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 mt-2 flex items-center"
              >
                <span>View GitHub</span>
                <FaExternalLinkAlt className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
