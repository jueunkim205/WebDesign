/******************** header ********************** */
const header = document.querySelector("header");

window.addEventListener("wheel", function (e) {
  const delta = e.deltaY;
  console.log(delta);
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

document.onmousemove = function (e) {
  document.querySelector(".cursor").style.left = e.clientX + "px";
  document.querySelector(".cursor").style.top = e.clientY + "px";
};
document.querySelectorAll(".section2 ul li").forEach(function (v, k) {
  v.onmouseenter = function () {
    document.querySelector(".cursor").classList.add("on");
  };
  v.onmouseleave = function () {
    document.querySelector(".cursor").classList.remove("on");
  };
});

// aos
AOS.init({
  once: false,
});
