'use client';

import { motion } from "framer-motion";
import PerlinCanvas from "../../components/PerlinBackground";

export default function ContactPage() {
  return (
    <>
      <PerlinCanvas colorA="#004B49" colorB="#A7DBD8" speed={0.05} />
      <motion.main 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
        className="flex min-h-screen flex-col items-center justify-center p-8 text-white"
      >
        <section className="max-w-3xl mx-auto py-24 px-8 text-center">
          <motion.h1 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl font-bold text-white mb-10"
          >Get in Touch</motion.h1>
          <motion.p 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl text-yellow-400 mb-16 leading-relaxed"
          >
            Feel free to reach out on either my Twitter, Instagram, Github or contact section below. If you are a recruiter, please include a salary.
          </motion.p>

          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-black/60 rounded-lg shadow-lg p-10 mb-16 backdrop-blur-sm"
          >
            <h2 className="text-4xl font-semibold text-white mb-8">Contact Information</h2>
            <div className="space-y-6 text-xl text-yellow-400">
                 <p>
                <strong>Twitter:</strong> <a href="https://x.com/0mniforms" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition-colors duration-300">0mniforms</a>
              </p>
                 <p>
                <strong>Instagram:</strong> <a href="https://www.instagram.com/zoneinon/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition-colors duration-300">ZoneInOn</a>
              </p>
              <p>
                <strong>GitHub:</strong> <a href="https://github.com/Omniforms" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition-colors duration-300">Omniforms</a>
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-black/60 rounded-lg shadow-lg p-10 backdrop-blur-sm"
          >
            <h2 className="text-4xl font-semibold text-white mb-8">Send a Message</h2>
            <form className="space-y-8 text-left">
              <div>
                <label htmlFor="name" className="block text-xl font-medium text-yellow-400 mb-3">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="w-full px-5 py-3 border border-gray-light rounded-md focus:outline-none focus:ring-2 focus:ring-white bg-black text-white text-lg"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xl font-medium text-yellow-400 mb-3">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="w-full px-5 py-3 border border-gray-light rounded-md focus:outline-none focus:ring-2 focus:ring-white bg-black text-white text-lg"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xl font-medium text-yellow-400 mb-3">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={6} 
                  className="w-full px-5 py-3 border border-gray-light rounded-md focus:outline-none focus:ring-2 focus:ring-white bg-black text-white text-lg"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit" 
                className="w-full bg-black text-white px-8 py-4 rounded-md text-xl font-semibold hover:bg-gray-dark transition duration-300 ease-in-out shadow-lg"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </section>
      </motion.main>
    </>
  );
}