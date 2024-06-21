import React from 'react'
import { motion } from 'framer-motion'

function Timeline_Academic() {
  return (
    <div className="bg-slate-200 dark:bg-black text-black dark:text-white text-center" id='Timeline'>
        <div className="container max-w-5xl py-12 mx-auto pt-24 lg:pl-32">
            <div className="grid gap-4 mx-4 sm:grid-cols-12">
                <motion.div
                initial={{ x:-100, opacity:0 }}
                whileInView={{ x:0, opacity:1 }}
                transition={{ duration:0.7, delay:0 }}
                className="col-span-12 sm:col-span-3">
                    <div className="text-center sm:text-left mb-14 before:block before:w-24 lg:before:w-44 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-gradient-to-r from-cyan-400 to-purple-600">
                        <h3 className="text-3xl lg:text-5xl font-semibold">Education</h3>
                        <p className="text-sm font-bold tracking-wider uppercase dark:text-gray-500 text-gray-400 pt-2">Academic Timeline</p>
                    </div>
                </motion.div>
                <div className="relative col-span-12 px-10 lg:px-24 space-y-6 sm:col-span-9">
                    <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 before:absolute before:top-2 before:bottom-0 before:w-0.5 before:-left-3 before:bg-gray-700 before:dark:bg-gray-300">
                        <motion.div 
                        initial={{ y:100, opacity:0 }}
                        whileInView={{ y:0, opacity:1 }}
                        transition={{ duration:0.5, delay:0 }}
                        className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-purple-600">
                            <h3 className="text-xl lg:text-2xl text-left font-semibold tracking-wide">Indiana University Bloomington</h3>
                            <time className="text-xs text-left tracking-wide uppercase dark:text-gray-500 text-gray-400">Aug 2021 - Dec 2022</time>
                            <p className="mt-3 text-justify pl-5">Master of Science (M.S.) in Data Science <br></br> Relevant Courses: Elements of AI, Computer Vision, Advanced Database Concepts, Statistics  </p>
                        </motion.div>
                        <motion.div 
                        initial={{ y:100, opacity:0 }}
                        whileInView={{ y:0, opacity:1 }}
                        transition={{ duration:0.5, delay:0.2 }}
                        className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-purple-600">
                            <h3 className="text-xl lg:text-2xl text-left font-semibold tracking-wide">Manipal Univeristy</h3>
                            <time className="text-xs text-left tracking-wide uppercase dark:text-gray-500 text-gray-400">Aug 2016 - May 2020</time>
                            <p className="mt-3 text-justify pl-5">Bachelor of Technology (B.Tech) in Computer Science and Engineering <br></br> Relevant courses: Deep Learning, Soft Computing, Database Systems, Data Analytics</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Timeline_Academic
