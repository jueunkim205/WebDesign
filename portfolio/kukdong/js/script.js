let nav = document.querySelector("nav");
let mainMenu = document.querySelector(".mainMenu");
let mainMenuLi = document.querySelectorAll(".mainMenu li");
let subMenu = document.querySelector(".subMenu");
let subMenuItem = document.querySelectorAll(".subMenuItem");
let topBtn = document.getElementById("topbtn");




function addClass(k) {
  // 순서에 해당하는 sub메뉴 클래스 추가
  subMenuItem.forEach(function (item, index) {
    mainMenuLi[k].querySelector("a").classList.add("on");
    subMenuItem[k].classList.add("on");
  });
}

// 순서에 해당하는 sub메뉴 클래스 삭제
function rmClass() {
  subMenuItem.forEach(function (v, k) {
    mainMenuLi[k].querySelector("a").classList.remove("on");
    subMenuItem[k].classList.remove("on");
  });
}

// nav.classList.remove('on');

// 메인메뉴 리스트에 마우스 올릴때마다
mainMenuLi.forEach(function (v, k) {
  v.onmouseenter = function () {
    rmClass();
    addClass(k);
    mainMenuLi[k].querySelector("a").classList.add("on");
  };
});

// mainMenu에서 mouseleave할때마다 subMenu도 사라져야 하지만
// subMenu에 mouseenter할때는 subMenu가 사라지면 안됨
mainMenu.addEventListener("mouseenter", function () {
  nav.classList.add("on");
});

mainMenu.addEventListener("mouseleave", function () {
  nav.classList.remove("on");

  subMenu.addEventListener("mouseenter", function () {
    nav.classList.add("on");
  });
  subMenu.addEventListener("mouseleave", function () {
    nav.classList.remove("on");
  });
});

// top버튼
topBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// 전체메뉴
let openBtn = document.getElementById("open");
let closeBtn = document.getElementById("close");
let allMenu = document.getElementById("allMenu");
let darkbg = document.querySelector(".darkbg");

openBtn.addEventListener("click", function () {
  allMenu.classList.add("on");
  darkbg.classList.add("on");
});

closeBtn.addEventListener("click", function () {
  allMenu.classList.remove("on");
  darkbg.classList.remove("on");
});

darkbg.addEventListener("click", function () {
  allMenu.classList.remove("on");
  darkbg.classList.remove("on");
});



// 포트폴리오

var swiper = new Swiper(".mySwiper", {
  // loop: true,
  effect: "fade",
  spaceBetween: 40,
  observer: true,
  observeParents: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let upBtn = document.querySelectorAll("#upBtn button");
let downCon = document.querySelectorAll("#downCon .swiper");

upBtn[0].classList.add("on");
downCon[0].classList.add("on");

function rmClass() {
  upBtn.forEach(function (v, k) {
    v.classList.remove("on");
  });

  downCon.forEach(function (v, k) {
    downCon[k].classList.remove("on");
  });
}

upBtn.forEach(function (v, k, allItem) {
  v.onclick = function () {
    rmClass();
    this.classList.add("on");

    downCon.forEach(function (item, index) {
      downCon[k].classList.add("on");
    });
  };
});