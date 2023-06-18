"use client"
import React from 'react'
import {AiOutlineWhatsApp,AiOutlineMail,AiOutlineLinkedin,AiOutlineInstagram} from 'react-icons/ai'
import CardWrapper from './CardWrapper'
import Link from 'next/link'
import {motion} from 'framer-motion'

type Props = {
  linkedIn_url:string,
    insta_url:string,
    whatsapp_url:string,
    mail_url:string,
}

function Footer({linkedIn_url,insta_url,whatsapp_url,mail_url}: Props) {
  return (
    <CardWrapper
    initial={{ opacity:0, scale: 0.5 }}
    animate={{opacity:1,  scale: 1 }}
    transition={{ duration: 0.2 }}
     className='grey_text mt-9'>
        <div className='md:text-5xl text-4xl flex gap-4 justify-center mt-6'>
           <Link href={linkedIn_url}> 
           <AiOutlineLinkedin/>
           </Link>
           <Link href={insta_url}>
            <AiOutlineInstagram/>
           </Link>
           <Link href={whatsapp_url}>
            <AiOutlineWhatsApp/>
           </Link>
           <Link href={mail_url}>
            <AiOutlineMail/>
           </Link>
        </div>
        <div className='text-sm text-center mt-16 font-bold'>
        Built by <Link href={linkedIn_url} className='text-indigo-400'>Sahil</Link> .
        </div>
    </CardWrapper>
  )
}

export default Footer