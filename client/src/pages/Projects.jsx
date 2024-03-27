import React from "react";

const Projects = () => {
  // Example project data
  const projects = [
    {
      name: "Project 1",
      description: "I will update later.",
      link: "https://example.com/project1",
      techStack: "HTML, CSS, JavaScript",
    },
    {
      name: "Project 2",
      description: "I will update later",
      link: "https://example.com/project2",
      techStack: "React, Node.js, Express",
    },
    // Add more projects as needed
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto ">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6 dark:text-white">
          My Projects
        </h1>
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 mb-6 hover:scale-105 transition-transform duration-300 dark:bg-slate-700"
          >
            <h2 className="text-xl font-bold mb-2">{project.name}</h2>
            <p className="text-gray-700 dark:text-white mb-4">
              {project.description}
            </p>
            <p className="text-gray-700 dark:text-white mb-2">
              <strong>Tech Stack:</strong> {project.techStack}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
