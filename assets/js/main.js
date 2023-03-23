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
const thumbnailsEl = document.querySelector('.thumbnails');

let activeImg = 0;

images.forEach((element, i) => {
    const markUpImg = `<img class="jumbo_el ${i === activeImg ? 'active' : ''}" src="./assets/${element.image}" alt="${element.title}">`;
    const markUpCardBody = `
                    <h5 class="jumbo_el card-title ${i === activeImg ? 'active' : ''}">${element.title}</h5>
                    <p class="jumbo_el card-text ${i === activeImg ? 'active' : ''}">${element.text}</p>`;
    const thumbsImgMarkUp = `                        
                    <div class="col-auto">
                        <img class="thumb_img ${i === activeImg ? 'active_thumb' : ''}" src="./assets/${element.image}" alt="${element.title}">
                    </div>`;
    imageDomEl.innerHTML += markUpImg;
    cardEl.innerHTML += markUpCardBody;
    thumbnailsEl.innerHTML += thumbsImgMarkUp;
});

/* EVENTI PER CAMBIARE IMMAGINI E TESTI CON CLICK */
const allImgs = document.querySelectorAll('img.jumbo_el');
const allTitleImgs = document.querySelectorAll('h5.jumbo_el');
const allTextImgs = document.querySelectorAll('p.jumbo_el');
const allThumbnailsEl = document.querySelectorAll('.thumb_img');

allThumbnailsEl.forEach((element, i) => {
    element.addEventListener('click', function () {
        let actualImg = allImgs[activeImg];
        let actualTitle = allTitleImgs[activeImg];
        let actualText = allTextImgs[activeImg];
        let actualThumb = allThumbnailsEl[activeImg];

        removeClassActive(actualImg, actualTitle, actualText, actualThumb);

        activeImg = i;

        let nextImg = allImgs[activeImg];
        let nextTitle = allTitleImgs[activeImg];
        let nextText = allTextImgs[activeImg];
        let nextThumb = allThumbnailsEl[activeImg];

        addClassActive(nextImg, nextTitle, nextText, nextThumb);
    })
})

const nextBtnEl = document.getElementById('next');
nextBtnEl.addEventListener('click', function () {
    let actualImg = allImgs[activeImg];
    let actualTitle = allTitleImgs[activeImg];
    let actualText = allTextImgs[activeImg];
    let actualThumb = allThumbnailsEl[activeImg];

    activeImg++;
    removeClassActive(actualImg, actualTitle, actualText, actualThumb);

    if (activeImg > images.length - 1) {
        activeImg = 0;
    }

    let nextImg = allImgs[activeImg];
    let nextTitle = allTitleImgs[activeImg];
    let nextText = allTextImgs[activeImg];
    let nextThumb = allThumbnailsEl[activeImg];

    addClassActive(nextImg, nextTitle, nextText, nextThumb);

    //console.log(activeImg);
})

const prevBtnEl = document.getElementById('prev');
prevBtnEl.addEventListener('click', function () {
    let actualImg = allImgs[activeImg];
    let actualTitle = allTitleImgs[activeImg];
    let actualText = allTextImgs[activeImg];
    let actualThumb = allThumbnailsEl[activeImg];

    activeImg--;
    removeClassActive(actualImg, actualTitle, actualText, actualThumb);

    if (activeImg < 0) {
        activeImg = (allImgs.length - 1);
    }

    let nextImg = allImgs[activeImg];
    let nextTitle = allTitleImgs[activeImg];
    let nextText = allTextImgs[activeImg];
    let nextThumb = allThumbnailsEl[activeImg];

    addClassActive(nextImg, nextTitle, nextText, nextThumb);

    //console.log(activeImg);
})

const reverseBtnEl = document.getElementById('reverse');
const pauseBtnEl = document.getElementById('pause');
const playBtnEl = document.getElementById('play');
playBtnEl.addEventListener('click', function () {
    toggleClassDNone()

    const playInterval = setInterval(() => {
        let actualImg = allImgs[activeImg];
        let actualTitle = allTitleImgs[activeImg];
        let actualText = allTextImgs[activeImg];
        let actualThumb = allThumbnailsEl[activeImg];

        activeImg++;
        removeClassActive(actualImg, actualTitle, actualText, actualThumb);

        if (activeImg > images.length - 1) {
            activeImg = 0;
        }

        let nextImg = allImgs[activeImg];
        let nextTitle = allTitleImgs[activeImg];
        let nextText = allTextImgs[activeImg];
        let nextThumb = allThumbnailsEl[activeImg];

        addClassActive(nextImg, nextTitle, nextText, nextThumb);

        pauseBtnEl.addEventListener('click', function () {
            clearInterval(playInterval)
        })
    }, 3000);
})

reverseBtnEl.addEventListener('click', function () {
    toggleClassDNone()

    const reverseInterval = setInterval(() => {
        let actualImg = allImgs[activeImg];
        let actualTitle = allTitleImgs[activeImg];
        let actualText = allTextImgs[activeImg];
        let actualThumb = allThumbnailsEl[activeImg];

        activeImg--;
        removeClassActive(actualImg, actualTitle, actualText, actualThumb);

        if (activeImg < 0) {
            activeImg = (allImgs.length - 1);
        }

        let nextImg = allImgs[activeImg];
        let nextTitle = allTitleImgs[activeImg];
        let nextText = allTextImgs[activeImg];
        let nextThumb = allThumbnailsEl[activeImg];

        addClassActive(nextImg, nextTitle, nextText, nextThumb);

        pauseBtnEl.addEventListener('click', function () {
            clearInterval(reverseInterval)
        })
    }, 3000);
})

pauseBtnEl.addEventListener('click', function () {
    toggleClassDNone()
})

/* FUNCTIONS */
function removeClassActive(actualImg, actualTitle, actualText, actualThumb) {
    actualImg.classList.remove('active');
    actualTitle.classList.remove('active');
    actualText.classList.remove('active');
    actualThumb.classList.remove('active_thumb')
}

function addClassActive(nextImg, nextTitle, nextText, nextThumb) {
    nextImg.classList.add('active');
    nextTitle.classList.add('active');
    nextText.classList.add('active');
    nextThumb.classList.add('active_thumb')
}

function toggleClassDNone() {
    reverseBtnEl.classList.toggle('d-none')
    playBtnEl.classList.toggle('d-none')
    pauseBtnEl.classList.toggle('d-none')
}