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
const prevBtnEl = document.getElementById('prev');


let activeImg = 0;

images.forEach((element, i) => {
    const markUpImg = `<img class="${i === activeImg ? 'active' : ''}" src="./assets/${element.image}" alt="${element.title}">`
    const markUpCardBody = `
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text">${element.text}</p>
                <!-- /.card-body -->`
    imageDomEl.innerHTML += markUpImg;
    cardEl.innerHTML = markUpCardBody;
});

const allImgs = document.querySelectorAll('img')
const nextBtnEl = document.getElementById('next');

nextBtnEl.addEventListener('click', function () {
    let actualImg = allImgs[activeImg];
    activeImg++
    actualImg.classList.remove('active');

    if (activeImg > images.length - 1) {
        activeImg = 0;
    }

    let nextImg = allImgs[activeImg];
    nextImg.classList.add('active');

    console.log(activeImg);
})