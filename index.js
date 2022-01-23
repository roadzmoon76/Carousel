let indexNum = 1;
let rightButton = document.querySelector('.right-button');
let leftButton = document.querySelector('.left-button');
let mainImage = document.querySelector('.main-image');
let imageArray = [
    'images/image-1.png',
    'images/image-2.png',
    'images/image-3.png',
    'images/image-4.png',
    'images/image-5.png'
]
let bottomButton1 = document.querySelector('.bottom-button-1')
let bottomButton2 = document.querySelector('.bottom-button-2')
let bottomButton3 = document.querySelector('.bottom-button-3')
let bottomButton4 = document.querySelector('.bottom-button-4')
let bottomButton5 = document.querySelector('.bottom-button-5')

document.querySelector(`.bottom-icon-${indexNum}`).style.opacity = 1;


rightButton.addEventListener('click', nextImage);
leftButton.addEventListener('click', previousImage);

console.log(indexNum);

bottomButton1.addEventListener('click', indexImage (1));
bottomButton2.addEventListener('click', indexImage (2));
bottomButton3.addEventListener('click', indexImage (3));
bottomButton4.addEventListener('click', indexImage (4));
bottomButton5.addEventListener('click', indexImage (5));

console.log(indexNum);

function nextImage () {
    indexNum ++;

    if (indexNum === 6) {
        indexNum = 1;
    }

    mainImage.src = `images/image-${indexNum}.png`;
}

function previousImage () {
    indexNum --;

    if (indexNum === 0) {
        indexNum = 5;
    }

    mainImage.src = `images/image-${indexNum}.png`;
}

function indexImage (i) {
    indexNum = i;
    mainImage.src = `images/image-${i}.png`;
    document.querySelector(`.bottom-icon-${i}`).style.opacity = 1;
}