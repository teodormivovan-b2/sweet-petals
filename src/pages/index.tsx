import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/organisms/_gallery.module.css'
import { Card } from '@/components/card'
import { Flower } from '@/core/domain/flower'
import { useEffect, useState } from 'react'
import { FlowerService } from '@/core/services/flowerService'
import { apiFlowersRepository } from '@/core/infraestructure/flowerApiRepository'
import { Header } from '@/components/header'
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
      <main>
        <Header />
        <section className={styles.card__gallery}>
        {flowers.map((flower, key) => {
            return <Card key={key} {...flower} />;
          })}
        </section>
      </main>
    </>
  )
}
