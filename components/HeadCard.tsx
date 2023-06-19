"use client"
import React, { useState } from 'react'
import CardWrapper from './CardWrapper'
import Image from 'next/image'
import {AiFillLike} from 'react-icons/ai'
import {motion} from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'

type Props = {
  experience:string,
  name:string,
  description:string,
  showCaseImg1:string
  showCaseImg2:string

}

function HeadCard({
  experience,
  name,
  description,
  showCaseImg1,
  showCaseImg2,
}: Props) {
  const [like, setLike] = useState<boolean>(false)

  const handleLike=():void=>{
    setLike(prev=>!prev)
  }
const typewriterList=[
  ` Hi, I'm ${name.split(" ")[0]}`,'❤ to <Code/>',
]
  return (
    <CardWrapper
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    >
     <div className='flex flex-col xl:flex-row-reverse xl:justify-between'>
      <div className='flex justify-center  items-center  '>
        <div className='relative w-[350px] h-[215px] mb-10 md:w-[395px] md:h-[204px] '>
         <Image
          src={showCaseImg1}
          alt='Show Case Image 1'
          width={120}
          height={120}
          className=' rounded-xl object-cover '
          />
          <Image
          src={showCaseImg2}
          alt='Show Case Image 2'
          width={150}
          height={150}
          className=' rounded-xl object-cover absolute  bottom-0 right-0'
          />
          <div className=' bg-[#fbfbfb] rounded-2xl p-5  w-44 mt-2 mr-2 absolute top-[40%] left-[15%]'>
              <p className=' text-lg'>{experience}</p>
            <p className=' text-xs'>Experience</p>
            <span 
            className={`absolute -top-3 right-5 p-2   rounded-xl drop-shadow-lg text-lg ease-in duration-300 ${like ? 'bg-[#8092ea] -top-4' : 'bg-[#ffffff]' }`}
            onClick={handleLike}
            >
            <AiFillLike className={`  ${like ? 'text-[#ffffff]':'text-[#8092ea]'} ease-in duration-300 `}/>
            </span>
            
          </div>
        </div>

      </div>
        <div className='flex justify-center flex-col flex-1'>
            <p className='font-bold lg:text-5xl text-3xl white_text '>
            {/* {'💖 to <Code/>'} */}
              <Typewriter
            words={typewriterList}
            loop={false}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={21}
            delaySpeed={1100}
          />
              </p>
            <motion.div
            initial={{ y: 20 ,opacity: 0.3,  }}
            animate={{ y: 0 ,opacity: 1,  }}
            transition={{ duration: 0.5 ,delay:0.2}}
             className='grey_text font-[400] text-xl mt-3'>{description}</motion.div>
        </div> 
     </div>

    </CardWrapper>
  )
}

export default HeadCard