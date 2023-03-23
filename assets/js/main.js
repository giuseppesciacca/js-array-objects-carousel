const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const imageDomEl = document.querySelector('.image');
const cardEl = document.querySelector('.card-body');
const thumbnailsEl = document.getElementById('thumbnails');

let activeImg = 0;

images.forEach((element, i) => {
    const markUpImg = `<img class="jumbo_el ${i === activeImg ? 'active' : ''}" src="./assets/${element.image}" alt="${element.title}">`;
    const markUpCardBody = `
                    <h5 class="jumbo_el card-title ${i === activeImg ? 'active' : ''}">${element.title}</h5>
                    <p class="jumbo_el card-text ${i === activeImg ? 'active' : ''}">${element.text}</p>
                <!-- /.card-body -->`;
    const thumbsImgMarkUp = `                        
                        <div class="container">
                            <div class="row position-absolute flex-column">
                                <div class="col-5">
                                    <img src="./assets/${element.image}" alt="${element.title}">
                                </div>
                            </div>
                        </div>`;
    imageDomEl.innerHTML += markUpImg;
    cardEl.innerHTML += markUpCardBody;
    thumbnailsEl.innerHTML += thumbsImgMarkUp;
    console.log(thumbnailsEl.innerHTML += thumbsImgMarkUp);
});

const allImgs = document.querySelectorAll('img');
const allTitleImgs = document.querySelectorAll('h5');
const allTextImgs = document.querySelectorAll('p');

const nextBtnEl = document.getElementById('next');
nextBtnEl.addEventListener('click', function () {
    let actualImg = allImgs[activeImg];
    let actualTitle = allTitleImgs[activeImg];
    let actualText = allTextImgs[activeImg];

    activeImg++;
    actualImg.classList.remove('active');
    actualTitle.classList.remove('active');
    actualText.classList.remove('active');

    if (activeImg > images.length - 1) {
        activeImg = 0;
    }

    let nextImg = allImgs[activeImg];
    let nextTitle = allTitleImgs[activeImg];
    let nextText = allTextImgs[activeImg];
    nextImg.classList.add('active');
    nextTitle.classList.add('active');
    nextText.classList.add('active');

    //console.log(activeImg);
})

const prevBtnEl = document.getElementById('prev');
prevBtnEl.addEventListener('click', function () {
    let actualImg = allImgs[activeImg];
    let actualTitle = allTitleImgs[activeImg];
    let actualText = allTextImgs[activeImg];

    activeImg--;
    actualImg.classList.remove('active');
    actualTitle.classList.remove('active');
    actualText.classList.remove('active');

    if (activeImg < 0) {
        activeImg = (allImgs.length - 1);
    }

    let nextImg = allImgs[activeImg];
    let nextTitle = allTitleImgs[activeImg];
    let nextText = allTextImgs[activeImg];
    nextImg.classList.add('active');
    nextTitle.classList.add('active');
    nextText.classList.add('active');

    //console.log(activeImg);
})