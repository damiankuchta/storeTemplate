import {randomPicture} from "../utils/randomPicture";

import lorem from "../utils/loremIpsumGenerator"

export class randomVariant {
    constructor(title) {
        this.variantID = Math.floor((Math.random() * 100))
        this.price = Math.floor((Math.random() * 300))
        this.image = randomPicture()
        this.isInStock = Math.random() >= 0.3
        this.title = title + ` (${lorem.generateWords(Math.floor((Math.random() * 2) + 1))})`
    }

    toJSON() {
        const {variantID, price, image, isInStock, title} = this
        return {variantID, price, image, isInStock, title}

    }

}

export class randomProduct {
    constructor() {
        this.title = lorem.generateWords(Math.floor((Math.random() * 3) + 1))
        this.rating = Math.floor(Math.random() * 6)
        this.description = lorem.generateParagraphs(Math.floor((Math.random() * 7) + 1))
        this.productID = Math.floor((Math.random() * 100))
        this.variants = [...Array((Math.floor(Math.random() * 8)) + 1).keys()].map(() => (new randomVariant(this.title)).toJSON())
        this.fromPrice = Math.min(...this.variants.map(item => (item.price)))
    }

    toJSON() {
        const {title, rating, description, productID, variants, fromPrice} = this
        return {title, rating, description, productID, variants, fromPrice}
    }
}

export const productsList = [...Array(Math.floor(Math.random() * 50) + 10)].map(() => (new randomProduct()))
