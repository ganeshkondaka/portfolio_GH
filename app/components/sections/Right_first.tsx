import { project_list } from '@/app/data'
import React from 'react'
import { FaLocationArrow } from 'react-icons/fa'
import { LuSquareArrowUpRight } from 'react-icons/lu'
import { RiStarLine } from 'react-icons/ri';

const languageColors : { [key: string]: string } = {
    "typescript": "#4d88ff",
    "javascript": "#fad74d",
    "tailwindcss": "#b24dfa",
    "react": "#3bc4ff",
    "mongodb": "#06a123",
    "express.js": "#ff3b3b",
    "nextjs": "cyan",
    "python": "#fad74d",
    "prisma": "#fad74d",
    "node.js": "#026324",
    "hono": "orange",
    "streamlit": "#ff3b3b",

};

export default function Right_first() {

    return (

        <div className='flex flex-col'>
            <p className='border border-zinc-800 p-2 rounded-lg '>Projects</p>
            <div className='flex justify-between'>
                <p>Home</p>
                <button type="button" className=" bg-zinc-700 p-2 border">See all</button>
            </div>
            <div>
                {
                    project_list.map((project, index) => (
                        <div key={index} className='flex flex-col mb-6'>
                            <div className='flex'>
                                <div className='bg-yellow-400 rounded-full'>
                                    <img src="nn" alt="favicon" />
                                    <img src="lkn" alt="star-icon" />
                                </div>
                                <div className='flex flex-col'>
                                    <div className='text-sm text-zinc-500'><a href={project.href} className='text-white text-sm font-bold hover:text-blue-400 hover:underline'>{project.name}</a> created by ganesh</div>
                                    <div className='text-[12px] text-zinc-500'>{Math.floor(Math.random() * 24) + 1} hours ago</div>
                                </div>
                            </div>
                            <div className='text-sm flex justify-between mt-2'>

                                <div className='flex flex-col'>
                                    <div className='flex'>
                                        <span className='bg-yellow-300 text-black px-[3px] h-4 rounded flex items-center justify-center mr-2 '><FaLocationArrow className='inline text-[10px] ' /></span>
                                        <p className='font-bold text-white  hover:text-blue-400 hover:underline'>{project.name}/{project.name.toLowerCase()}</p>
                                    </div>
                                    <p className=''> {project.description}</p>
                                    <div className='flex flex-wrap items-center mt-2'>
                                        {
                                            project.technologies.map((tech, index) => (
                                                <div key={index} className='flex items-center mr-2'>
                                                    <span className={`w-3 h-3 rounded-full mr-1`} style={{ backgroundColor: languageColors[tech.toLowerCase()] || 'white' }}></span>
                                                    <span className='text-sm text-white'>{tech}</span>
                                                </div>
                                            ))
                                        }
                                        <div className='flex items-center text-zinc-500 '>
                                        <RiStarLine className='mr-1 ml-6 text-zinc-400 font-bold text-lg'/><p>{Math.floor(Math.random() * 69) + 10}k</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <a href={project.href} className='bg-zinc-700 px-2 py-1 rounded-lg flex items-center '>
                                            <LuSquareArrowUpRight className='inline text-zinc-400 mr-2' /> <p>check</p>
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
