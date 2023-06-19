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
// // fetching direct
// // fetch author 
//  export async function getAuthor(){
//   const author = await client.fetch(`*[_type == "author"]`);
//   return author
// }

// // fetch experience
//  export async function getExperience(){
//   const experience = await client.fetch(`*[_type == "experience"]`);
//   return experience
// }
// // fetch projects
//  export async function getProjects(){
//   const projects = await client.fetch(`*[_type == "projects"]| order(_createdAt asc)`);
//   return projects
// }
// // fetch single projects
//  export async function getSingleProjects(id:string){
//   const singleProject = await client.fetch(`*[_id == "${id}"]`);
//   return singleProject
// }
// // fetch resume
//  export async function getResume(){
//   const resume = await client.fetch(`*[_type == "resume"]{...,technologies[]->}`);
//   return resume
// }

// api version
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