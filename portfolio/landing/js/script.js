$(document).ready(function () {
  $("#fullpage").fullpage({
    verticalCentered: true,
    menu: "#menu",
  });
});

/******************** header ********************** */
const header = document.querySelector("header");

window.addEventListener('wheel', function (e){
  const delta = e.deltaY;
  console.log(delta);
  if (delta > 0) {
    header.style.transform = "translateY(-200px)";
  } else {
    header.style.transform = "translateY(0)";
  }
})

/******************** 타이핑효과 ********************** */
window.onload = function () {
  const text0 = document.getElementById("textType"); // 첫 줄
  const text1 = document.getElementById("textType2"); // 둘째 줄

  // 첫 단계: 초기 typewriter (즉시 종료용)
  const typewriter0 = new Typewriter(text0, { loop: false });

  typewriter0
    .callFunction(() => {
      // 첫 줄 입력
      const typewriter1 = new Typewriter(text0, {
        loop: false,
        cursor: "", // 커서 숨김
        delay: 60,
      });

      typewriter1
        .typeString("즐겁게 배우며 계속 성장하는")
        .pauseFor(300)
        .callFunction(() => {
          // 둘째 줄 입력
          const typewriter2 = new Typewriter(text1, { loop: false, delay: 60 });

          typewriter2
            .typeString("퍼블리셔 김주은입니다.")
            .callFunction(() => {
              // 타이핑 종료 후 5초 뒤 커서 서서히 사라지기
              setTimeout(() => {
                const cursors = document.querySelectorAll(
                  ".Typewriter__cursor"
                );
                cursors.forEach((cursor) => {
                  cursor.classList.add("fade-out"); // 애니메이션 시작
                  setTimeout(() => {
                    cursor.style.display = "none"; // 완전히 제거
                  }, 1000); // fade-out과 일치
                });
              }, 3000);
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
document.querySelectorAll("#section1 ul li").forEach(function (v, k) {
  v.onmouseenter = function () {
    document.querySelector(".cursor").classList.add("on");
  };
  v.onmouseleave = function () {
    document.querySelector(".cursor").classList.remove("on");
  };
});


// aos
AOS.init({
  once: false 
});