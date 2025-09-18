window.addEventListener("load", function () {
  const eventImgA = document.querySelector(".event-imgA");
  const eventImgB = document.querySelector(".event-imgB");
  const eventImgC = document.querySelector(".eventC-imgA");
  const eventImgD = document.querySelector(".eventC-imgB");

if (eventImgA && eventImgB) {
  function showB() {
    eventImgA.classList.add("activeBlock");
    eventImgB.classList.add("activeBlock");
  }
  function showA() {
    eventImgA.classList.remove("activeBlock");
    eventImgB.classList.remove("activeBlock");
  }

  if (window.innerWidth > 900) {
    // 마우스를 올리면 B로 전환
    eventImgA.addEventListener("mouseenter", showB);
    // 마우스를 떼면 다시 A로 전환
    eventImgB.addEventListener("mouseleave", showA);
  }
}

  if (eventImgC && eventImgD) {
    function toggleImages() {
      if (window.innerWidth <= 900) {
        eventImgC.classList.toggle("activeBlock2");
        eventImgD.classList.toggle("activeBlock2");
      }
    }
    eventImgC.addEventListener("click", toggleImages);
    eventImgD.addEventListener("click", toggleImages);
  }
});
