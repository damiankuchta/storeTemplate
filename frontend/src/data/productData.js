import {randomPicture} from "../utils/randomPicture";
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

class randomVariant {
    constructor() {
        this.variantID = Math.floor((Math.random() * 100))
        this.price = Math.floor((Math.random() * 300))
        this.image = randomPicture()
        this.isInStock = Math.random() >= 0.3
        this.subtitle = lorem.generateWords(Math.floor((Math.random() * 2) + 1))
    }
}

export class randomProduct {
    constructor() {
        this.title = lorem.generateWords(Math.floor((Math.random() * 3) + 1))
        this.raiting = Math.floor(Math.random() * 6)
        this.description = lorem.generateParagraphs(Math.floor((Math.random() * 7) + 1))
        this.productID = Math.floor((Math.random() * 100))
        this.variants = [...Array((Math.floor(Math.random() * 8 ))+ 1).keys()].map(() => (new randomVariant()))
        this.fromPrice = Math.min(...this.variants.map(item => (item.price)))
    }
}

export const productsList = [...Array(Math.floor(Math.random() * 50 )+ 10)].map(() => ( new randomProduct()))
