import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'


export  const client = createClient({
  projectId: 'k343d7ui',
  dataset: "production",
  apiVersion: "2023-05-29",
  useCdn: false
});
// for sanity image url
const builder = imageUrlBuilder(client)

export function urlFor(source:string) {
  return builder.image(source)
}

// fetch author
 export async function getAuthor(){
  const data = await fetch(`${process.env.NEXTJS_BASE_URL}/api/author`,
  { next: { revalidate: 60 } }
  );
  return data.json()
}
// fetch experience
 export async function getExperience(){
  const data = await fetch(`${process.env.NEXTJS_BASE_URL}/api/experience`,
  { next: { revalidate: 60 } }
  );
  return data.json()
}
// fetch projects
 export async function getProjects(){
  const data = await fetch(`${process.env.NEXTJS_BASE_URL}/api/projects`,
  { next: { revalidate: 60 } }
  );
  return data.json()
}
// fetch single projects
 export async function getSingleProjects(id:string){
  const data = await fetch(`${process.env.NEXTJS_BASE_URL}/api/projects/${id}`,
  { next: { revalidate: 60 } }
  );
  return data.json()
}
// fetch resume
 export async function getResume(){
  const data = await fetch(`${process.env.NEXTJS_BASE_URL}/api/resume`,
  { next: { revalidate: 60 } }
  );
  return data.json()
}