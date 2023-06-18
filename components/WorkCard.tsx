import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

type Props = {
  id:string,
  project_image:string,
  project_name:string,
}

function WorkCard({id,project_image,project_name}: Props) {
  return (
    <Link href={`/works/${id}`}>
    <div className='relative'>
        <Image
        src={project_image}
        width={0}
        height={0}
        alt="work card"
        sizes="100vw"
        className=' w-full aspect-square object-cover rounded-[50px] z-0 peer'
        />
        <div className="absolute background_primary white_text text-sm font-bold rounded-full p-4 z-10 bottom-5 left-5">{project_name} </div>
        <span className='absolute bg-slate-50 rounded-full p-3 top-5 right-5 hover:px-5 peer-hover:px-5 transition-all'> <AiOutlineArrowRight className=' text-black text-xl'/></span>
    </div>
    </Link>
  )
}

export default WorkCard