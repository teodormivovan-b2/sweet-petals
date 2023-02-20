import { Flower } from "@/domain/flower";
import { FlowerRepository } from "@/domain/flowerRepository";

export const apiFlowersRepository: FlowerRepository = {
  getAll: async (): Promise<Flower[]> => {
    try {
      const response = await fetch("https://dulces-petalos.herokuapp.com/api/product");
      const flowers: Flower[] = await response.json();
      return flowers;
    } catch (error) {
      return [];
    }
  }
}