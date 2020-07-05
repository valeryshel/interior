let sliderFirst = document.querySelector('.slider');
let pgn = sliderFirst.querySelector('.slider__pagination');
let pgnBtn = [];
let sliderImgItem = sliderFirst.querySelector('.slider-img-item');

let addClick = function (pgnButton, image, alt) {
    pgnButton.addEventListener('click', function () {
        sliderImgItem.src = image;
        sliderImgItem.alt = alt;
        for(let i=0; i<pgnBtn.length; i++) {
            pgnBtn[i].classList.remove('slider__pagination-link-active');
        }
        pgnButton.classList.add('slider__pagination-link-active')
    });
}

sliderImgItem.src = images[0];
sliderImgItem.alt = alt[0];
for (let i=0; i<images.length; i++) {
    pgnBtn[i] = document.createElement("div");
    pgnBtn[i].href = '#';
    pgnBtn[i].classList.add('slider__pagination-link');
    pgnBtn[i].id = 'slider__pagination-link-' + (i+1);
    pgn.appendChild(pgnBtn[i]);
    addClick(pgnBtn[i], images[i], alt[i]);
}

pgnBtn[0].classList.add('slider__pagination-link-active');