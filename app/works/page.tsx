import WorkList from '@components/WorkList'
import { Projects } from '@typings'
import { getProjects } from '@utility/utility'
import React from 'react'

type Props = {}
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
async function page({}: Props) {
  const projects:Projects[]= await getProjects()
  
  return (
    <div className='flex flex-col  w-full gap-9'>
        <WorkList 
        title='All Works' 
        showAll={false}
        projects={projects}
        />
    </div>
  )
}

export default page