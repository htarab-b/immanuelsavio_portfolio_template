import React from 'react'
import { motion } from 'framer-motion'

function About() {
  return (
    <div className="min-h-screen bg-slate-200 dark:bg-black text-black dark:text-white text-center" id='About'>
      <div className="pt-20 px-2 lg:pt-24">
        <motion.h1
          initial={{ opacity:0 }}
          whileInView={{ opacity:1 }}
          transition={{ duration:1, delay:0 }}
          className="text-4xl lg:text-6xl">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">About me</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity:0 }}
          whileInView={{ opacity:1 }}
          transition={{ duration:1, delay:0 }}
          className="text-lg lg:text-xl px-6 sm:px-16 py-4 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam atque assumenda magni inventore necessitatibus rem odit ut a, perspiciatis sapiente provident quos quaerat eius, unde quisquam maxime eligendi alias officiis!
          </motion.p>

        <motion.h1
          initial={{ opacity:0 }}
          whileInView={{ opacity:1 }}
          transition={{ duration:1, delay:0 }}
          className="text-4xl lg:text-6xl mt-5">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">What I do</span>
        </motion.h1>
        <div className="flex items-center justify-center w-full mt-6 lg:mt-4 sm:space-x-8">
          <motion.div
            initial={{ x:-100, opacity:0 }}
            whileInView={{ x:0, opacity:1 }}
            transition={{ duration:0.5, delay:0 }}
            className="flex items-center">
            <h1 className="text-xl lg:text-3xl font-semibold dark:text-cyan-400 text-purple-600">Machine Learning</h1>
          </motion.div>
          <motion.div
            initial={{ x:-100, opacity:0 }}
            whileInView={{ x:0, opacity:1 }}
            transition={{ duration:0.5, delay:0.2 }}
            className="flex items-center">
            <h1 className="text-xl lg:text-3xl font-semibold dark:text-cyan-400 text-purple-600">AI Engineering</h1>
          </motion.div>
          <motion.div
            initial={{ x:-100, opacity:0 }}
            whileInView={{ x:0, opacity:1 }}
            transition={{ duration:0.5, delay:0.4 }}
            className="flex items-center">
            <h1 className="text-xl lg:text-3xl font-semibold dark:text-cyan-400 text-purple-600">Data Science</h1>
          </motion.div>
          <motion.div
            initial={{ x:-100, opacity:0 }}
            whileInView={{ x:0, opacity:1 }}
            transition={{ duration:0.5, delay:0.6 }}
            className="flex items-center">
            <h1 className="text-xl lg:text-3xl font-semibold dark:text-cyan-400 text-purple-600">Analytics</h1>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About
