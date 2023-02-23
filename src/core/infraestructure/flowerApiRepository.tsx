import { Flower } from "@/core/domain/flower";
import { FlowerRepository } from "@/core/domain/flowerRepository";

export const apiFlowersRepository: FlowerRepository = {
  getAll: async (): Promise<Flower[]> => {
    try {
      const response = await fetch(
        "https://dulces-petalos.herokuapp.com/api/product"
      );
      const flowers: Flower[] = await response.json();
      return flowers;
    } catch (error) {
      return [];
    }
  },

  getById: async (id: string): Promise<Flower> => {
    const response = await fetch(
      `https://dulces-petalos.herokuapp.com/api/product/${id}`
    );
    const flower: Flower = await response.json();
    return flower;
  },
};
