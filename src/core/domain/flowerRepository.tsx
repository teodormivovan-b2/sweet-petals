import { Flower } from '@/core/domain/flower';


export interface FlowerRepository {
  getAll: () => Promise<Flower[]>;
  getById: (id:string) => Promise<Flower >;
}