window.addEventListener("load", () => {
  const btn = document.querySelector(".hamburgerBtn");
  const nav = document.getElementById("mobileNav");

  btn.addEventListener("click", () => {
    const open = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!open));
    nav.setAttribute("aria-hidden", String(open));
    document.body.classList.toggle("nav-open", !open);
  });

   var swiper = new Swiper(".shop-Swiper", {
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
       autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
});
