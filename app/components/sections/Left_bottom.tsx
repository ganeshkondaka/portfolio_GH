import { skills_list } from '@/app/data'
import React from 'react'
import { GoGitPullRequest } from 'react-icons/go'
import { TbCircleDot } from 'react-icons/tb'

export default function Left_bottom() {
    return (
        <div className='flex flex-col text-sm'>
            <p>My Skills</p>
            {
                skills_list.map((skill, index) => (
                    <div className='flex'>
                        {
                            skill.name === 'Version-control'
                                ? <GoGitPullRequest className='text-green-600 text-xl' />
                                : <TbCircleDot className='text-green-600 text-xl' />
                        }
                        
                        <div className='flex flex-col '>
                            <div key={index} className='flex flex-col'>
                                <p>Skill / {skill.name}</p>
                                <div className='flex'>
                                    {
                                        skill.list.map((item, index) => (
                                            <div className='flex border border-zinc-700'>{item}</div>
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
