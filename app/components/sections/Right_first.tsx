import { project_list } from '@/app/data'
import Image from 'next/image';
import React from 'react'
import { FaBug, FaCode, FaLocationArrow } from 'react-icons/fa'
import { FaArrowTrendUp } from 'react-icons/fa6';
import { MdStars } from 'react-icons/md';
import { RiStarLine } from 'react-icons/ri';

const languageColors: { [key: string]: string } = {
    "typescript": "#4d88ff",
    "javascript": "#fad74d",
    "tailwindcss": "#b24dfa",
    "react": "#3bc4ff",
    "mongodb": "#6bbf6f",
    "express.js": "#c4316c",
    "nextjs": "#eb7d3d",
    "python": "#fad74d",
    "prisma": "#fad74d",
    "node.js": "#04800a",
    "hono": "orange",
    "streamlit": "#ff3b3b",
    "nlp": "#ad3199",
    "tensorflow": "#869934",
};

export default function Right_first() {

    return (

        <div className='flex flex-col'>
            <p className='border border-slate-700 p-2 rounded-lg px-5 text-zinc-400 bg-[#0D1117] '>Projects</p>
            <div className=' flex-row py-2 pt-4 justify-around flex-wrap gap-2 hidden sm:flex'>
                <p className='  p-2 pr-4 border border-slate-700 rounded-full  sm:text-base lg:text-[14px] flex items-center'>
                    <FaCode className='inline mx-2 text-zinc-500' /> A Portfolio website
                </p>
                <p className=' p-2 pr-4 border border-slate-700 rounded-full sm:text-base lg:text-[14px] flex items-center'>
                    <FaCode className='inline mx-2 text-zinc-500' /> Github Themed
                </p>
                <p className=' p-2 pr-4 border border-slate-700 rounded-full sm:text-base lg:text-[14px] flex items-center'>
                    <FaBug className='inline mx-2 text-red-400' /> Give a star in Github
                </p>
            </div>

            <div className='flex justify-between items-center px-5 py-2'>
                <p className='font-bold text-xl'>my projects</p>
                <button type="button" className="rounded-lg bg-gray-800 px-2 p-1 border border-slate-700 text-sm">See all</button>
            </div>
            <div>
                {
                    project_list.map((project, index) => (
                        <div key={index} className='flex flex-col mb-6 bg-[#0D1117] p-4 rounded-lg border border-zinc-700 '>
                            <div className='flex'>
                                <div className='relative rounded-full flex mr-2 '>
                                    <Image src={project.logo} width={45} height={45} alt="favicon" className='rounded-full ' />
                                    <MdStars className='absolute text-yellow-400 bg-black rounded-full  bottom-0 right-0' />
                                </div>
                                <div className='flex flex-col'>
                                    <div className='text-sm text-zinc-500'><a href={project.href} className='text-white text-sm font-bold hover:text-blue-400 hover:underline'>{project.name}</a> created by ganesh</div>
                                    <div className='text-[12px] text-zinc-500'>{Math.floor(Math.random() * 24) + 1} hours ago</div>
                                </div>
                            </div>
                            <div className='text-sm flex justify-between mt-2 bg-[#151B23] p-6 rounded-lg'>

                                <div className='flex flex-col'>
                                    <div className='flex items-center'>
                                        <span className='bg-yellow-300 text-black px-[3px] h-4 rounded flex items-center justify-center mr-2 '><FaLocationArrow className='inline text-[10px] ' /></span>
                                        <p className='font-bold text-white  hover:text-blue-400 hover:underline'>{project.name}/{project.name.toLowerCase()}</p>
                                        <div className='md:hidden ml-6'>
                                            <a href={project.href} className='bg-gray-800 px-2 py-1 rounded-lg flex items-center hover:bg-gray-700 '>
                                                <FaArrowTrendUp className='inline text-zinc-400 mr-2' /> <p>check</p>
                                            </a>
                                        </div>
                                    </div>
                                    <p className='mt-2'> {project.description}</p>
                                    <div className='flex flex-wrap items-center mt-2'>
                                        {
                                            project.technologies.map((tech, index) => (
                                                <div key={index} className='flex items-center mr-2'>
                                                    <span className={`w-3 h-3 rounded-full mr-1`} style={{ backgroundColor: languageColors[tech.toLowerCase()] || 'white' }}></span>
                                                    <span className='text-[12px] text-zinc-400'>{tech}</span>
                                                </div>
                                            ))
                                        }
                                        <div className='flex items-center text-zinc-500 '>
                                            <RiStarLine className='mr-1 ml-6 text-zinc-400 font-bold text-lg' /><p>{Math.floor(Math.random() * 69) + 10}k</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='hidden sm:flex'>
                                        <a href={project.href} className='bg-gray-800 px-2 py-1 rounded-lg flex items-center hover:bg-gray-700 '>
                                            <FaArrowTrendUp className='inline text-zinc-400 mr-2' /> <p>check</p>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))
                }
            </div>
        </div>

    )
}
