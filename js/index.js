let getCurrentYear = new Date().getFullYear()
document.getElementById('currenYear').innerHTML = getCurrentYear

function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

// swiper.js for carousel
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    slidesPerView: 10,
    spaceBetween: 80,
    centeredSlides: false,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 0,
        slideShadows: false,
    },
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    },
});

