import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaGithub, FaRegCheckCircle, FaSuitcase } from 'react-icons/fa'
import { FaCodeMerge } from 'react-icons/fa6'
import { TbBrandGithubCopilot } from 'react-icons/tb'

export default function Right_second() {
  return (
    <div className='max-w-screen-lg mx-auto w-auto flex flex-col '>
      <div className='relative h-52 w-auto flex flex-col justify-center items-center border border-slate-600 rounded '>
        <Image src="./headbg.png" alt="bg" className='absolute w-[380px] h-[203px]' />
        <Image src="./head.png" alt="bg" className='absolute w-[300px]' />
        <div className='absolute top-0 left-0 p-4 w-full '>
          <div className='text-xl font-bold flex items-center '><TbBrandGithubCopilot className='mr-1' /><p>Ganesh</p></div>
          <p className='font-bold mt-2'>My Portfolio website</p>
          <p className='text-zinc-300 w-2/4 text-[11px] mb-4'>I am a web developer skilled in MERN stack, currently seeking opportunities to contribute to innovative projects. </p>
          <div className='flex justify-center'>
            <Link href="/" className='text-black rounded-lg bg-white  text-md w-full mx-1 py-1 text-center'>Connect</Link></div>
        </div>
      </div>

      <div className='mt-10  p-4 border border-slate-600 rounded bg-[#0D1117]'>
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

      <div className='mt-10  p-4 border border-slate-600 rounded bg-[#0D1117]'>
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
    </div>
  )
}
