const banners = document.getElementById("banElements");
const banner = document.querySelectorAll("#banElements div");
const setaEsq = document.getElementById("setinhaEsquerda");
const setaDir = document.getElementById("setinhaDireita");
const navBanner = document.querySelectorAll(".banner_nav_ponto");

let indexBanner = 0;
navBanner[indexBanner].style.background = `var(--corLaranja)`;
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
        navBanner[i].style.background = `var(--corBranco)`;
    }
    navBanner[indexBanner].style.background = `var(--corLaranja)`;

}

// setInterval(bannerCarrosel,15000); É uma boa colocar um scroll automatico tbm?
