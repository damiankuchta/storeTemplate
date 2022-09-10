import {randomPicture} from "../utils/randomPicture";

import lorem from "../utils/loremIpsumGenerator"
import colors from "./colors";
import randomIntInRange from "../utils/randomIntInRange";
import categories from "./categories";
import brands from "./brands";



export class randomVariant {
    constructor(title) {
        this.variantID = randomIntInRange(100)
        this.price = randomIntInRange(300)
        this.image = randomPicture()
        this.isInStock = randomIntInRange() >= 0.3
        this.title = title + ` (${lorem.generateWords(randomIntInRange(1, 2))}`
        this.color = Object.keys(colors)[randomIntInRange(colors.length-1)]
    }

    toJSON() {
        const {variantID, price, image, isInStock, title, color} = this
        return {variantID, price, image, isInStock, title, color}
    }
}

export class randomProduct {
    constructor() {
        this.title = lorem.generateWords(randomIntInRange(3, 1))
        this.rating = randomIntInRange(6)
        this.description = lorem.generateParagraphs(randomIntInRange(6,1 ))
        this.productID = randomIntInRange(100)
        this.variants = [...Array(randomIntInRange(8,1)).keys()].map(() => (new randomVariant(this.title)).toJSON())
        this.fromPrice = Math.min(...this.variants.map(item => (item.price)))
        this.category = Object.keys(categories)[randomIntInRange(categories.length-1)]
        this.brand = Object.keys(brands)[randomIntInRange(brands.length-1)]
    }

    toJSON() {
        const {title, rating, description, productID, variants, fromPrice, category, brand} = this
        return {title, rating, description, productID, variants, fromPrice, category, brand}
    }
}

export const productsList = [...Array(randomIntInRange(50, 10))].map(() => {
    return new randomProduct().toJSON();
})
