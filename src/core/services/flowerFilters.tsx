import { Flower } from "../domain/flower"

export function isSearchedFlower(flower: Flower, searchedText: string):boolean {
    if(searchedText === '')
      return true
    if(flower.name.toLowerCase().includes(searchedText.toLowerCase())) 
      return true
    return flower.binomialName.toLowerCase().includes(searchedText.toLowerCase())
}