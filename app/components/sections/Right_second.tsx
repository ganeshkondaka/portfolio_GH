import React from 'react'
import { FaSuitcase } from 'react-icons/fa'
import { TbBrandGithubCopilot } from 'react-icons/tb'

export default function Right_second() {
  return (
    <div className='max-w-screen-lg mx-auto w-auto flex flex-col '>
      <div className='relative h-52 w-auto flex flex-col justify-center items-center border border-slate-600 rounded '>
        <img src="./headbg.png" alt="bg"  className='absolute w-[380px] h-[203px]' />
        <img src="./head.png" alt="bg"  className='absolute w-[300px]' />
        <div className='absolute top-0 left-0 p-4 w-full '>
          <div className='text-xl font-bold flex items-center '><TbBrandGithubCopilot className='mr-1' /><p>Ganesh</p></div>
          <p className='font-bold mt-2'>My Portfolio website</p>
          <p className='text-zinc-300 w-2/4 text-[11px] mb-4'>"I am a web developer skilled in MERN stack, currently seeking opportunities to contribute to innovative projects. </p>
          <div className='flex justify-center'>
            <a href="/" className='text-black rounded-lg bg-white  text-md w-full mx-1 text-center'>Connect</a>          </div>
        </div>
      </div>
      <div className='mt-10  p-4 border border-slate-600 rounded bg-[#0D1117]'>
        <p className='text-lg font-bold'>Experience</p>
        <p className='p-2'>Smartbridge</p>
        <div className='flex items-center p-2 gap-3'>
          <FaSuitcase className='text-md text-green-500' />
          <div className='flex flex-col text-zinc-400'>
            <p>Ai ml intern</p>
            <p>2023-2024</p>
          </div>
        </div>
      </div>
    </div>
  )
}
