import { Flower } from "@/core/domain/flower";
import { FlowerService } from "@/core/services/flowerService";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { apiFlowersRepository } from "@/core/infraestructure/flowerApiRepository";
import styles from "@/styles/organisms/_description.module.css";
import Image from "next/image";
import Layout from "@/components/layout";

function spanishFertilizer(flower: Flower): string {
  if (flower.fertilizerType === "phosphorus") return "Fosforado";
  if (flower.fertilizerType === "nitrogen") return "Nitrogenado";
  return "No definido.";
}

export default function Detail() {
  const router = useRouter();
  const id: string = router.query.id as string;
  const [flower, setFlower] = useState<Flower>();

  useEffect(() => {
    const getFlower = async () => {
      const service = new FlowerService(apiFlowersRepository);
      setFlower(await service.getById(id));
    };
    getFlower();
  }, [id]);

  if (!flower) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <div className={styles.details__return__container}>
        <button
          className={styles.details__return}
          onClick={() => router.back()}
        >
          Volver
        </button>
      </div>
      <div className={styles.details__container}>
        <div className={styles.details__image__container}>
          <Image
            src={flower.imgUrl}
            alt={flower.name}
            className={styles.details__image}
            fill
            placeholder="blur"
            blurDataURL={flower.imgUrl}
          />
        </div>
        <dl className={styles.details__data}>
          <dt>Nombre:</dt>
          <dd>{flower.name}</dd>
          <dt>Nombre científico:</dt>
          <dd>{flower.binomialName}</dd>
          <dt>Precio:</dt>
          <dd>{flower.price}</dd>
          <dt>Riegos por semana:</dt>
          <dd>{flower.wateringsPerWeek}</dd>
          <dt>Fertizante recomendado:</dt>
          <dd>{spanishFertilizer(flower)}</dd>
          <dt>Altura:</dt>
          <dd>{flower.heightInCm}</dd>
        </dl>
      </div>
    </Layout>
  );
}
