"use client"
import CardWrapper from '@components/CardWrapper'
import { Author, Email } from '@typings'
import { getAuthor } from '@utility/utility'
import React, { useEffect, useState } from 'react'

type Props = {}

 function page({}: Props) {
  

  const [emailData, setEmailData] = useState<Email>({
    mailTo:'',
    email:'',
  subject:'Interaction with portfolio site',
  body:'',
  name:''
  })
  useEffect(() => {
    async function getData() {
      const data = await fetch(`${process.env.NEXTJS_BASE_URL}/api/author`,
  { next: { revalidate: 10 } }
  );
  const [author]:Author[]=await  data.json()
      setEmailData({...emailData,mailTo:author.mail_url})
    }
    getData()
  }, [])
  
  const onSubmit=(e:React.FormEvent<HTMLFormElement>):void=>{
  e.preventDefault()
    window.location.href=`${emailData.mailTo}?subject=${emailData.subject}&body=${emailData.body}`
}

const onChangeHandler=(e:React.ChangeEvent)=>{
  // @ts-ignore.
  setEmailData({...emailData,[e.currentTarget.name]:e.currentTarget.value})
}
  return (
    <CardWrapper
    initial={{ opacity:0,  y:-200 ,scale:0.5 }}
    animate={{opacity:1, y:0 ,scale:1}}
    transition={{ duration: 0.5 }}
    >
      <h1 className='font-[700] white_text text-3xl'>Let's Work together</h1>
      <form onSubmit={onSubmit} className='flex flex-col gap-4 mt-4'>
        <div className='flex gap-3'>
        <input type="text"
        placeholder='Name'
        name='name'
        value={emailData.name}
        onChange={onChangeHandler}
        className='grey_text background_primary p-4 rounded-2xl w-1/2 outline-0'
        />
        <input type="text"
        placeholder='Email'
        name='email'
        value={emailData.email}
        onChange={onChangeHandler}
        className='grey_text background_primary p-4 rounded-2xl w-1/2 outline-0 '
        />
        </div>
        <textarea name="body"
        placeholder='Message'
        onChange={onChangeHandler}
        className='grey_text background_primary p-4 rounded-2xl w-full min-h-4 outline-0 h-56'

        ></textarea>
        <button
        className='p-4 font-bold white_text mt-5 rounded-full bg-[#8092ea] transition-all hover:scale-105'
        >
          Submit
        </button>
      </form>
    </CardWrapper>
  )
}

export default page