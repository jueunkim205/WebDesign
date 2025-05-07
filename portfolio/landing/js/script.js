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


/******************** 마우스커서 ********************** */

// 기본적으로 .cursor 보이게
let customCursor = document.querySelector(".cursor");

// 마우스 움직일 때 위치 이동
document.onmousemove = function (e) {
  customCursor.style.left = e.clientX + "px";
  customCursor.style.top = e.clientY + "px";
};

// section2 안에서는 커스텀 커서 ON
document.querySelectorAll(".pImg").forEach(function (v) {
  v.onmouseenter = function () {
    customCursor.classList.add("on");
    document.body.style.cursor = "none"; // 기본 커서 숨김
  };
  v.onmouseleave = function () {
    customCursor.classList.remove("on");
    document.body.style.cursor = "url('./img/mouse3.png'), auto"; // 다시 기본 커서
  };
});

// aos
AOS.init({
  once: false,
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


let navLi = document.querySelectorAll('nav ul li')

navLi[0].addEventListener('click', function(e){
  e.preventDefault();
  window.scrollTo({ top: document.querySelector('body').offsetTop, behavior: 'smooth' })
})

navLi[1].addEventListener('click', function(e){
  e.preventDefault();
  window.scrollTo({ top: document.querySelector('.section2').offsetTop - '150', behavior: 'smooth' })
})
navLi[2].addEventListener('click', function(e){
  e.preventDefault();
  window.scrollTo({ top: document.querySelector('.section3').offsetTop, behavior: 'smooth' })
})