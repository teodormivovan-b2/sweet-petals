import { Flower } from "@/domain/flower"
import styles from '@/styles/organisms/_card.module.css'
import Image from 'next/image'

export function Card(flower: Flower) {
    return (
      <div className={styles.card}>
        <Image
          className={styles.card__image}
          src={flower.imgUrl}
          alt={flower.name}
          width={128}
          height={128}
        />
        <h2 className={styles.card__title}>{flower.name}</h2>
      </div>
    );
  }