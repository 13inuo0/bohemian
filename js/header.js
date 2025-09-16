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
});
