const sidebar = document.querySelector('.sidebar');
const down = document.getElementById('down');
const header = document.getElementById('header');
const arr = ['.az', '.com', '.net', '.info', '.biz', '.org', '.us', '.in', '.ws', '.mobi', '.tv', '.me', '.ru', '.de', '.com.az', '.co', '.site.az', '.sayt.az', '.ureb.com', '.org.az', '.info.az', '.biz.az', '.net.az'];
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

function toggleSidebar() {
    sidebar.classList.toggle('active');
}

function toDown() {
    scrollTo({
        top: down.offsetTop - header.scrollHeight,
        behavior: "smooth"
    })
}

let kod = ''

deyish()

function deyish(){
    arr.map(item => {kod+= `<option>${item}</option>`})
    langs.innerHTML = kod
}

function changeBtn() {
    
}

let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
});

