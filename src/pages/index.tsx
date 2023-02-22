import styles from '@/styles/organisms/_gallery.module.css'
import { Card } from '@/components/card'
import { Flower } from '@/core/domain/flower'
import { useEffect, useState } from 'react'
import { FlowerService } from '@/core/services/flowerService'
import { apiFlowersRepository } from '@/core/infraestructure/flowerApiRepository'
import { Searchbar } from '@/components/searchbar'
import { isSearchedFlower } from '@/core/services/flowerFilters'
import Link from 'next/link'
import Layout from '@/components/layout'

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
    <Layout>
      <Searchbar setSearchText={setSearchText}/>
      <section className={styles.card__gallery}>
        {filteredFlowers.map((flower, key) => {
          return (
            <Link key={key} href={`/detail/${encodeURIComponent(flower.id)}`}>
            <Card key={key} {...flower} />
            </Link>
          )
          })}
      </section>
    </Layout>
  )
}
