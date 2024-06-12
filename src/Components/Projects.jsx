import React from 'react'
import { motion } from 'framer-motion'

function Projects() {
  return (
    <div className="min-h-screen bg-slate-200 dark:bg-black text-black dark:text-white text-center" id='Projects'>
      <motion.h1 
      initial = {{ opacity:0 }}
      whileInView = {{ opacity:1 }}
      transition = {{ duration:1, delay:0 }}
      className="pt-20 lg:pt-24 text-5xl"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Projects</span></motion.h1>
      <div className="flex flex-wrap gap-5 p-12 items-center justify-center">
        <motion.a href="#" 
        initial = {{ opacity:0, x:-100 }}
        whileInView = {{ opacity:1, x:0 }}
        transition = {{ duration:0.5, delay:0.25 }}
        className="relative block overflow-hidden pb-8 rounded-lg border border-gray-700 dark:border-gray-300 p-4 lg:p-8 lg:w-1/4 group">
            <span
                className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-cyan-400 to-purple-600"
            ></span>

            <div className="sm:flex sm:justify-between sm:gap-4">
                <div>
                <h3 className="text-xl lg:text-2xl font-bold lg:h-12 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text lg:group-hover:text-transparent lg:group-hover:text-4xl transition-all lg:group-hover:-translate-y-1 ease-in-out duration-300">
                    Project 1
                </h3>
                </div>
            </div>

            <div className="mt-4">
                <p className="text-left text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolore exercitationem corporis dignissimos, commodi quod! Eaque officia, atque veniam debitis earum nulla vel repellat quia, facilis minima reprehenderit, error quisquam!
                </p>
            </div>

            <dl className="mt-6 flex gap-4 sm:gap-6">
                <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium ">Published</dt>
                <dd className="text-xs ">31st June, 2021</dd>
                </div>

                <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium ">Reading time</dt>
                <dd className="text-xs ">3 minute</dd>
                </div>
            </dl>
        </motion.a>
        <motion.a href="#" 
        initial = {{ opacity:0, x:-100 }}
        whileInView = {{ opacity:1, x:0 }}
        transition = {{ duration:0.5, delay:0.5 }}
        className="relative block overflow-hidden pb-8 rounded-lg border border-gray-700 dark:border-gray-300 p-4 lg:p-8 lg:w-1/4 group">
            <span
                className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-cyan-400 to-purple-600"
            ></span>

            <div className="sm:flex sm:justify-between sm:gap-4">
                <div>
                <h3 className="text-xl lg:text-2xl font-bold lg:h-12 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text lg:group-hover:text-transparent lg:group-hover:text-4xl transition-all lg:group-hover:-translate-y-1 ease-in-out duration-300">
                    Project 2
                </h3>
                </div>
            </div>

            <div className="mt-4">
                <p className="text-left text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolore exercitationem corporis dignissimos, commodi quod! Eaque officia, atque veniam debitis earum nulla vel repellat quia, facilis minima reprehenderit, error quisquam!
                </p>
            </div>

            <dl className="mt-6 flex gap-4 sm:gap-6">
                <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium ">Published</dt>
                <dd className="text-xs ">31st June, 2021</dd>
                </div>

                <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium ">Reading time</dt>
                <dd className="text-xs ">3 minute</dd>
                </div>
            </dl>
        </motion.a>
        <motion.a href="#" 
        initial = {{ opacity:0, x:-100 }}
        whileInView = {{ opacity:1, x:0 }}
        transition = {{ duration:0.5, delay:0.75 }}
        className="relative block overflow-hidden pb-8 rounded-lg border border-gray-700 dark:border-gray-300 p-4 lg:p-8 lg:w-1/4 group">
            <span
                className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-cyan-400 to-purple-600"
            ></span>

            <div className="sm:flex sm:justify-between sm:gap-4">
                <div>
                <h3 className="text-xl lg:text-2xl font-bold lg:h-12 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text lg:group-hover:text-transparent lg:group-hover:text-4xl transition-all lg:group-hover:-translate-y-1 ease-in-out duration-300">
                    Project 3
                </h3>
                </div>
            </div>

            <div className="mt-4">
                <p className="text-left text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolore exercitationem corporis dignissimos, commodi quod! Eaque officia, atque veniam debitis earum nulla vel repellat quia, facilis minima reprehenderit, error quisquam!
                </p>
            </div>

            <dl className="mt-6 flex gap-4 sm:gap-6">
                <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium ">Published</dt>
                <dd className="text-xs ">31st June, 2021</dd>
                </div>

                <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium ">Reading time</dt>
                <dd className="text-xs ">3 minute</dd>
                </div>
            </dl>
        </motion.a>
      </div>

      <motion.h1 
      initial = {{ opacity:0 }}
      whileInView = {{ opacity:1 }}
      transition = {{ duration:1, delay:0 }}
      className="pt-14 text-5xl"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Publications</span></motion.h1>
      <div className="flex flex-wrap gap-5 p-6 items-center justify-center">
        <motion.a href="#" 
        initial = {{ opacity:0, x:100 }}
        whileInView = {{ opacity:1, x:0 }}
        transition = {{ duration:0.5, delay:0.25 }}
        className="relative block overflow-hidden pb-8 rounded-lg border border-gray-700 dark:border-gray-300 p-4 lg:p-8 lg:w-1/4 group">
            <span
                className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-cyan-400 to-purple-600"
            ></span>

            <div className="sm:flex sm:justify-between sm:gap-4">
                <div>
                <h3 className="text-xl lg:text-2xl font-bold lg:h-12 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text lg:group-hover:text-transparent lg:group-hover:text-4xl transition-all lg:group-hover:-translate-y-1 ease-in-out duration-300">
                    Publication 1
                </h3>
                </div>
            </div>

            <div className="mt-4">
                <p className="text-left text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolore exercitationem corporis dignissimos, commodi quod! Eaque officia, atque veniam debitis earum nulla vel repellat quia, facilis minima reprehenderit, error quisquam!
                </p>
            </div>

            <dl className="mt-6 flex gap-4 sm:gap-6">
                <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium ">Published</dt>
                <dd className="text-xs ">31st June, 2021</dd>
                </div>

                <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium ">Reading time</dt>
                <dd className="text-xs ">3 minute</dd>
                </div>
            </dl>
        </motion.a>
        <motion.a href="#" 
        initial = {{ opacity:0, x:100 }}
        whileInView = {{ opacity:1, x:0 }}
        transition = {{ duration:0.5, delay:0.5 }}
        className="relative block overflow-hidden pb-8 rounded-lg border border-gray-700 dark:border-gray-300 p-4 lg:p-8 lg:w-1/4 group">
            <span
                className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-cyan-400 to-purple-600"
            ></span>

            <div className="sm:flex sm:justify-between sm:gap-4">
                <div>
                <h3 className="text-xl lg:text-2xl font-bold lg:h-12 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text lg:group-hover:text-transparent lg:group-hover:text-4xl transition-all lg:group-hover:-translate-y-1 ease-in-out duration-300">
                    Publication 2
                </h3>
                </div>
            </div>

            <div className="mt-4">
                <p className="text-left text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolore exercitationem corporis dignissimos, commodi quod! Eaque officia, atque veniam debitis earum nulla vel repellat quia, facilis minima reprehenderit, error quisquam!
                </p>
            </div>

            <dl className="mt-6 flex gap-4 sm:gap-6">
                <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium ">Published</dt>
                <dd className="text-xs ">31st June, 2021</dd>
                </div>

                <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium ">Reading time</dt>
                <dd className="text-xs ">3 minute</dd>
                </div>
            </dl>
        </motion.a>
        <motion.a href="#" 
        initial = {{ opacity:0, x:100 }}
        whileInView = {{ opacity:1, x:0 }}
        transition = {{ duration:0.5, delay:0.75 }}
        className="relative block overflow-hidden pb-8 rounded-lg border border-gray-700 dark:border-gray-300 p-4 lg:p-8 lg:w-1/4 group">
            <span
                className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-cyan-400 to-purple-600"
            ></span>

            <div className="sm:flex sm:justify-between sm:gap-4">
                <div>
                <h3 className="text-xl lg:text-2xl font-bold lg:h-12 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text lg:group-hover:text-transparent lg:group-hover:text-4xl transition-all lg:group-hover:-translate-y-1 ease-in-out duration-300">
                    Publication 3
                </h3>
                </div>
            </div>

            <div className="mt-4">
                <p className="text-left text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolore exercitationem corporis dignissimos, commodi quod! Eaque officia, atque veniam debitis earum nulla vel repellat quia, facilis minima reprehenderit, error quisquam!
                </p>
            </div>

            <dl className="mt-6 flex gap-4 sm:gap-6">
                <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium ">Published</dt>
                <dd className="text-xs ">31st June, 2021</dd>
                </div>

                <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium ">Reading time</dt>
                <dd className="text-xs ">3 minute</dd>
                </div>
            </dl>
        </motion.a>
      </div>

      <motion.h1 
      initial = {{ opacity:0 }}
      whileInView = {{ opacity:1 }}
      transition = {{ duration:1, delay:0 }}
      className="pt-14 text-5xl"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Patents</span></motion.h1>
      <div className="flex flex-wrap gap-5 p-6 items-center justify-center">
        <motion.a href="#" 
        initial = {{ opacity:0, x:-100 }}
        whileInView = {{ opacity:1, x:0 }}
        transition = {{ duration:0.5, delay:0.25 }}
        className="relative block overflow-hidden pb-8 rounded-lg border border-gray-700 dark:border-gray-300 p-4 lg:p-8 lg:w-1/4 group">
            <span
                className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-cyan-400 to-purple-600"
            ></span>

            <div className="sm:flex sm:justify-between sm:gap-4">
                <div>
                <h3 className="text-xl lg:text-2xl font-bold lg:h-12 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text lg:group-hover:text-transparent lg:group-hover:text-4xl transition-all lg:group-hover:-translate-y-1 ease-in-out duration-300">
                    Patent 1
                </h3>
                </div>
            </div>

            <div className="mt-4">
                <p className="text-left text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolore exercitationem corporis dignissimos, commodi quod! Eaque officia, atque veniam debitis earum nulla vel repellat quia, facilis minima reprehenderit, error quisquam!
                </p>
            </div>

            <dl className="mt-6 flex gap-4 sm:gap-6">
                <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium ">Published</dt>
                <dd className="text-xs ">31st June, 2021</dd>
                </div>

                <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium ">Reading time</dt>
                <dd className="text-xs ">3 minute</dd>
                </div>
            </dl>
        </motion.a>
        <motion.a href="#" 
        initial = {{ opacity:0, x:-100 }}
        whileInView = {{ opacity:1, x:0 }}
        transition = {{ duration:0.5, delay:0.5 }}
        className="relative block overflow-hidden pb-8 rounded-lg border border-gray-700 dark:border-gray-300 p-4 lg:p-8 lg:w-1/4 group">
            <span
                className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-cyan-400 to-purple-600"
            ></span>

            <div className="sm:flex sm:justify-between sm:gap-4">
                <div>
                <h3 className="text-xl lg:text-2xl font-bold lg:h-12 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text lg:group-hover:text-transparent lg:group-hover:text-4xl transition-all lg:group-hover:-translate-y-1 ease-in-out duration-300">
                    Patent 2
                </h3>
                </div>
            </div>

            <div className="mt-4">
                <p className="text-left text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolore exercitationem corporis dignissimos, commodi quod! Eaque officia, atque veniam debitis earum nulla vel repellat quia, facilis minima reprehenderit, error quisquam!
                </p>
            </div>

            <dl className="mt-6 flex gap-4 sm:gap-6">
                <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium ">Published</dt>
                <dd className="text-xs ">31st June, 2021</dd>
                </div>

                <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium ">Reading time</dt>
                <dd className="text-xs ">3 minute</dd>
                </div>
            </dl>
        </motion.a>
        <motion.a href="#" 
        initial = {{ opacity:0, x:-100 }}
        whileInView = {{ opacity:1, x:0 }}
        transition = {{ duration:0.5, delay:0.75 }}
        className="relative block overflow-hidden pb-8 rounded-lg border border-gray-700 dark:border-gray-300 p-4 lg:p-8 lg:w-1/4 group">
            <span
                className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-cyan-400 to-purple-600"
            ></span>

            <div className="sm:flex sm:justify-between sm:gap-4">
                <div>
                <h3 className="text-xl lg:text-2xl font-bold lg:h-12 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text lg:group-hover:text-transparent lg:group-hover:text-4xl transition-all lg:group-hover:-translate-y-1 ease-in-out duration-300">
                    Patent 3
                </h3>
                </div>
            </div>

            <div className="mt-4">
                <p className="text-left text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolore exercitationem corporis dignissimos, commodi quod! Eaque officia, atque veniam debitis earum nulla vel repellat quia, facilis minima reprehenderit, error quisquam!
                </p>
            </div>

            <dl className="mt-6 flex gap-4 sm:gap-6">
                <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium ">Published</dt>
                <dd className="text-xs ">31st June, 2021</dd>
                </div>

                <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium ">Reading time</dt>
                <dd className="text-xs ">3 minute</dd>
                </div>
            </dl>
        </motion.a>
      </div>
    </div>
  )
}

export default Projects
