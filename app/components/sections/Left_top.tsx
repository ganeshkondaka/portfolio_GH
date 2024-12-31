import { socials_list } from '@/app/data'
import React from 'react'
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaPhone, FaTelegram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6';
import { GiPsychicWaves } from 'react-icons/gi'

export default function Left_top() {

    const renderIcon = (platform:string) => {
        switch (platform) {
          case "linkedin":
            return <FaLinkedin className='inline'  />;
          case "github":
            return <FaGithub className='inline'  />;
          case "x":
            return <FaXTwitter className='inline'  />;
          case "Instagram":
            return <FaInstagram className='inline'  />;
          case "gmail":
            return <FaEnvelope className='inline'  />;
          case "Phone":
            return <FaPhone className='inline'  />;
          case "Telegram":
            return <FaTelegram className='inline'  />;
          default:
            return null;
        }
      };
    
  return (
    <div className='flex flex-col text-sm'>
        <div className='flex justify-between'>
            <p>All Socials</p>
            <button> <GiPsychicWaves className='inline' /> Connect</button>
        </div>
        <div className='border border-zinc-700 rounded-md'>
            <p>My social-media accounts ...</p>
        </div>
        <div>
            {
                socials_list.map((social,index)=>{
                    return <div key={index} className='flex flex-row hover:underline'>
                        {renderIcon(social.name)}
                        {/* <p>{social.name}</p>/*/}
                        <p>ganeshkondaka</p>/                            
                        <a href={social.href} className='text-purple-400'>{social.name}</a>                           
                    </div>
                })
            }
        </div>
    </div>
  )
}
