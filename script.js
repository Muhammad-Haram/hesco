// navbar js 
let menu = document.querySelector("#nav-menu");
let close = document.querySelector("#close");
let nav = document.querySelector(".nav-menu");

if (menu) {
    menu.addEventListener("click", () => {
        nav.classList.add("active");
    })
}

if (close) {
    close.addEventListener("click", () => {
        nav.classList.remove("active");
    });
}

// swiper js
var swiper = new Swiper(".mySwiper", {
    autoplay: {
        delay: 1800,
        disableOnInteraction: false,
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
    }
});

// form submit msg
let form = document.querySelector('.form-section');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let msgBox = document.querySelector(".msg-box");
    msgBox.style.display = "flex";

    setTimeout(() => {
        msgBox.style.display = "none";
    }, 3000);
});