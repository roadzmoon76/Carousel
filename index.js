let indexNum = 1;
let rightButton = document.querySelector('.right-button');
let leftButton = document.querySelector('.left-button');
let mainImage = document.querySelector('.main-image');
let bottomButton1 = document.querySelector('.bottom-button-1')
let bottomButton2 = document.querySelector('.bottom-button-2')
let bottomButton3 = document.querySelector('.bottom-button-3')
let bottomButton4 = document.querySelector('.bottom-button-4')
let bottomButton5 = document.querySelector('.bottom-button-5')

document.querySelector(`.bottom-icon-${indexNum}`).style.opacity = 1;


rightButton.addEventListener('click', nextImage);
leftButton.addEventListener('click', previousImage);

document.querySelector('.bottom-button-1').addEventListener('click', function () {
    indexImage(1);
});
document.querySelector('.bottom-button-2').addEventListener('click', function () {
    indexImage(2);
});
document.querySelector('.bottom-button-3').addEventListener('click', function () {
    indexImage(3);
});
document.querySelector('.bottom-button-4').addEventListener('click', function () {
    indexImage(4);
});
document.querySelector('.bottom-button-5').addEventListener('click', function () {
    indexImage(5);
});

function nextImage () {
    document.querySelector(`.bottom-icon-${indexNum}`).style.opacity = 0.3;
    indexNum ++;

    if (indexNum === 6) {
        indexNum = 1;
    }

    document.querySelector(`.bottom-icon-${indexNum}`).style.opacity = 1;
    mainImage.src = `images/image-${indexNum}.png`;
}

function previousImage () {
    document.querySelector(`.bottom-icon-${indexNum}`).style.opacity = 0.3;
    indexNum --;

    if (indexNum === 0) {
        indexNum = 5;
    }

    document.querySelector(`.bottom-icon-${indexNum}`).style.opacity = 1;
    mainImage.src = `images/image-${indexNum}.png`;
}

function indexImage (j) {
    for (let i = 1; i <= 5; i++) {
        document.querySelector(`.bottom-icon-${i}`).style.opacity = 0.3;
    }
    
    indexNum = j;
    mainImage.src = `images/image-${j}.png`;
    document.querySelector(`.bottom-icon-${j}`).style.opacity = 1;
}