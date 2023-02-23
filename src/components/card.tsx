import { Flower } from "@/core/domain/flower";
import styles from "@/styles/organisms/_card.module.css";
import Image from "next/image";
import Link from "next/link";

export const Card = (flower: Flower) => {
  return (
    <div className={styles.card}>
      <Link href={`/detail/${encodeURIComponent(flower.id)}`}>
        <Image
          className={styles.card__image}
          src={flower.imgUrl}
          alt={flower.name}
          width={128}
          height={128}
        />
        <h2 className={styles.card__title}>{flower.name}</h2>
      </Link>
      <p className={styles.card__small_detail}>{flower.binomialName}</p>
      <p className={styles.card__detail}>{flower.price}€</p>
    </div>
  );
};
