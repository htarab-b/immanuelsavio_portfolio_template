import React from 'react'
import { motion } from 'framer-motion'

function Timeline_Professional() {
  return (
    <div className="min-h-screen bg-slate-200 dark:bg-black text-black dark:text-white text-center">
        <div className="container max-w-5xl py-12 mx-auto pt-24 lg:pl-32">
            <div className="grid gap-4 mx-4 sm:grid-cols-12">
                <motion.div
                initial = {{ x:-100, opacity:0 }}
                whileInView = {{ x:0, opacity:1 }}
                transition = {{ duration:0.7, delay:0 }}
                className="col-span-12 sm:col-span-3">
                    <div className="text-center sm:text-left mb-14 before:block before:w-24 lg:before:w-44 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-gradient-to-r from-cyan-400 to-purple-600">
                        <h3 className="text-3xl lg:text-5xl font-semibold">Experience</h3>
                        <p className="text-sm font-bold tracking-wider uppercase dark:text-gray-500 text-gray-400 pt-2">Professional Timeline</p>
                    </div>
                </motion.div>
                <div className="relative col-span-12 px-10 lg:px-24 space-y-6 sm:col-span-9">
                    <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 before:absolute before:top-2 before:bottom-0 before:w-0.5 before:-left-3 before:bg-gray-700 before:dark:bg-gray-300">
                        <motion.div 
                        initial = {{ y:100, opacity:0 }}
                        whileInView = {{ y:0, opacity:1 }}
                        transition = {{ duration:0.5, delay:0 }}
                        className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-purple-600">
                            <h3 className="text-xl lg:text-2xl text-left font-semibold tracking-wide">W.W. Grainger, Inc. - Applied Machine Learning Scientist</h3>
                            <time className="text-xs text-left tracking-wide uppercase dark:text-gray-500 text-gray-400">Feb 2023 - Present</time>
                            <p className="mt-3 text-justify pl-5">Working as a Applied Machine Learning Scientist at W.W. Grainger, Inc. in their Artificial Intelligence and Operations Research Team. </p>
                            <p className="mt-3 text-justify pl-5"> Working with Inside Sales Agents to use LLM models to generate optimized sales leads based on summarized customer service chats and calls. </p>
                            <p className="mt-3 text-justify pl-5"> Working on a deep learning based cost estimation model to estimate the price of an item so as to reduce the cost to procure it from the suppliers based on product attributes and supplier history  </p>
                        </motion.div>
                        <motion.div 
                        initial = {{ y:100, opacity:0 }}
                        whileInView = {{ y:0, opacity:1 }}
                        transition = {{ duration:0.5, delay:0 }}
                        className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-purple-600">
                            <h3 className="text-xl lg:text-2xl text-left font-semibold tracking-wide">W.W. Grainger, Inc. - Applied Machine Learning Intern</h3>
                            <time className="text-xs text-left tracking-wide uppercase dark:text-gray-500 text-gray-400">May 2022 - Aug 2022</time>
                            <p className="mt-3 text-justify pl-5">Developed a semi-supervised ReLU-RNN model for customer segment prediction, analyzing sales data with 63 million data points. Boosted RNN accuracy to 78% from a baseline of 52%. Experimented with various regression and time series models.</p>
                        </motion.div>
                        <motion.div 
                        initial = {{ y:100, opacity:0 }}
                        whileInView = {{ y:0, opacity:1 }}
                        transition = {{ duration:0.5, delay:0 }}
                        className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-purple-600">
                            <h3 className="text-xl lg:text-2xl text-left font-semibold tracking-wide">Dell Technologies - Software Engineer - 1 - Research</h3>
                            <time className="text-xs text-left tracking-wide uppercase dark:text-gray-500 text-gray-400">Jan 2020 - July 2021</time>
                            <p className="mt-3 text-justify pl-5">Developed a SHAP Explainable AI contract system for the Smart Pricing team. Supported .Net Core APIs and optimized buildpacks. Designed a proactive monitoring system and an ELK dashboard, reducing incidents by 23%.</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Timeline_Professional
