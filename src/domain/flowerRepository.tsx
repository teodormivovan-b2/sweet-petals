import { Flower } from "./flower";

export interface FlowerRepository {
    getAll: () => Promise<Flower[]>
  }