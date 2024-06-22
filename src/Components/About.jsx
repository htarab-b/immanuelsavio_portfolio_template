import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'
import Marquee from "react-fast-marquee";
import { useMediaQuery } from 'react-responsive';

// Icons
import tensorflow from '../assets/tensorflow.svg';
import flask from '../assets/flask.svg';
import java from '../assets/java.svg';
import mongodb from '../assets/mongodb.svg';
import r from '../assets/r.svg';
import python from '../assets/python.svg';

function About() {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 640px)' });
  const [speed, setSpeed] = useState(60);

  useEffect(() => {
    setSpeed(isSmallScreen ? 30 : 60);
  }, [isSmallScreen]);

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

        <div className="mt-10 sm:mt-16 lg:mt-10 flex items-center flex-wrap">
        <h2 className="text-4xl lg:text-6xl mt-5 mx-auto"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">My Tech Stack</span></h2>
        <div className="w-full mx-auto mt-2">
          <Marquee speed={speed} pauseOnHover>
            <div className="px-2 sm:px-8 lg:px-12">
              <img src={tensorflow} className="h-14 sm:h-16 lg:h-24" alt="Tensorflow" />
              <h3 className="text-center mt-1 text-xs sm:text-sm">Tensorflow</h3>
            </div>
            <div className="px-2 sm:px-8 lg:px-12">
              <img src={flask} className="h-14 sm:h-16 lg:h-24" alt="Flask" />
              <h3 className="text-center mt-1 text-xs sm:text-sm">Flask</h3>
            </div>
            <div className="px-2 sm:px-8 lg:px-12">
              <img src={java} className="h-14 sm:h-16 lg:h-24" alt="Java" />
              <h3 className="text-center mt-1 text-xs sm:text-sm">Java</h3>
            </div>
            <div className="px-2 sm:px-8 lg:px-12">
              <img src={mongodb} className="h-14 sm:h-16 lg:h-24" alt="MongoDB" />
              <h3 className="text-center mt-1 text-xs sm:text-sm">MongoDB</h3>
            </div>
            <div className="px-2 sm:px-8 lg:px-12">
              <img src={r} className="h-14 sm:h-16 lg:h-24" alt="R" />
              <h3 className="text-center mt-1 text-xs sm:text-sm">R</h3>
            </div>
            <div className="px-2 sm:px-8 lg:px-12">
              <img src={python} className="h-14 sm:h-16 lg:h-24" alt="Python" />
              <h3 className="text-center mt-1 text-xs sm:text-sm">Python</h3>
            </div>
          </Marquee>
        </div>
      </div>
      </div>
    </div>
  )
}

export default About
