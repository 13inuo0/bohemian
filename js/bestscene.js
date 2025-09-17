window.addEventListener("load", () => {
  const swiper = new Swiper(".bestScene-slide", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
      961: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      501: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
    },
  });
  // slide thum에 클릭한 이미지로 변경
  const thumbImg = document.querySelectorAll(".bestScene-slide img");
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
    // 메인이미지 경로를 가진 썸네일에 하이라이트
    thumbImg.forEach((t) => {
      if (t.src === mainImg.src) {
        t.style.filter = `brightness(100%)`;
      } else {
        t.style.filter = `brightness(50%)`;
      }
    });
    bestDscr.forEach((d) => {
      d.classList.remove("show");
    });
    bestDscr[index].classList.add("show");
  }
  // 첫번째 이미지 기준으로 초기 세팅
  updateSlide(currnetIndex);
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
  const play = document.querySelector(".fa-circle-play");
  const pause = document.querySelector(".fa-circle-pause");
  const audio = document.getElementById("bohemian-bgm");
  const progressStick = document.querySelector(".play-progress");
  audio.volume = 0.5;
  play.addEventListener("click", () => {
    audio.play();
  });
  pause.addEventListener("click", () => {
    audio.pause();
  });
  // playstick 활성화
  audio.addEventListener("timeupdate", () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressStick.style.width = progress + "%";
  });
  //
  // 스크롤 효과
  const scrollTxt = document.querySelectorAll(
    ".screen-20m-txt,.screen-dolby-txt"
  );
  const iphoneScroll = document.querySelector("#iphoneScrollImg");
  const screenWrap = document.querySelector(".screen-wrap");
  const cinema = document.querySelector(".screen-cinema");
  if (!iphoneScroll || !screenWrap || !cinema) return;

  let windowHeight, startScrollY, endScrollY, imgDocTop;
  const iphoneScrollMaxScale = 1;

  function calcPosition() {
    windowHeight = window.innerHeight;
    fixedTop = Math.round(windowHeight * 0.3);

    const rect = iphoneScroll.getBoundingClientRect();
    imgDocTop = rect.top + window.scrollY;

    startScrollY = imgDocTop - windowHeight / 2;
    const cinemaRect = cinema.getBoundingClientRect();
    const cinemaDocTop = cinemaRect.top + window.scrollY;
    endScrollY = cinemaDocTop - fixedTop;
  }

  calcPosition();
  window.addEventListener("resize", () => {
    calcPosition();
    onScroll();
  });
  const imgsInside = screenWrap.querySelectorAll("img");
  imgsInside.forEach((img) =>
    img.addEventListener("load", () => {
      calcPosition();
      onScroll();
    })
  );

  // 스크롤 텍스트

  function handleTextScroll(scrollY) {
    scrollTxt.forEach((txt) => {
      const rect = txt.getBoundingClientRect();
      const docTop = rect.top + window.scrollY;
      const trick = docTop - windowHeight / 1.2;
      txt.classList.toggle("scroll", scrollY > trick);
    });
  }

  // 컨텐츠 스크롤 이벤트
  const homespeaker = document.querySelector(".screen-homes");
  const dolbyimg = document.querySelector("#dolby");
  function handleContentsScroll(scrollY, el) {
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const docTop = rect.top + window.scrollY;
    const windowHeight = window.innerHeight;
    const trick = docTop - windowHeight / 1.2;
    if (scrollY > trick) {
      el.classList.add("scroll");
    } else {
      el.classList.remove("scroll");
    }
  }

  function onScroll() {
    const scrollY = window.scrollY;
    // console.log("scrollY:", scrollY);
    handleTextScroll(scrollY);
    // 컨텐츠 스크롤 이벤트 활성화
    handleContentsScroll(scrollY, homespeaker);
    handleContentsScroll(scrollY, dolbyimg);
    const iphone = document.querySelector("#screen-iphone");
    // 스크린 스크롤이벤트 시작전
    if (scrollY < startScrollY) {
      iphoneScroll.style.position = "absolute";
      iphoneScroll.style.top = `${iphone.offsetTop}px`;
      iphoneScroll.style.left = "50%";
      iphoneScroll.style.transform = `translateX(-50%) scale(0.2)`;
      iphoneScroll.style.opacity = "0";
    }
    // 스크린 스크롤 이벤트 시작
    else if (scrollY >= startScrollY && scrollY < endScrollY) {
      const progress =
        (scrollY - startScrollY) / Math.max(1, endScrollY - startScrollY);
      const p = Math.min(1, Math.sqrt(progress));
      const scale = Math.max(0.2, p * iphoneScrollMaxScale);
      const opacity = Math.min(1, p * 5);

      iphoneScroll.style.position = "fixed";
      iphoneScroll.style.left = "50%";
      iphoneScroll.style.top = "50%";
      iphoneScroll.style.transform = `translate(-50% , -50%) scale(${scale})`;
      iphoneScroll.style.opacity = `${opacity}`;
      iphoneScroll.style.pointerEvents = "none";
    }
    // 스크린 페이드아웃
    else {
      iphoneScroll.style.position = "absolute";
      iphoneScroll.style.left = "50%";
      iphoneScroll.style.top = `${cinema.offsetTop}px`;
      iphoneScroll.style.transform = `translateX(-50%) scale(${iphoneScrollMaxScale})`;

      // const fadeProgress =  Math.min(Math.max(fadeProgress, 0), 1);
      // iphoneScroll.style.opacity = `${1 - fadeProgress}`;
      // iphoneScroll.style.opacity = "0";
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });

  calcPosition();
  onScroll();

  // quick
  const goTop = document.getElementById("gotop");
  const goBottom = document.getElementById("gobottom");
  goTop.addEventListener("click", (e) => {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  goBottom.addEventListener("click", (e) => {
    e.preventDefault()
    window.scrollTo({
      top: this.document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  });
  if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
});
