import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Card } from '@/components/card'
import { Flower } from '@/domain/flower'
import { useEffect, useState } from 'react'
import { FlowerService } from '@/core/services/flowerService'
import { apiFlowersRepository } from '@/core/infraestructure/flowerApiRepository'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [flowers, setFlowers] = useState<Flower[]>([]);

  useEffect(() => {
    const getFlowers = async () => {
      const service = new FlowerService(apiFlowersRepository);
      setFlowers(await service.getAll());
    };

    getFlowers();
  }, []);

  return (
    <>
      <Head>
        <title>Sweet Petals</title>
        <meta name="description" content="Personal project for Sweet Petals" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <header>
          <Image src="company-icon.svg" alt="Logo of the company" width={16} height={16}/>
          <h1>Sweet Petals</h1>
        </header>
        <section>
        {flowers.map((flower, key) => {
            return <Card key={key} {...flower} />;
          })}
        </section>
      </body>
    </>
  )
}
