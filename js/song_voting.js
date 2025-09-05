window.addEventListener("load", function () {
  // 첫 번째 그래프
  const progress = document.getElementById("voteGraph");
  const percent = document.getElementById("vote-percent");

  // 0 → 70으로 한번에
  // 그래프 게이지
  setTimeout(() => {
    progress.value = 30;
    percent.textContent = "30%";
  }, 300); // 살짝 지연 주면 애니메이션 자연스러움

  //   두번째 그래프
  const progress2 = document.getElementById("voteGraph2");
  const percent2 = document.getElementById("vote-percent2");

  // 0 → 70으로 한번에
  // 그래프 게이지
  setTimeout(() => {
    progress2.value = 40;
    percent2.textContent = "40%";
  }, 300); // 살짝 지연 주면 애니메이션 자연스러움

  //   세번째 그래프
  const progress3 = document.getElementById("voteGraph3");
  const percent3 = document.getElementById("vote-percent3");

  // 0 → 70으로 한번에
  // 그래프 게이지
  setTimeout(() => {
    progress3.value = 20;
    percent3.textContent = "20%";
  }, 300); // 살짝 지연 주면 애니메이션 자연스러움
});
