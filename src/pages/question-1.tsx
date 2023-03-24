import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import pageStyles from '@/styles/Page.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Question 1</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={pageStyles.description}>
          <h1>What do you want to learn or do more of at work?</h1>
          <p>One of my favorite skillsets that I'd like to grow in and do more of is debugging and troubleshooting. At my previous job, I was on a team of developers that was at the forefront of listening to customer issues, interpretting them (to the best of our abilities), inquiring for more information if needed, and then working to solve the issue. There is something both personally and professionally fulfilling about being able to take an issue and solve it, and I'd love the opportunity to grow and work in that area for Vercel's customers. I'm most experienced in frontend development, but I'd like to learn and be able to assist in other areas as well.<br/><br/>Along with the above, I want to grow my skillset in simply speaking to customers in a compassionate manner. It's a soft skill I think, but being able to talk to the customer in an manner that conveys both empathy and seriousness concerning their issue will, I believe, go a long way in earning their trust. In my personal experience, talking to support typically goes in a much more positive manner as long as there is mutual respect on both ends, and I want to be able to provide Vercel's customers that same experience.</p>
        </div>

        <div className={pageStyles.center}>
          <Link href="/">&#x2190; Home</Link> | <Link href="/question-2">Next Question &#x2192;</Link>
        </div>

      </main>
    </>
  )
}
