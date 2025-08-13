'use client';

import { motion } from "framer-motion";
import PerlinCanvas from "../../components/PerlinBackground";

export default function AboutPage() {
  return (
    <>
      <PerlinCanvas colorA="#004080" colorB="#40E0D0" speed={0.05} />
      <motion.main 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
        className="flex min-h-screen flex-col items-center justify-center p-8 text-white"
      >
        <section className="max-w-4xl mx-auto text-center py-24 px-8 bg-black/60 rounded-lg backdrop-blur-sm">
          <motion.h1 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl font-bold text-white mb-8"
          >About Me</motion.h1>
          <motion.p 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl text-yellow-400 mb-12"
          >
            A passionate software engineer based in London, soon to be replaced by AI.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-16 text-left mt-16">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-4xl font-semibold text-white mb-6">My Journey</h2>
              <p className="text-xl text-white leading-relaxed mb-6">
                It took me a long time to really find passion in software - thus this isn't a section to boast and pretend i am a heavensent angel that will solve your problems. I realised after my first few jobs that the most enjoyable projects were the ones that solved problems i personally experienced.
              </p>
              <p className="text-xl text-white leading-relaxed">
                In the world of AI, original thoughts are all that we are left with. With a wide range of experiences building the infrastructure for multimillion dollar businesses, building sustainable, long living software has and always will be my goal. Problem solving is our forte, after all.
              </p>
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-4xl font-semibold text-white mb-6">Skills & Expertise</h2>
              <ul className="list-disc list-inside text-xl text-yellow-400 space-y-3">
                <li>Languages: - C# Dotnet, C, Zig, Python, Java, HTML, CSS, Javascript, Typescript</li>
                <li>Frameworks/Libraries: React, Next.js, Node.js, Three.js, Express, Tailwind CSS, Framer Motion</li>
                <li>Tools & Platforms: Git, GitHub, VS Code, npm, Docker</li>
                <li>Concepts: Cloud Technologies(AWS, GCP), Microservices, Component Based Architecture, RESTful API's, State Management</li>
              </ul>
              <p className="text-xl text-white leading-relaxed mt-8">
                Beyond coding, i am also an artist. I am a big advocate for picking a craft outside of your job and painting is mine. I love both digital and traditional mediums, and would like to one day create an artbook of all my favourite art pieces.
              </p>
            </motion.div>
          </div>
        </section>
      </motion.main>
    </>
  );
}