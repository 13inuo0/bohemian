  window.addEventListener("load", () => {
  const aTag = this.document.querySelectorAll("a");
  aTag.forEach((a) => {
    a.addEventListener("click", (e) => {
      if (a.getAttribute("href") === "#") {
        e.preventDefault();
      }
    });
  });
    const cards = document.querySelectorAll(".card");
  const cardInners = document.querySelectorAll(".card-inner");
  let activeCard = null;

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      // 이미 활성화된 카드를 다시 클릭한 경우
      if (activeCard === card) {
        card.classList.remove("expand");
        console.log("활성 카드 줄어듬");
        setTimeout(() => {
          card.querySelector(".card-inner").classList.remove("rotate");
          console.log("활성 카드 돌아감");
        }, 500);
        activeCard = null;
        return;
      }

      // 다른 카드가 활성화되어 있는 경우
      if (activeCard) {
        activeCard.classList.remove("expand");
        console.log("이전 카드 줄어듬");
        setTimeout(() => {
          activeCard.querySelector(".card-inner").classList.remove("rotate");
          console.log("이전 카드 돌아감");

          // 이전 카드 애니메이션 완료 후 새 카드 활성화
          setTimeout(() => {
            card.querySelector(".card-inner").classList.add("rotate");
            console.log("새 카드 돌아감");
            setTimeout(() => {
              card.classList.add("expand");
              console.log("새 카드 늘어남");
            }, 500);
            activeCard = card;
          }, 100); // 약간의 여유시간
        }, 500);
      } else {
        // 활성 카드가 없는 경우 즉시 새 카드 활성화
        card.querySelector(".card-inner").classList.add("rotate");
        console.log("새 카드 돌아감");
        setTimeout(() => {
          card.classList.add("expand");
          console.log("새 카드 늘어남");
        }, 500);
        activeCard = card;
      }
    });
  });
  const frontImages = document.querySelectorAll(".mobil-front img");
  const backImages = document.querySelectorAll(".mobil-back img");
  const front = document.querySelectorAll(".mobil-front");

  frontImages.forEach((img, index) => {
    img.addEventListener("mouseenter", () => {
      backImages.forEach((b, i) => {
        b.classList.toggle("active", i === index);
      });
    });

    img.addEventListener("mouseleave", () => {
      backImages.forEach((b) => b.classList.remove("active"));
    });
  });
  // 스와이퍼
  // 스와이퍼 초기화
  const frontSwiper = new Swiper(".front-swiper", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });

  // 백 이미지들 가져오기
  const backImages1 = document.querySelectorAll(".mobile-swiper-back img");
  const backContainer = document.querySelector(".mobile-swiper-back");

  // 슬라이드 변경 시 기존 호버된 백 이미지 비활성화
  
// 이벤트 등록은 swiper 인스턴스 생성 후 바로



  frontSwiper.on("slideChangeTransitionStart", () => {
    console.log("slide changed!");
    backImages1.forEach((backImg) => backImg.classList.remove("active"));
    backContainer.style.opacity = "0";
  });
  // 마우스 호버로 백 이미지 보이기
  const frontSlides = document.querySelectorAll(".front-swiper .swiper-slide");

  frontSlides.forEach((slide) => {
    const img = slide.querySelector("img");

    img.addEventListener("mouseenter", () => {
      const index = slide.getAttribute("data-swiper-slide-index"); // 원본 인덱스
      console.log("hover", index);

      backImages1.forEach((backImg, i) => {
        backImg.classList.toggle("active", i === Number(index));
      });

      backContainer.style.opacity = "1";
    });

    img.addEventListener("mouseleave", () => {
      backImages1.forEach((backImg) => backImg.classList.remove("active"));
      backContainer.style.opacity = "0";
    });
  });
});
