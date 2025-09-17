window.addEventListener("load", function () {
  // 이벤트 호버 기능
  const eventImgA = this.document.querySelector(".event-imgA");
  const eventImgB = this.document.querySelector(".event-imgB");
  const eventImgC = this.document.querySelector(".eventC-imgA");
  const eventImgD = this.document.querySelector(".eventC-imgB");
  eventImgA.addEventListener("mouseenter", function () {
    eventImgA.classList.add("activeBlock");
    eventImgB.classList.add("activeBlock");
  });
  eventImgB.addEventListener("mouseleave", function () {
    eventImgA.classList.remove("activeBlock");
    eventImgB.classList.remove("activeBlock");
  });
  eventImgC.addEventListener("mouseenter", function () {
    eventImgC.classList.add("activeBlock2");
    eventImgD.classList.add("activeBlock2");
  });
  eventImgD.addEventListener("mouseleave", function () {
    eventImgC.classList.remove("activeBlock2");
    eventImgD.classList.remove("activeBlock2");
  });
});
