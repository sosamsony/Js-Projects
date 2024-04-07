const image = document.querySelector('img')
const button = document.querySelector('.btn')
let imageLink = 'https://random.imagecdn.app/500/150'

const updateImage = () => {
    const timestamp = new Date().getTime();
    imageLink = `https://random.imagecdn.app/500/150?t=${timestamp}`;
    image.setAttribute('src', imageLink);
    console.log(timestamp);
}

button.addEventListener("click", updateImage);
updateImage()