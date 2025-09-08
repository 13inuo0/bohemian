window.addEventListener("load", () => {
  const swiper = new Swiper(".bestScene-slide", {
    slidesPerView: 3.5,
    spaceBetween: 20,
  });
  // slide thum에 클릭한 이미지로 변경
  const thumbImg = document.querySelectorAll(".swiper-slide img");
  const mainImg = document.querySelector(".best-mainImg img");
  const bestDscr = document.querySelectorAll(".best-txt-box");
  const pagenationLeft = document.getElementById("best-left");
  const pagenationRight = document.getElementById("best-right");
  let currnetIndex = 0;
  thumbImg.forEach((tImg, index) => {
    tImg.addEventListener("click", () => {
      mainImg.src = tImg.src;
      currnetIndex = index;
      updateSlide(currnetIndex);
      // slide thum에 클릭한 이미지에 해당하는 설명으로 변경
      bestDscr.forEach((bestD, index) => {
        bestD.classList.remove("show");
      });
      if (bestDscr[index]) {
        bestDscr[index].classList.add("show");
      }
    });
  });
  function updateSlide(index) {
    mainImg.src = thumbImg[index].src;
    bestDscr.forEach((d) => {
      d.classList.remove("show");
      bestDscr[index].classList.add("show");
    });
  }
  // pagenation 활성화
  pagenationLeft.addEventListener("click", () => {
    currnetIndex = (currnetIndex - 1 + thumbImg.length) % thumbImg.length;
    updateSlide(currnetIndex);
    swiper.slidePrev();
  });
  pagenationRight.addEventListener("click", () => {
    currnetIndex = (currnetIndex + 1) % thumbImg.length;
    updateSlide(currnetIndex);
    swiper.slideNext();
  });
  pagenationLeft.addEventListener("click", () => {});
  pagenationRight.addEventListener("click", () => {});
  // play버튼 활성화
  const playBtn = document.querySelectorAll(".best-play-box .button-box i");
  playBtn.forEach((pBtn) => {
    pBtn.addEventListener("click", () => {
      playBtn.forEach((play) => {
        play.classList.remove("bestactive");
        pBtn.classList.add("bestactive");
      });
    });
  });
});
