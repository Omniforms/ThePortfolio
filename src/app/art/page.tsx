'use client';

import { motion } from "framer-motion";
import PerlinCanvas from "../../components/PerlinBackground";

export default function ArtPage() {
  return (
    <>
      <PerlinCanvas colorA="#002F5F" colorB="#5FDDE7" speed={0.05} />
      <motion.main 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
        className="flex min-h-screen flex-col items-center p-8 text-white"
      >
        <section className="max-w-5xl mx-auto py-24 px-8 w-full">
          <motion.h1 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl font-bold text-white mb-16 text-center"
          >My Art Gallery</motion.h1>

          <motion.p 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl text-yellow-400 text-center mb-16 leading-relaxed"
          >
            I have always found passion in art. It serves as a way to express my thoughts and feelings and is an escape from the hussle and bussle of every day work life. Below is my Instagram feed, be sure to follow!
          </motion.p>

          {/* Elfsight Instagram Feed Embed */}
          <div className="w-full h-auto flex justify-center items-center">
            <script src="https://elfsightcdn.com/platform.js" async></script>
            <div className="elfsight-app-9f5aeeb1-af1a-4362-bbdf-319215d64ce0" data-elfsight-app-lazy></div>
          </div>

          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center mt-24"
          >
            <p className="text-2xl text-yellow-400">
              New artworks are frequently added.
            </p>
          </motion.div>
        </section>
      </motion.main>
    </>
  );
}