function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => {
        images[item.replace('./', '')] = r(item);
    });
    return images

}

const images = importAll(require.context('../assets/furniture', false, /\.(png|jpe?g|svg)$/));

export const randomPicture = () => {
    return images[Object.keys(images)[Math.floor(Math.random() * Object.keys(images).length)]]
}
