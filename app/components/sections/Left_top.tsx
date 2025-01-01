import { socials_list } from '@/app/data'
import React from 'react'
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaPhone, FaTelegram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6';
import { GiPsychicWaves } from 'react-icons/gi'

export default function Left_top() {

    const renderIcon = (platform:string) => {
        switch (platform) {
          case "linkedin":
            return <FaLinkedin className='inline mr-2 text-lg'  />;
          case "github":
            return <FaGithub className='inline mr-2 text-lg'  />;
          case "x":
            return <FaXTwitter className='inline mr-2 text-lg'  />;
          case "Instagram":
            return <FaInstagram className='inline mr-2 text-lg'  />;
          case "gmail":
            return <FaEnvelope className='inline mr-2 text-lg'  />;
          case "Phone":
            return <FaPhone className='inline mr-2 text-lg'  />;
          case "Telegram":
            return <FaTelegram className='inline mr-2 text-lg'  />;
          default:
            return null;
        }
      };
    
  return (
    <div className='flex flex-col text-sm'>
        <div className='flex justify-between mb-2'>
            <p className='font-bold ' >All Socials</p>
            <button className='bg-green-600 p-1 rounded font-bold'> <GiPsychicWaves className='inline' /> Connect</button>
        </div>
        <div className='border border-zinc-600 p-2 bg-[#151B23] rounded-md text-zinc-500 mb-4'>
            <p>My social-media accounts ...</p>
        </div>
        <div>
            {
                socials_list.map((social,index)=>{
                    return <div key={index} className='flex flex-row hover:underline items-center px-1 mb-4'>
                        {renderIcon(social.name)}
                        {/* <p>{social.name}</p>/*/}
                        <p>ganeshkondaka</p>/                            
                        <a href={social.href} className='text-purple-200'>{social.name}</a>                           
                    </div>
                })
            }
        </div>
    </div>
  )
}
