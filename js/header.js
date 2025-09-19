window.addEventListener("DOMContentLoaded", function () {
  const aTag = this.document.querySelectorAll("a");
  aTag.forEach((a) => {
    a.addEventListener("click", (e) => {
      if (a.getAttribute("href") === "#") {
        e.preventDefault();
      }
    });
  });
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


  // 스크롤 이벤트
  setTimeout(() => {
  if (window.pageYOffset === 0) {
    const gif = document.getElementById("gif");
    if (gif) {
      window.scrollBy({
        top: gif.offsetHeight,
        behavior: "smooth",
      });
    }
  }
}, 18000);

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

  // menu active
  const selectMenu = document.querySelectorAll(".header-topmenu > li > a")
  selectMenu.forEach((select)=>{
    select.addEventListener("click",()=>{
      selectMenu.forEach((s)=>{
        s.classList.remove("active")
      })
      select.classList.add("active")
    })
  })
});
