"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A fully responsive e-commerce platform built with Next.js and Tailwind CSS. Features include product listings, cart functionality, and secure checkout process.",
    imageUrl:
      "https://sm.ign.com/ign_in/image/t/the-top-25/the-top-25-greatest-anime-characters-of-all-time_fk9t.jpg",
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    liveUrl: "https://ecommerce-platform-demo.vercel.app",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A sleek task management application developed using React and Redux. Includes features like task creation, assignment, due dates, and progress tracking.",
    imageUrl:
      "https://sm.ign.com/ign_in/image/t/the-top-25/the-top-25-greatest-anime-characters-of-all-time_zjmz.jpg",
    githubUrl: "https://github.com/yourusername/task-management-app",
    liveUrl: "https://task-management-app-demo.vercel.app",
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    description:
      "An intuitive social media dashboard that aggregates data from various platforms. Built with Vue.js and D3.js for dynamic data visualization.",
    imageUrl:
      "https://sm.ign.com/ign_in/image/t/the-top-25/the-top-25-greatest-anime-characters-of-all-time_g9qk.jpg",
    githubUrl: "https://github.com/yourusername/social-media-dashboard",
    liveUrl: "https://social-media-dashboard-demo.vercel.app",
  },
  {
    id: 4,
    title: "Fitness Tracking App",
    description:
      "A comprehensive fitness tracking app developed with React Native. Features include workout logging, progress charts, and integration with wearable devices.",
    imageUrl:
      "https://sm.ign.com/ign_in/image/t/the-top-25/the-top-25-greatest-anime-characters-of-all-time_fb1n.jpg",
    githubUrl: "https://github.com/yourusername/fitness-tracking-app",
    liveUrl: "https://fitness-tracking-app-demo.vercel.app",
  },
];

export default function ProjectShowcase() {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectId = Number(
              entry.target.getAttribute("data-project-id")
            );
            const project = projects.find((p) => p.id === projectId);
            if (project) {
              setActiveProject(project);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-black text-white">
      {/* Mobile Image Container */}
      <div className="md:hidden sticky top-0 h-[40vh] z-10">
        <div className="relative w-full h-full">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`absolute inset-0 transition-opacity duration-500 ${
                project.id === activeProject.id ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="w-full md:w-1/2 overflow-y-auto no-scrollbar">
        {projects.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => {
              projectRefs.current[index] = el;
            }}
            data-project-id={project.id}
            className="min-h-[60vh] md:min-h-screen flex flex-col justify-center p-8 border-b border-gray-800"
          >
            <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
            <p className="text-lg mb-8 text-gray-300">{project.description}</p>
            <div className="flex space-x-4">
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              >
                GitHub
              </Link>
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded"
              >
                Live Demo
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Image Container */}
      <div className="hidden md:block w-1/2 bg-black sticky top-0 h-screen">
        <div className="relative w-full h-full p-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`absolute inset-0 transition-opacity duration-500 ${
                project.id === activeProject.id ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
