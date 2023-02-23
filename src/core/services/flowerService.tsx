import { FlowerRepository } from "@/core/domain/flowerRepository";

export class FlowerService {
  private flowersRepository: FlowerRepository;

  constructor(flowerRepository: FlowerRepository) {
    this.flowersRepository = flowerRepository;
  }

  getAll() {
    return this.flowersRepository.getAll();
  }

  getById(id: string) {
    return this.flowersRepository.getById(id);
  }
}
