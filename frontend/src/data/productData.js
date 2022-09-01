import {randomPicture} from "../utils/randomPicture";

const product = {
    title: "Random title",
    rating: 5,
    description: "Nulla ac convallis lorem, eget euismod nisl. Donec in libero sit amet mi vulputate consectetur. Donec auctor interdum purus, ac finibus massa bibendum nec.",
    variants: [
        {
            variantId: 1,
            price: 200,
            image: randomPicture(),
            isInStock: true
        },
        {
            variantId: 2,
            price: 200,
            image: randomPicture(),
            isInStock: false
        },
        {
            variantId: 3,
            price: 200,
            image: randomPicture(),
            isInStock: false
        },
        {
            variantId: 4,
            price: 200,
            image: randomPicture(),
            isInStock: true
        },
    ]
}

export default product