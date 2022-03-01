const banners = document.getElementById("banElements");
const banner = document.querySelectorAll("#banElements div");

let indexBanner = 0;

function bannerCarrosel() {
    indexBanner++;
    
    if (indexBanner > banner.length - 1) {
        indexBanner = 0;
    }

    banners.style.transform = `translateX(${-indexBanner * 100}%)`;
    
}

setInterval(bannerCarrosel,3000);