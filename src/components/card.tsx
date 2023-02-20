import { Flower } from "@/domain/flower";
import Image from 'next/image'

export function Card(flower: Flower) {
    return (
        <Image
          src={flower.imgUrl}
          alt={flower.name}
          width={64}
          height={64}
        />
    );
  }