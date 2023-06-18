"use client"
import { Author } from '@typings'
import { getAuthor, urlFor } from '@utility/utility'
import Image from 'next/image'
import Link from 'next/link'
import React, { ReactNode } from 'react'
import {motion} from 'framer-motion'

type Props = {
  profile_src:string,
  name:string,
  mail_url:string,
  email:string,
}

 function Sidebar({profile_src,name,mail_url,email
}: Props) {
  return (
    <motion.div
    initial={{ opacity:0, scale: 0.5 }}
      animate={{opacity:1,  scale: 1 }}
      transition={{ duration: 0.5 }}
     className='background_secondary md:w-1/3 w-full md:h-[94vh]  rounded-[50px] p-10  flex flex-col justify-between self-start md:sticky top-6' >
    <div>
      <Image
    src={ profile_src  }
    alt='profile picture'
    width={90}
    height={90}
    className='rounded-full mb-4'
    />
    <p className=' text-indigo-400  -mb-1 text-xl font-semibold  tracking-wide'>
      {name}
    </p>
    <a 
    className=' text-sm text-gray-400 font-semibold'
    href = {mail_url}> {email}</a>
      
    </div>
    <div className='mt-10 uppercase text-slate-50'>
      
        <Link href="/"  className='navlinks'>Home</Link>
        <hr className='h-px my-2 border-0 bg-gray-700'/>
        <Link href="/works" className='navlinks'>Works</Link>
        <hr className='h-px my-2 border-0 bg-gray-700'/>
        <Link href="/resume" className='navlinks'>Resume</Link>
        <hr className='h-px my-2 border-0 bg-gray-700'/>
        <Link href="/contact" className='navlinks'>Contact</Link>
      </div>
    
    
  </motion.div>
  )
}

export default Sidebar