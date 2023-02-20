import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Card } from '@/components/card'
import { Flower } from '@/domain/Flower'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const flower : Flower = {
    id: 1,
    name: "irrelevant",
    binomialName: "irrelevant",
    price: 0,
    imgUrl: "company-icon.svg",
    wateringsPerWeek: 0,
    fertilizerType: "nitrogen",
    heightInCm: 0
  }
  return (
    <>
      <Head>
        <title>Sweet Petals</title>
        <meta name="description" content="Personal project for Sweet Petals" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={styles.main}>
        <header>
          <Image src="company-icon.svg" alt="Logo of the company" width={16} height={16}/>
          <h1>Sweet Petals</h1>
        </header>
        <section>
          <Card {...flower}/>
        </section>
      </body>
    </>
  )
}
