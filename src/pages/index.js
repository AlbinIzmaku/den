import Head from 'next/head'
import styles from '@/styles/Index.module.css'
import Header from './Header'
import Exercise from './Exercise'


export default function Home() {
  return (
    <>
      <Head>
        <title>Den App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Exercise />
      </main>
    </>
  )
}

