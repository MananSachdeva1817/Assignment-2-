const images = [
    {
        large: "images/flowers-pink-large.jpg",
        small: "images/flowers-pink-small.jpg",
        caption: "Pink Flower",
    },
    {
        large: "images/flowers-purple-large.jpg",
        small: "images/flowers-purple-small.jpg",
        caption: "Purple Flower",
    },
    {
        large: "images/flowers-red-large.jpg",
        small: "images/flowers-red-small.jpg",
        caption: "Red Flower",
    },
    {
        large: "images/flowers-white-large.jpg",
        small: "images/flowers-white-small.jpg",
        caption: "White Flower",
    },
    {
        large: "images/flowers-yellow-large.jpg",
        small: "images/flowers-yellow-small.jpg",
        caption: "Yellow Flower",
    }

];

function showImage(index) {
    const featuredImage = document.querySelector("#featured");
    const caption = document.querySelector("#caption");
    featuredImage.src = images[index].large;
    caption.textContent = images[index].caption;
}

images.forEach((image, index) => {
    const thumb = document.querySelector(`#thumb${index + 1}`);
    thumb.src = image.small;
    thumb.alt = image.caption;
    thumb.addEventListener("click", () => showImage(index));
});

showImage(0);
