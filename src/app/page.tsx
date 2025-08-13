'use client';


import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ErrorBoundary from "../components/ErrorBoundary";
import PerlinCanvas from "../components/PerlinBackground";
import ThreeScene from "../components/ThreeScene";
import hydra from "./assets/hydra.png";
import me from "./assets/me.png";

export default function Home() {
  return (
    <motion.main 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
      className="relative min-h-screen flex flex-col items-center justify-center text-text overflow-hidden"
    >
      {/* Perlin Background */}
      <div className="absolute inset-0 z-0">
        <ErrorBoundary>
          <PerlinCanvas colorA="#00CED1" colorB="#000080" speed={0.05} />
        </ErrorBoundary>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center p-8">
        {/* Hero Section */}
        <motion.section 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center py-24 px-8 max-w-5xl bg-black/60 rounded-lg shadow-lg backdrop-blur-sm mb-24"
        >
          <Image src={me} alt="me" className="w-32 h-32 rounded-full mx-auto mb-8" />
          <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            So, who are you?
          </h1>
          <p className="text-2xl md:text-3xl text-yellow-400 mb-10">
            A passionate software engineer who blends my passion for art with technical projects that solve real world problems
          </p>
          <Link href="/projects">
            <motion.p 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-10 py-4 rounded-full text-xl font-semibold hover:bg-gray-dark transition duration-300 ease-in-out inline-block shadow-lg"
            >
              View My Work
            </motion.p>
          </Link>
        </motion.section>

        {/* About Me Snippet */}
        <motion.section 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          id="about" 
          className="py-24 px-8 max-w-4xl text-center bg-black/60 rounded-lg shadow-lg backdrop-blur-sm mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-8 pb-6 border-b-2 border-gray-light inline-block px-10">About Me</h2>
          <p className="text-xl text-yellow-400 leading-relaxed mb-6">
            While its probably easier to ask GPT to generate this, that's not my style. I'm an experienced software engineer knowledgeable in cloud technologies and microservice architecture to solve complex problems
          </p>
          <p className="text-xl text-yellow-400 leading-relaxed">
            Beyond engineering, I am a passionate artist that explores landscape paintings and visual storytelling. This portfolio is a reflection of both my technical skills and artistic passions
          </p>
          <Link href="/about">
            <p className="text-white hover:underline mt-8 inline-block text-xl font-medium">
              Learn More About My Journey &rarr;
            </p>
          </Link>
        </motion.section>

        {/* Featured Projects Section */}
        <section 
          className="py-24 px-8 w-full max-w-5xl bg-black/60 rounded-lg shadow-lg backdrop-blur-sm" 
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-white text-center mb-16 pb-6 border-b-2 border-gray-light inline-block px-10">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Project Card 1 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-black/60 rounded-lg shadow-lg overflow-hidden transform transition duration-300 backdrop-blur-sm"
            >
              <Image src={hydra} alt="Hydra" className="w-full h-56 object-cover" />
              <div className="p-8">
                <h3 className="text-3xl font-semibold text-white mb-4">Operation Hydra</h3>
                <p className="text-yellow-400 mb-6">The GitHub-native framework for spawning ephemeral environments on your own infrastructure - cloned from QA or DEV and destroyed on your terms. (Work in progress)</p>
                <Link href="/projects">
                  <p className="text-white hover:underline font-medium text-lg">View Project &rarr;</p>
                </Link>
              </div>
            </motion.div>

            {/* Project Card 2 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-black/60 rounded-lg shadow-lg overflow-hidden transform transition duration-300 backdrop-blur-sm"
            >
              <img src="/art/f.jpg" alt="Project 2" className="w-full h-56 object-cover" />
              <div className="p-8">
                <h3 className="text-3xl font-semibold text-white mb-4">To Be Confirmed</h3>
                <p className="text-yellow-400 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="bg-gray-700 text-white text-xs px-2 py-1 rounded">TBC</span>
                  <span className="bg-gray-700 text-white text-xs px-2 py-1 rounded">TBC</span>
                  <span className="bg-gray-700 text-white text-xs px-2 py-1 rounded">TBC</span>
                  <span className="bg-gray-700 text-white text-xs px-2 py-1 rounded">TBC</span>
                </div>
                <Link href="/projects">
                  <p className="text-white hover:underline font-medium text-lg">View Project &rarr;</p>
                </Link>
              </div>
            </motion.div>

            {/* Project Card 3 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-black/60 rounded-lg shadow-lg overflow-hidden transform transition duration-300 backdrop-blur-sm"
            >
              <img src="/art/g.jpg" alt="Project 3" className="w-full h-56 object-cover" />
              <div className="p-8">
                <h3 className="text-3xl font-semibold text-white mb-4">To Be Confirmed</h3>
                <p className="text-yellow-400 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="bg-gray-700 text-white text-xs px-2 py-1 rounded">TBC</span>
                  <span className="bg-gray-700 text-white text-xs px-2 py-1 rounded">TBC</span>
                  <span className="bg-gray-700 text-white text-xs px-2 py-1 rounded">TBC</span>
                  <span className="bg-gray-700 text-white text-xs px-2 py-1 rounded">TBC</span>
                </div>
                <Link href="/projects">
                  <p className="text-white hover:underline font-medium text-lg">View Project &rarr;</p>
                </Link>
              </div>
            </motion.div>
          </div>
          <div className="text-center mt-16">
            <Link href="/projects">
              <motion.p 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-10 py-4 rounded-full text-xl font-semibold hover:bg-gray-dark transition duration-300 ease-in-out inline-block shadow-lg"
              >
                See All Projects
              </motion.p>
            </Link>
          </div>
        </section>
      </div>
    </motion.main>
  );
}