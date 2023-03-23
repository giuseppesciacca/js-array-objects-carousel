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

const containerEl = document.querySelector('.container');
const prevBtnEl = document.getElementById('prev');
const nextBtnEl = document.getElementById('next');

images.forEach((element, i) => {
    const markUp = `
                <div class="card">
                    <div class="image position-relative">
                        <img src="./assets/${element.image}" alt="">

                        <nav>
                            <button id="prev" class="btn_left btn rounded-5 btn-outline-secondary position-absolute">
                                <i class="fa-solid fa-angle-left"></i>
                            </button>

                            <button id="next" class="btn_right btn btn-outline-secondary rounded-5 position-absolute">
                                <i class="fa-solid fa-angle-right"></i>
                            </button>
                        </nav>
                    </div>
                    <!-- /image -->

                    <div class="card-body">
                        <h5 class="card-title">${element.title}</h5>
                        <p class="card-text">${element.text}</p>
                    </div>
                    <!-- /.card-body -->

                </div>
                <!-- /card -->
            </div>
            <!-- /.wrapper -->
`
    containerEl.innerHTML = markUp;
});