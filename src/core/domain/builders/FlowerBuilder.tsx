import { Flower } from "@/core/domain/flower";

export function FlowerBuilder() {
  const defaults: Flower = {
    id: "irrelevantId",
    name: "irrelevantName",
    binomialName: "irrelevantBinomialName",
    price: 0,
    imgUrl: "company-icon.svg",
    wateringsPerWeek: 1,
    fertilizerType: "nitrogen",
    heightInCm: 1,
  };

  return {
    withName(name: string) {
      defaults.name = name;
      return this;
    },
    withBinomialName(binomialName: string) {
      defaults.binomialName = binomialName;
      return this;
    },
    build() {
      return defaults;
    },
  };
}
