
import CardWrapper from '@components/CardWrapper'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import Video from '@components/Video'
import { getSingleProjects, urlFor } from '@utility/utility'
import { Projects } from '@typings'

type Props = {
  params: { id: string }
}
export const fetchCache = 'auto'

export async function generateStaticParams() {
  const posts = await fetch(`${process.env.NEXTJS_BASE_URL}/api/projects`).then((res) => res.json())
 
  return posts.map((post:Projects) => ({
    id: post._id,
  }))
}

async function page({params}: Props) {
  const {id}=params
  const [project]:Projects[]= await getSingleProjects(id)
   
  return (
    <div className='flex flex-col  w-full gap-9'>
        <CardWrapper
         initial={{ opacity:0, scale: 0.8,x:200 }}
         animate={{opacity:1,  scale: 1 ,x:0}}
         transition={{ duration: 0.2 }}
        >
            <Image
            src={urlFor(project.project_image).url()}
            alt='project image'
            width={0}
            height={0}
            sizes="100vw"
            className='w-full aspect-square object-cover rounded-[20px] md:rounded-[40px] z-0 '
            />
        <h1 className='flex md:gap-10 gap-3 mt-10 items-center md:text-5xl text-3xl'>
          <span className='hover:bg-indigo-400 md:p-5 p-3 rounded-full grey_text hover:text-white transition-all  '>
         <Link href='/works'> 
                <AiOutlineArrowLeft className=' md:text-4xl text-2xl'/>
                </Link> 
                </span>
            <p className='white_text font-bold'>{project.project_name}</p>
        </h1>
        </CardWrapper>
        <CardWrapper
        initial={{ opacity:0, scale: 0.5 }}
        animate={{opacity:1,  scale: 1 }}
        transition={{ duration: 0.2 ,delay:0.3}} 
        className='grey_text text-lg'>
       <p className='mb-6'>{project.description}</p>

       
      <div className="flex gap-3 flex-col md:flex-row w-full">

    { project.live_url &&  <Link target='_blank' 
        href={project.live_url}
        className='p-4 flex gap-3 items-center md:w-fit  font-bold white_text mt-5 rounded-full bg-[#8092ea] sm:w-full justify-center '
        >Live site <BsBoxArrowUpRight/></Link>}

       <Link target='_blank' 
        href={project.github_url}
        className='p-4 flex gap-3 items-center md:w-fit   font-bold white_text mt-5 rounded-full bg-[#8092ea] sm:w-full justify-center'
        >Github Repo <BsBoxArrowUpRight/></Link>
        </div>
        {/* demo credentials */}
      {project.isDemoCredentials && (<>
        <div className='white_text text-xl mt-5'>Demo Credentials</div>
        <ul className='grey_text text-lg'>
            <li>Email : {project.demo_email}</li>
            <li>Password : {project.demo_password}</li>
        </ul>
      </>)}  
        </CardWrapper>
        {project.isVideo && <Video 
        vidSrc={project.video_url}
        />}
    </div>
  )
}

export default page