"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ProjectsData } from "@/asset/Data";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
}

const projects: Project[] = ProjectsData;

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
    <div className="flex flex-col md:flex-row min-h-screen bg-black text-white ">
      {/* Mobile Image Container */}
      <div className="md:hidden sticky top-0 h-[40vh] z-10 ">
        <div className="relative w-full h-full no-scrollbar">
          {projects
            .sort((a, b) => a.id - b.id)
            .map((project) => (
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
