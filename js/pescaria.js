const banners = document.getElementById("slides-elem");
const banner = document.querySelectorAll("#slides-elem div");
const setaEsq = document.getElementById("setinhaEsquerda");
const setaDir = document.getElementById("setinhaDireita");
const navBanner = document.querySelectorAll(".barra");

let indexBanner = 0;

function bannerCarrosel(tipoScroll) {
    if (tipoScroll == 0) {
        indexBanner++;
    }
    else {
        indexBanner--;
    }

    if (indexBanner > banner.length - 1) {
        indexBanner = 0;
    }
    else if (indexBanner < 0) {
        indexBanner = banner.length - 1;
    }

    banners.style.transform = `translateX(${-indexBanner * 100}%)`;
    for (i = 0; i < navBanner.length; i++) {
        navBanner[i].style.background = `var(--corCinzaClaro)`;
    }
    navBanner[indexBanner].style.background = `var(--corLaranja)`;
    

}