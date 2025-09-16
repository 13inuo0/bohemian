window.addEventListener("load", function () {
  // 이벤트 호버 기능
  const eventImgA = this.document.querySelector(".event-imgA");
  const eventImgB = this.document.querySelector(".event-imgB");
  eventImgA.addEventListener("mouseenter", function () {
    eventImgA.classList.add(".activeBlock");
    eventImgB.classList.add(".activeBlock");
  });
  eventImgA.addEventListener("mouseleave", function () {
    eventImgA.classList.remove(".activeBlock");
    eventImgB.classList.remove(".activeBlock");
  });
});
