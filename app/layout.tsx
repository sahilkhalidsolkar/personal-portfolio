import '@styles/globals.css'
import Sidebar from '@components/Sidebar'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '@components/Footer'
import { Author } from '@typings'
import { getAuthor, urlFor } from '@utility/utility'

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Sahil's Portfolio",
  description: '',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  const [author]:Author[]= await getAuthor()
  
  return (
    <html lang="en">
      <body className='background_primary ' >
        <div className=" container mx-auto px-5 md:px-15 py-5">

        <div className='flex  flex-col md:flex-row gap-10 w-full  '>

          {/* sidebar */}
         
         <Sidebar
         profile_src={urlFor(author.profileImage).url() }
         name={author.name}
         email={author.email}
         mail_url={author.mail_url}
         />

         
          {/* main content */}
          <main className='w-full'>
          {children}
          <Footer
          linkedIn_url={author.linkedIn_url}
          insta_url={author.insta_url}
          whatsapp_url={author.whatsapp_url}
          mail_url={author.mail_url}
          />

          </main>
        </div >
      </div>
        </body>
    </html>
  )
}
