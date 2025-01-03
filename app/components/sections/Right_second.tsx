import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaGithub, FaRegCheckCircle, FaSuitcase } from 'react-icons/fa'
import { FaCodeMerge } from 'react-icons/fa6'
import { TbBrandGithubCopilot } from 'react-icons/tb'

export default function Right_second() {
  return (
    <div className='max-w-screen-lg mx-auto w-auto flex flex-col '>
      <div className=' relative h-[220px] w-auto overflow-hidden border border-slate-600 rounded-lg'>
        <Image 
          src="/headbg.png" 
          alt="bg" 
          width={800} 
          height={400} 
          className='absolute inset-0 w-auto h-full object-cover'
        />
        <Image 
          src="/head.png" 
          alt="bg" 
          width={800} 
          height={800} 
          className='absolute inset-0 w-full h-full object-contain '
        />
        <div className='relative z-10 p-4 w-full h-full flex flex-col'>
          <div className='text-lg text-zinc-300 sm:text-xl font-bold flex items-center'>
            <TbBrandGithubCopilot className='mr-1' />
            <p>Ganesh</p>
          </div>
          <p className='font-bold mt-2 text-sm sm:text-base'>My Portfolio website</p>
          <p className='text-zinc-300 w-full sm:w-2/3 md:w-3/4 text-[11px] sm:text-[11px] mb-4'>
            I am a web developer skilled in MERN stack, currently seeking opportunities to contribute to innovative projects.
          </p>
          <div className='mt-auto w-full px-4 sm:px-8 md:px-16'>
            <Link 
              href="/logo.jpg" 
              className='block text-black rounded-lg bg-white text-sm sm:text-md w-full py-1.5 text-center hover:bg-gray-100 transition-colors'
            >
              Connect
            </Link>
          </div>
        </div>
      </div>

      <div className='mt-10  p-4 border border-slate-600 rounded-lg bg-[#0D1117]'>
        <p className='text-lg font-bold'>Accolade</p>
        <p className='p-2 text-md'><FaGithub className='inline'/> Contributed to Spectrum-UI </p>
        <div className='flex items-center px-4 gap-3 mt-2'>
          <FaCodeMerge className='text-purple-800 text-xl ' />
          <div className='flex flex-col text-zinc-400 text-sm hover:underline'>
            <Link href="https://github.com/arihantcodes/spectrum-ui/pull/54">added a custom cursor component</Link>
          </div>
        </div>
        <div className='flex items-center px-4 gap-3 mt-4'>
          <FaRegCheckCircle  className='text-purple-800 text-xl ' />
          <div className='flex flex-col text-zinc-400 text-sm hover:underline'>
            <Link href="https://github.com/arihantcodes/spectrum-ui/issues/38#event-15721056448">solved the cards overlapping</Link>
          </div>
        </div>
      </div>

      <div className='mt-10  p-4 border border-slate-600 rounded-lg bg-[#0D1117]'>
        <p className='text-lg font-bold'>Experience</p>
        <p className='p-2'>Smartbridge</p>
        <div className='flex items-center px-2 gap-3'>
          <FaSuitcase className='text-md text-zinc-500' />
          <div className='flex flex-col text-zinc-400'>
            <p >Ai ml intern</p>
            <p className='text-[11px]'>2023-2024</p>
          </div>
        </div>
      </div>
    </div>
  )
}
