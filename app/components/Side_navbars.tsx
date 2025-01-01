'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import { GoGitPullRequest } from 'react-icons/go';
import { TbBrandGithubCopilot, TbCircleDot } from 'react-icons/tb';
import { VscInbox } from 'react-icons/vsc';

export default function Side_navbars() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
       
            <div className="flex items-center justify-between w-full p-4 bg-gray-950 border-b border-slate-600">
                {/* Left Section */}
                <div className="flex items-center">
                    <button
                        onClick={toggleSidebar}
                        aria-controls="logo-sidebar"
                        type="button"
                        className="border-2 border-zinc-700 inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-950 dark:focus:ring-gray-600"
                    >
                        <FiMenu />
                    </button>
                    <a href="./logo.jpg" className="flex items-center ml-2">
                        <FaGithub className="mx-3 h-8 w-8" />
                        <span className="ml-1 text-md whitespace-nowrap text-white font-bold">Ganesh</span>
                    </a>
                </div>

                {/* Right Section */}
                <div className='flex items-center'>
                    <div className='flex items-center'>
                        <div className='border border-zinc-700 inline-flex items-center p-1 text-[12px] text-gray-400 pr-10 mx-2 rounded-lg'>Nothing to search </div>
                        <div className='border border-zinc-700 inline-flex items-center p-1 text-[12px] text-gray-400 mx-2 rounded-lg'><TbBrandGithubCopilot className='mr-1'/> | ▾</div>
                        <div className='border border-zinc-700 inline-flex items-center p-1 text-[12px] text-gray-400 mx-2 rounded-lg'>+ | ▾</div>
                        <div className='border border-zinc-700 inline-flex items-center p-1 text-[12px] text-gray-400 mx-2 rounded-lg'><TbCircleDot className='text-lg'/> </div>
                        <div className='border border-zinc-700 inline-flex items-center p-1 text-[12px] text-gray-400 mx-2 rounded-lg'><GoGitPullRequest className='text-lg'/></div>
                        <div className='border border-zinc-700 inline-flex items-center p-1 text-[12px] text-gray-400 mx-2 rounded-lg'><VscInbox className='text-lg'/></div>
                    </div>
                    <Image src="/pxldp4.jpeg" alt="Navbar Image" width={40} height={40} className="h-8 w-8 rounded-full" />
                </div>
            </div>

    );
}
