import Head from 'next/head'
import Header from "./header"


export const siteTitle = 'Leboncoin Chat'

export default function Layout({ children }) {
  return (
    <div >
      <Head>
        <link rel="icon" href="/favicon-16.fe104e12.png" />
        <meta
          name="description"
          content="Chat App for the Leboncoin"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
     
      <Header />
    
      <main>{children}</main>
      
    </div>
  )
}