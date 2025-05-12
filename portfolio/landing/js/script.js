/******************** header ********************** */
const header = document.querySelector("header");

window.addEventListener("wheel", function (e) {
  const delta = e.deltaY;
  // console.log(delta);
  if (delta > 0) {
    header.style.transform = "translateY(-200px)";
  } else {
    header.style.transform = "translateY(0)";
  }
});

/******************** nav ********************** */
const sections = ["body", ".section2", ".section3"];
const sideMenu = document.querySelector(".sideMenu");
const navMenuItems = document.querySelectorAll("nav .navMenu li");
const sideMenuItems = document.querySelectorAll(".sideMenu .navMenu li");

// 공통 함수: 메뉴 클릭 시 스크롤 이동
function scrollToSection(index) {
  const offset = index === 1 ? -150 : 0;
  const target = document.querySelector(sections[index]);
  if (target) {
    const top = target.offsetTop + offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

// nav 메뉴 클릭 이벤트
navMenuItems.forEach((li, index) => {
  li.addEventListener("click", (e) => {
    e.preventDefault();
    scrollToSection(index);
  });
});

// side 메뉴 클릭 이벤트
sideMenuItems.forEach((li, index) => {
  li.addEventListener("click", (e) => {
    e.preventDefault();
    scrollToSection(index);
    sideMenu.classList.remove("on"); // 사이드 메뉴 닫기
  });
});

// 햄버거 메뉴 클릭 시 사이드 메뉴 열기
document.querySelector("nav .mOnly").addEventListener("click", function (e) {
  e.preventDefault();
  sideMenu.classList.add("on");
});

// 사이드 메뉴 닫기 버튼
document.querySelector(".sideMenu span").addEventListener("click", function () {
  sideMenu.classList.remove("on");
});


/******************** 타이핑효과 ********************** */
window.onload = function () {
  const text0 = document.getElementById("textType"); // 첫 줄
  const text1 = document.getElementById("textType2"); // 둘째 줄

  // 초기 typewriter (즉시 종료용)
  const typewriter0 = new Typewriter(text0, { loop: false });

  typewriter0
    .callFunction(() => {
      const typewriter1 = new Typewriter(text0, {
        loop: false,
        cursor: "", // 첫 줄엔 커서 숨김
        delay: 60,
      });

      typewriter1
        .typeString("즐겁게 배우며 계속 성장하는")
        .pauseFor(300)
        .callFunction(() => {
          const typewriter2 = new Typewriter(text1, {
            loop: false,
            delay: 60,
          });

          typewriter2
            .typeString("퍼블리셔 김주은입니다.")
            .callFunction(() => {
              // 타이핑 끝난 후 3초 기다렸다가 커서 천천히 사라지게
              setTimeout(() => {
                const cursors = document.querySelectorAll(
                  ".Typewriter__cursor"
                );
                cursors.forEach((cursor) => {
                  cursor.classList.add("fade-out");
                });
              }, 3000); // 3초 후 커서 페이드 아웃 시작
            })
            .start();
        })
        .start();
    })
    .start();
};

/******************** 글자회전 ********************** */
function renderRotatingText() {
  const text1 = "Work in progress,";
  const text2 = "just like the web.";
  const container = document.getElementById("circle-text");
  const wrapper = container.parentElement;
  const size = wrapper.offsetWidth;
  const radius = size / 2.1;

  const characters1 = text1.split("");
  const characters2 = text2.split("");
  const degStep1 = 180 / (characters1.length * 1.4);
  const degStep2 = 180 / (characters2.length * 1.4);

  container.innerHTML = "";

  characters1.forEach((char, i) => {
    const span = document.createElement("span");
    span.innerText = char;
    const angle = i * degStep1;
    span.style.transform = `
      rotate(${angle}deg)
      translate(${radius}px)
      rotate(90deg)
    `;
    container.appendChild(span);
  });

  characters2.forEach((char, i) => {
    const span = document.createElement("span");
    span.innerText = char;
    const angle = 180 + i * degStep2;
    span.style.transform = `
      rotate(${angle}deg)
      translate(${radius}px)
      rotate(90deg)
    `;
    container.appendChild(span);
  });
}

window.addEventListener("load", renderRotatingText);
window.addEventListener("resize", renderRotatingText);


/******************** 마우스커서 ********************** */
// 기본적으로 .cursor 보이게
let customCursor = document.querySelector(".cursor");

// 마우스 움직일 때 위치 이동
document.onmousemove = function (e) {
  customCursor.style.left = e.clientX + "px";
  customCursor.style.top = e.clientY + "px";
};

// section2 안에서는 커스텀 커서 ON
document.querySelectorAll(".section2 .itemList>li").forEach(function (v) {
  v.onmouseenter = function () {
    customCursor.classList.add("on");
    document.body.style.cursor = "none"; // 기본 커서 숨김
  };
  v.onmouseleave = function () {
    customCursor.classList.remove("on");
    document.body.style.cursor = "url('./img/mouse3.png'), auto"; // 다시 기본 커서
  };
});

/******************** AOS ********************** */
AOS.init({
  once: false,
});

function updateAOS() {
  const textboxes = document.querySelectorAll(".section2>ul>li");

  textboxes.forEach((textbox, k) => {
    if (window.innerWidth < 1024) {
      // textbox.setAttribute("data-aos-duration", "500");
      textbox.setAttribute("data-aos-delay", "0");
      textbox.setAttribute("data-aos-offset", "0");
    } else {
      // textbox.setAttribute("data-aos-duration", "800");
      textbox.setAttribute("data-aos-delay", "200");
      textbox.setAttribute("data-aos-offset", "150");
    }
  });

  AOS.refresh(); // 꼭 필요!
}

window.addEventListener("DOMContentLoaded", updateAOS);
window.addEventListener("resize", () => {
  // resize 성능 최적화를 위해 debounce 사용 (선택 사항)
  clearTimeout(window._aosResizeTimer);
  window._aosResizeTimer = setTimeout(updateAOS, 150);
});

/******************** top버튼 ********************** */
let topBtn = document.getElementById("topbtn");

topBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

window.addEventListener("scroll", () => {
  let scY = window.scrollY;

  if (scY <= 50) {
    topBtn.style.opacity = "0";
    topBtn.style.pointerEvents = "none";
    topBtn.style.transform = "translateX(100px)";
  } else {
    topBtn.style.opacity = "1";
    topBtn.style.pointerEvents = "auto";
    topBtn.style.transform = "translateX(0)";
  }
});
