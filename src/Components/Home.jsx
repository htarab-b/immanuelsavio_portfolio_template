import React from 'react'
import Typewriter from 'typewriter-effect'
import { motion } from 'framer-motion'
import HomePic from '../assets/Home.png'

function Home() {
  return (
    <div className="min-h-screen bg-slate-200 dark:bg-black text-black dark:text-white text-center lg:flex lg:pl-10" id='Home'>
      <div className="pt-24 lg:w-1/2 lg:text-right lg:pt-80">
        <motion.h3 
        initial = {{ x:-100, opacity:0 }}
        animate = {{ x:0, opacity:1 }}
        transition = {{ duration:0.5, delay:0 }}
        className="text-3xl lg:text-5xl">Hi! I am</motion.h3>
        <motion.h1
        initial = {{ x:-100, opacity:0 }}
        animate = {{ x:0, opacity:1 }}
        transition = {{ duration:0.5, delay:0.2 }}
        className="text-5xl lg:text-8xl mt-3 lg:mt-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Immanuel Savio</span></motion.h1>
        <h3 className="text-xl lg:text-3xl mt-1">
          <Typewriter
              options={{
                  strings: ["ML Engineer", "AI Scientist", "I work with Data"],
                  autoStart: true,
                  loop: true,
                  typeSpeed: 5000, // adjust this value to make typing faster
                  backSpeed: 5000, // adjust this value to make erasing faster
              }}
          />
        </h3>
      </div>
      <motion.div
      initial = {{ x:100, opacity:0 }}
      animate = {{ x:0, opacity:1 }}
      transition = {{ duration:1, delay:0 }}
      className="lg:w-1/2">
        <img src={HomePic} className="w-fit lg:w-9/12 lg:mt-20 lg:ml-10" />
      </motion.div>
    </div>
  )
}

export default Home
