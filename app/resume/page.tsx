import CardWrapper from '@components/CardWrapper'
import ResumeCardWrapper from '@components/ResumeCardWrapper'
import ResumeContentCard from '@components/ResumeContentCard'
import TechIcons from '@components/TechIcons'
import { Experience, Resume } from '@typings'
import { getExperience, getResume, urlFor } from '@utility/utility'
import Link from 'next/link'
import React from 'react'

type Props = {}
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
async function page({}: Props) {
  const [resume]:Resume[]=await getResume()
  const experiences:Experience[]= await getExperience()
 
  return (
    <div className='flex flex-col   w-full gap-9'>
        <ResumeCardWrapper title='About me'>
        <p className='grey_text mt-5 mb-7 font-[400] md:text-lg text-[17px]'>
        {/* Hi, I am Eldyn, a human, living in this beautiful Earth. Have interest in minimalism, simplicity, and card design. Currently work as Full-stack Developer. */}
        {resume.about_me}
        </p>
        <Link target='_blank' 
        href={resume.resume_url}
        className='p-4 font-bold white_text mt-5 rounded-full bg-[#8092ea] transition-all hover:scale-105'
        
        >Download Resume</Link>
        </ResumeCardWrapper>
        <ResumeCardWrapper title='technologies'>
        <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2'>
          {resume.technologies.map(technology=>
          <TechIcons 
            key={technology._id}
            name={technology.name} 
            type={technology.type} 
            imageSrc={urlFor(technology.icon_image).url() }
            />)}
            
            {/* <TechIcons 
            name='Framer' 
            type='Design' 
            imageSrc='https://framerusercontent.com/images/2PYckrOSh4UPnsYGTtqw3BWyLA.png'
            />
            <TechIcons 
            name='Framer' 
            type='Design' 
            imageSrc='https://framerusercontent.com/images/2PYckrOSh4UPnsYGTtqw3BWyLA.png'
            />
            <TechIcons 
            name='Framer' 
            type='Design' 
            imageSrc='https://framerusercontent.com/images/2PYckrOSh4UPnsYGTtqw3BWyLA.png'
            />
            <TechIcons 
            name='Framer' 
            type='Design' 
            imageSrc='https://framerusercontent.com/images/2PYckrOSh4UPnsYGTtqw3BWyLA.png'
            />
            <TechIcons 
            name='Framer' 
            type='Design' 
            imageSrc='https://framerusercontent.com/images/2PYckrOSh4UPnsYGTtqw3BWyLA.png'
            /> */}
            
        </div>
        </ResumeCardWrapper>
        <ResumeCardWrapper title='experience'>
          {experiences.map(experience=> <ResumeContentCard
            title={experience.company_name}
            subtitle={experience.role}
            duration={experience.duration}
            about={experience.description}
            />)}
            {/* <ResumeContentCard
            title='Spotify'
            subtitle='Front end Developer'
            duration='2019 - 2021'
            about='Implemented user interfaces, created APIs, wrote server-side code, collaborated with the design and development team, and ensured high-quality and scalable software solutions. This is only an example.'
            /> */}
        </ResumeCardWrapper>
        <ResumeCardWrapper title='education'>
            <ResumeContentCard
            title='University of Mumbai'
            subtitle='Information Technology'
            duration='2021 - 2024'
            about='Current average of pointer is 8.83 during the course .'
            />
            <ResumeContentCard
            title='Maharashtra State Board of Technical Education'
            subtitle='Computer Engineering'
            duration='2019 - 2021'
            about='Completed diploma with aggregate 95.14% .'
            />
            <ResumeContentCard
            title='Konkan Division Board'
            subtitle='SSC'
            duration='2018'
            about='Secured Distinction with 90.80% in 10th standard .'
            />
        </ResumeCardWrapper>
    </div>
  )
}

export default page