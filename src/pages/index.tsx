import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/organisms/_gallery.module.css'
import { Card } from '@/components/card'
import { Flower } from '@/core/domain/flower'
import { useEffect, useState } from 'react'
import { FlowerService } from '@/core/services/flowerService'
import { apiFlowersRepository } from '@/core/infraestructure/flowerApiRepository'
import { Header } from '@/components/header'
import { Searchbar } from '@/components/searchbar'
import { isSearchedFlower } from '@/core/services/flowerFilters'

export default function Home() {
  const [flowers, setFlowers] = useState<Flower[]>([]);
  const [filteredFlowers, setFilteredFlowers] = useState<Flower[]>(flowers);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const getFlowers = async () => {
      const service = new FlowerService(apiFlowersRepository);
      setFlowers(await service.getAll());
    };

    getFlowers();
  }, []);

  useEffect(() => {
    const filterFlowers = () => {
      setFilteredFlowers(
        flowers.filter(
          (flower) => isSearchedFlower(flower, searchText)
        )
      )
    };

    filterFlowers();
  }, [flowers, searchText]);

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
        <Searchbar setSearchText={setSearchText}/>
        <section className={styles.card__gallery}>
          {filteredFlowers.map((flower, key) => {
            return <Card key={key} {...flower} />;
          })}
        </section>
      </main>
    </>
  )
}
