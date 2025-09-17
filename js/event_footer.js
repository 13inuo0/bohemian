window.addEventListener("load", function () {
  // 이벤트 호버 기능
  const eventImgA = document.querySelector(".event-imgA");
  const eventImgB = document.querySelector(".event-imgB");
  const eventImgC = document.querySelector(".eventC-imgA");
  const eventImgD = document.querySelector(".eventC-imgB");

  if (eventImgA && eventImgB) {
    eventImgA.addEventListener("mouseenter", function () {
      eventImgA.classList.add("activeBlock");
      eventImgB.classList.add("activeBlock");
    });
    eventImgB.addEventListener("mouseleave", function () {
      eventImgA.classList.remove("activeBlock");
      eventImgB.classList.remove("activeBlock");
    });
  }

  if (eventImgC && eventImgD) {
    eventImgC.addEventListener("mouseenter", function () {
      eventImgC.classList.add("activeBlock2");
      eventImgD.classList.add("activeBlock2");
    });
    eventImgD.addEventListener("mouseleave", function () {
      eventImgC.classList.remove("activeBlock2");
      eventImgD.classList.remove("activeBlock2");
    });
  }
});