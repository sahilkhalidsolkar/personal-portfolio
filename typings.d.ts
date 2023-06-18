import { SanityImageSource } from "@sanity/image-url/lib/types/types";

interface SanityBody{
    _type:string,
    _id:string,
    _createdAt:string,
    _updatedAt:string,
  }

 export interface Author extends SanityBody{
    profileImage:string,
    name:string,
    email:string,
    short_desc:string,
    linkedIn_url:string,
    insta_url:string,
    whatsapp_url:string,
    mail_url:string,
    showCaseImg1:string,
    showCaseImg2:string,
    experience:string,

}
 export interface Experience extends SanityBody{
  company_name:string,
  role:string,
  duration:string,
  company_logo:string,
  description:string,

}
 export interface Projects extends SanityBody{
  project_image:string,
  project_name:string,
  description:string,
  live_url:string,
  github_url:string,
  isDemoCredentials:boolean,
  demo_email:string,
  demo_password:string,
  isVideo:boolean,
  video_url:string,

}
 export interface Technologies extends SanityBody{
  icon_image:string,
  name:string,
  type:string,
  skill_level:number,
}

export interface Resume extends SanityBody{
  about_me:string,
  resume_url:string,
  technologies:Technologies[],

}

export interface Email{
  // mailto:test@example.com?subject=Testing out mailto!&body=This is only a test!'
  mailTo:string,
  email:string,
  subject:string,
  body:string,
  name:string,

}