import { Flower } from "@/domain/flower";


export interface FlowerRepository {
  getAll: () => Promise<Flower[]>;
}