window.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector("#header-hamburger");
  const mobileMenu = document.querySelector(".header-mobile-menu");
  const overlay = document.querySelector("#header-overlay");

  if (!hamburger || !mobileMenu || !overlay) {
    console.warn("요소가 존재하지 않습니다.");
    return;
  }

  // 햄버거 버튼 클릭 시
  hamburger.addEventListener("click", function () {
    mobileMenu.classList.add("active");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden"; // 스크롤 막기
  });

  // 오버레이 클릭 시 메뉴 닫기
  overlay.addEventListener("click", function () {
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = ""; // 스크롤 다시 활성화
  });
  // header mp3 play
  const bgm = document.getElementById("bgm");
  bgm.volume = 0.4;

  // 모바일에서 터치 시 음소거 해제
  document.addEventListener(
    "touchstart",
    () => {
      bgm.muted = false;
      bgm.play();
    },
    { once: true }
  );
  //웹에서 아무데나 클릭시 음소거 해제
  document.addEventListener(
    "click",
    () => {
      bgm.muted = false;
      bgm.play();
    },
    { once: true }
  );
  // 스크롤 이벤트
  const gifHeight = this.document.getElementById("gif").offsetHeight;

  setTimeout(() => {
    window.scrollBy({
      top: gifHeight,
      behavior: "smooth",
    });
  }, 17000);

  // // gotop 버튼
  //  const goTopBtn = this.document.querySelector(".gotop-btn");
  // goTopBtn.addEventListener("click", function () {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // });

  // this.window.addEventListener("scroll", function () {
  //   // console.log("스크롤시작");
  //   if (this.document.documentElement.scrollTop > 200) {
  //     goTopBtn.style.display = "block";
  //   } else {
  //     goTopBtn.style.display = "none";
  //   }
  // });
});
