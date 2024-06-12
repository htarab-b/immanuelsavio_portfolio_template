import React from 'react'
import { motion } from 'framer-motion'

function About() {
  return (
    <div className="min-h-screen bg-slate-200 dark:bg-black text-black dark:text-white text-center" id='About'>
      <div className=" pt-20 px-2 lg:pt-24">
        <motion.h1
        initial = {{ opacity:0 }}
        whileInView = {{ opacity:1 }}
        transition = {{ duration:1, delay:0 }}
        className="text-4xl lg:text-6xl"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">What I do</span></motion.h1>
        <div className="flex w-full mt-6 lg:mt-4 lg:py-5">
            <div className="flex items-center px-6 lg:px-40">
                <motion.h1
                initial = {{ x:-100, opacity:0 }}
                whileInView = {{ x:0, opacity:1 }}
                transition = {{ duration:0.5, delay:0 }}
                className="w-5/12 lg:w-1/3 text-2xl lg:text-5xl text-right pr-6 lg:pr-16 font-semibold dark:text-cyan-400 text-purple-600">Machine Learning</motion.h1>
                <motion.p
                initial = {{ x:100, opacity:0 }}
                whileInView = {{ x:0, opacity:1 }}
                transition = {{ duration:0.5, delay:0 }}
                className="w-7/12 lg:w-2/3 text-justify text-sm lg:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem minima aspernatur cumque dolorem explicabo, voluptatem temporibus distinctio fuga. Neque alias placeat aut ipsam odio optio explicabo eius amet minus maiores.</motion.p>
            </div>
        </div>
        <div className="flex w-full mt-6 lg:mt-3 lg:py-5">
            <div className="flex items-center px-6 lg:px-40">
                <motion.h1
                initial = {{ x:-100, opacity:0 }}
                whileInView = {{ x:0, opacity:1 }}
                transition = {{ duration:0.5, delay:0 }}
                className="w-5/12 lg:w-1/3 text-2xl lg:text-5xl text-right pr-6 lg:pr-16 font-semibold dark:text-cyan-400 text-purple-600">AI Engineering</motion.h1>
                <motion.p
                initial = {{ x:100, opacity:0 }}
                whileInView = {{ x:0, opacity:1 }}
                transition = {{ duration:0.5, delay:0 }}
                className="w-7/12 lg:w-2/3 text-justify text-sm lg:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem minima aspernatur cumque dolorem explicabo, voluptatem temporibus distinctio fuga. Neque alias placeat aut ipsam odio optio explicabo eius amet minus maiores.</motion.p>
            </div>
        </div>
        <div className="flex w-full mt-6 lg:mt-3 lg:py-5">
            <div className="flex items-center px-6 lg:px-40">
                <motion.h1
                initial = {{ x:-100, opacity:0 }}
                whileInView = {{ x:0, opacity:1 }}
                transition = {{ duration:0.5, delay:0 }}
                className="w-5/12 lg:w-1/3 text-2xl lg:text-5xl text-right pr-6 lg:pr-16 font-semibold dark:text-cyan-400 text-purple-600">Data Science</motion.h1>
                <motion.p
                initial = {{ x:100, opacity:0 }}
                whileInView = {{ x:0, opacity:1 }}
                transition = {{ duration:0.5, delay:0 }}
                className="w-7/12 lg:w-2/3 text-justify text-sm lg:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem minima aspernatur cumque dolorem explicabo, voluptatem temporibus distinctio fuga. Neque alias placeat aut ipsam odio optio explicabo eius amet minus maiores.</motion.p>
            </div>
        </div>
        <div className="flex w-full mt-6 lg:mt-3 lg:py-5">
            <div className="flex items-center px-6 lg:px-40">
                <motion.h1
                initial = {{ x:-100, opacity:0 }}
                whileInView = {{ x:0, opacity:1 }}
                transition = {{ duration:0.5, delay:0 }}
                className="w-5/12 lg:w-1/3 text-2xl lg:text-5xl text-right pr-6 lg:pr-16 font-semibold dark:text-cyan-400 text-purple-600">Analytics</motion.h1>
                <motion.p
                initial = {{ x:100, opacity:0 }}
                whileInView = {{ x:0, opacity:1 }}
                transition = {{ duration:0.5, delay:0 }}
                className="w-7/12 lg:w-2/3 text-justify text-sm lg:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem minima aspernatur cumque dolorem explicabo, voluptatem temporibus distinctio fuga. Neque alias placeat aut ipsam odio optio explicabo eius amet minus maiores.</motion.p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
