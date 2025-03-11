const sidebar = document.querySelector('.sidebar');
const down = document.getElementById('down');
const header = document.getElementById('header');
const arr = ['.az', '.com', '.net', '.info', '.biz', '.org', '.us', '.in', '.ws', '.mobi', '.tv', '.me', '.ru', '.de', '.com.az', '.co', '.site.az', '.sayt.az', '.ureb.com', '.org.az', '.info.az', '.biz.az', '.net.az'];
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

const calc = document.getElementById('calc')
const calcSearch = document.getElementById('calcSearch')
const calcelect = document.getElementById('calcelect')
const pages = document.getElementById('pages')
const input1 = document.querySelector('#input1')
const input2 = document.querySelector('#input2')
const input3 = document.getElementById('input3')
const prices = document.getElementById('price')
const prices4 = document.getElementById('prices4')    
const prices2 = document.getElementById('prices2')    
const prices3 = document.getElementById('prices3')    

const stat = document.getElementById('stat')
const stat1 = document.getElementById('stat1')
const stat2 = document.getElementById('stat2')
const stat3 = document.getElementById('stat3')
const stat4 = document.getElementById('stat4')
const totalpr = document.getElementById('totalpr')
let ntc = 0
let range = 0
let range1 = 0
let range2 = 0

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

change()

function change(){
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

let swiper1 = new Swiper(".slider2", {
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
        delay: 3000,
        disableOnInteraction: false,
    },
});



function calculator(){
    rangeData.map(item => {
        calc.innerHTML += `
                        <label class="relative flex cursor-pointer justify-between items-center">
                            <span class="text-sm font-medium text-gray-900">${item.name}</span>
                            <input onclick="changePrice(this, ${item.price})" type="checkbox" id="${item.id}">
                        </label>
        `
    })

    checkData.map(item => {
        calcSearch.innerHTML += `
                           <div class="flex items-center mr-2 cursor-pointer">
                                <input onclick="changePrice2(this, ${item.price})" type="checkbox" id="${item.id}" />
                              <p class="p-2">${item.name}</p>
                            </div> 
                        `
    })
    eccomerceData.map(item => {
        calcelect.innerHTML += `
                        <label class="relative flex cursor-pointer justify-between items-center">
                            <span class="text-sm font-medium text-gray-900">${item.name}</span>
                            <input onclick="changePrice3(this, ${item.price})" type="checkbox" id="${item.id}"> 
                        </label> 
                        `
    })
   }
   calculator()
   let inputs = 0

   function change1() {
    const pageCount = +input1.value;
    const complexity = +input2.value;
    const total = (pageCount * 100) * complexity;
    pages.innerHTML = `${pageCount} səhifə / ${total} ₼`;
    stat.innerHTML = `₼ ${total}`;
    totalCalc();
}

    change1()

    
    function changePrice(elem, price) {
        range += elem.checked ? price : -price;
        prices.innerHTML = `₼ ${range}`;
        stat1.innerHTML = `₼ ${range}`;
        totalCalc();
    }
    
    function changePrice2(elem, price) {
        range1 += elem.checked ? price : -price;
        prices2.innerHTML = `₼ ${range1}`;
        stat2.innerHTML = `₼ ${range1}`;
        totalCalc();
    }
    
    function changePrice3(elem, price) {
        range2 += elem.checked ? price : -price;
        prices3.innerHTML = `₼ ${range2}`;
        stat3.innerHTML = `₼ ${range2}`;
        totalCalc();
    }

    function logoinp() {
        const logoPrice = input3.value * 100;
        prices4.innerHTML = `₼ ${logoPrice}`;
        stat4.innerHTML = `₼ ${logoPrice}`;
        totalCalc();
    }

    function totalCalc() {
        const pageCount = +input1.value;
        const complexity = +input2.value;
        const totalPages = (pageCount * 100) * complexity;
        const total = range + range1 + range2 + (input3.value * 100) + totalPages;
        totalpr.innerHTML = total < 450 ? `₼ 450` : `₼ ${total}`;
    }
    totalCalc()