import styles from "@/styles/organisms/_gallery.module.css";
import { Card } from "@/components/card";
import { Flower } from "@/core/domain/flower";
import { useEffect, useState } from "react";
import { FlowerService } from "@/core/services/flowerService";
import { apiFlowersRepository } from "@/core/infraestructure/flowerApiRepository";
import { Searchbar } from "@/components/searchbar";
import { isSearchedFlower } from "@/core/services/flowerFilters";
import Layout from "@/components/layout";

export default function Home() {
  const [flowers, setFlowers] = useState<Flower[]>([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const getFlowers = async () => {
      const service = new FlowerService(apiFlowersRepository);
      setFlowers(await service.getAll());
    };

    getFlowers();
  }, []);

  const filteredFlowers: Flower[] = flowers.filter((flower) =>
    isSearchedFlower(flower, searchText)
  );

  return (
    <Layout>
      <Searchbar setSearchText={setSearchText} />
      <section className={styles.card__gallery}>
        {filteredFlowers.map((flower, key) => {
          return <Card key={key} {...flower} />;
        })}
      </section>
    </Layout>
  );
}
