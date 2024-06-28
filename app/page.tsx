
import Carousel from '@components/Carousel'
import HeadCard from '@components/HeadCard'
import WorkList from '@components/WorkList'
import { Author, Experience, Projects } from '@typings';
import { getAuthor, getExperience, getProjects, urlFor } from '@utility/utility';

export const dynamic = "force-dynamic";
// export const fetchCache = "force-no-store";

export default async function Home() {
    const [author]:Author[]= await getAuthor()
    const experiences:Experience[]= await getExperience()
    const projects:Projects[]= await getProjects()
   
  return (
    <div className='flex flex-col w-full gap-9'>
      <HeadCard
      experience={author.experience}
      name={author.name}
      description={author.short_desc}
      showCaseImg1={ urlFor(author.showCaseImg1).url() }
      showCaseImg2={ urlFor(author.showCaseImg2).url() }
      />
      <Carousel experiences={experiences}/>
      <WorkList 
      title='Works' 
      showAll={true}
      projects={projects}
      />
    </div>
  )
}
