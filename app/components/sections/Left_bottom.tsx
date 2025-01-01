import { skills_list } from '@/app/data'
import React from 'react'
import { GoGitPullRequest } from 'react-icons/go'
import { TbCircleDot } from 'react-icons/tb'

export default function Left_bottom() {
    return (
        <div className='flex flex-col text-sm '>
            <p className='font-bold mb-4'>My Skills</p>
            {
                skills_list.map((skill, index) => (
                    <div key={index} className='flex mb-4'>
                        {
                            skill.name === 'Version-control'
                                ? <GoGitPullRequest className='text-green-600 text-xl ' />
                                : <TbCircleDot className='text-green-600 text-xl ' />
                        }
                        
                        <div className='flex flex-col '>
                            <div key={index} className='flex flex-col  pl-2'>
                                <p className='text-[12px] text-zinc-400 hover:underline'>Skill / {skill.name}</p>
                                <div className='inline-flex flex-wrap '>
                                    {
                                        skill.list.map((item, index) => (
                                            <div key={index} className='flex '>{item.toLowerCase()} ,</div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div >
    )
}
