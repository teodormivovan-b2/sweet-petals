import { FlowerRepository } from "@/domain/flowerRepository";

export class FlowerService {
  private flowersRepository: FlowerRepository;
  
  constructor(flowerRepository: FlowerRepository) {
    this.flowersRepository = flowerRepository;
  }
  
  getAll() {
    return this.flowersRepository.getAll();
  }
}