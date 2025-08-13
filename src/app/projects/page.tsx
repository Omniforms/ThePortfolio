'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import PerlinCanvas from "../../components/PerlinBackground";
import hydra from "../assets/hydra.png";

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Operation Hydra",
      description: "The GitHub-native framework for spawning ephemeral environments on your own infrastructure - cloned from QA or DEV and destroyed on your terms. Like the mythical Hydra, each environment is a head. It can spin up environments, test, and be severed safely. Multiple heads = multiple environments. Resilient, powerful, a force multiplier for any dev workflow. (Work in progress)",
      technologies: ["GitHub Actions", "CLI", "Python", "Node.js", "React"],
      image: hydra,
      link: "#",
    },
    {
      id: 2,
      title: "To Be Confirmed",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      technologies: ["TBC", "TBC", "TBC", "TBC"],
      image: "/art/b.jpg", // Placeholder image
      link: "#", // Replace with actual project link
    },
    {
      id: 3,
      title: "To Be Confirmed",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      technologies: ["TBC", "TBC", "TBC", "TBC"],
      image: "/art/c.jpg", // Placeholder image
      link: "#", // Replace with actual project link
    },
    {
      id: 4,
      title: "To Be Confirmed",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      technologies: ["TBC", "TBC", "TBC", "TBC"],
      image: "/art/d.jpg", // Placeholder image
      link: "#", // Replace with actual project link
    },
  ];

  return (
    <>
      <PerlinCanvas colorA="#001f3f" colorB="#7FDBFF" speed={0.05} />
      <motion.main 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
        className="flex min-h-screen flex-col items-center p-8 text-white"
      >
        <section className="max-w-6xl mx-auto py-24 px-8">
          <motion.h1 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl font-bold text-white text-center mb-16"
          >My Projects</motion.h1>
          <motion.p 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl text-yellow-400 mb-16"
          >
            Unfortunately outside of work i do not get as much time as i'd like to create the many projects lodged inside my brain - below are a few projects that i have either worked on are am currently working on.
          </motion.p>
          <motion.p 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl text-yellow-400 mb-16"
          >
          </motion.p>
          <motion.p 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-2xl text-yellow-400 mb-16"
          >
          </motion.p>
          <motion.p 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-2xl text-yellow-400 mb-16"
          >
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16">
            {projects.map((project, i) => (
              <motion.div 
                key={project.id} 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 + i * 0.2 }}
                className="bg-black/60 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 backdrop-blur-sm"
              >
                <Image src={project.image} alt={project.title} className="w-full h-80 object-cover" width={500} height={500} />
                <div className="p-10">
                  <h2 className="text-4xl font-semibold text-white mb-4">{project.title}</h2>
                  <p className="text-yellow-400 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="bg-black text-yellow-400 text-md px-4 py-2 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link href={project.link}>
                    <p className="text-white hover:underline font-medium text-xl">
                      View Details &rarr;
                    </p>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </motion.main>
    </>
  );
}