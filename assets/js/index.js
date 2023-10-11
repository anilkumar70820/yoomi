// =======navbar script==========
const a = document.getElementById("nav")
const b = document.getElementById("change")
function navresponsive() {
    a.classList.toggle("show")
    document.body.classList.toggle("overflow_hidden")
    b.classList.toggle("change")
}
// =======navbar script End==========
// =========Preloader Script=================
const preloader = document.getElementById("preloader")
setTimeout(() => {
    preloader.classList.add("d-none")
    preloader.classList.add("pointer-event-none")
    document.body.classList.remove("overflow-hidden")
}, 3000)
// =========Preloader Script End=================
// ===========Our Feature Slider Script============
$('.our_feature').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: ".f_next",
    prevArrow: ".f_pre",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
// ===========Our Feature Slider Script End============
// ===============Partners===========
$('.partners').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1.3,
                slidesToScroll: 1
            }
        }
    ]
});
// ===============Partners End===========
// ==============Our Clients==============
$('.our_clients').slick({
    dots: false,
    infinite: true,
    autoplaySpeed: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: ".next",
    prevArrow: ".pre"
});
// ==============Our Clients End==============
// =============Back to top===========
let mybutton = document.getElementById("back-top");
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// =============Back to top end===========
// ===========AOS==========
AOS.init({
    once: true,
});
// ===========AOS End==========