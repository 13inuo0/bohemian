window.addEventListener("load", function () {
  // ✨결과 그래프 설정값
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

  // ✨투표하기 누르면 결과값 나오기
  const vote = this.document.querySelector("#voteBtn1");
  const voteReturn = this.document.querySelector("#voteBtn");
  const voteQ = this.document.querySelector(".voteRadio-wrap");
  const voteA = this.document.querySelector(".voteQ-wrap");
  vote.addEventListener("click", function (e) {
    e.preventDefault();
    voteQ.classList.add("activeVote");
    voteA.classList.add("activeVote");
  });
  voteReturn.addEventListener("click", function (e) {
    e.preventDefault();
    voteQ.classList.remove("activeVote");
    voteA.classList.remove("activeVote");
    // 되돌아 갔을 때 선택 초기화
    const voteL = document.querySelectorAll('input[name="vote-song"]');
    voteL.forEach(function (r) {
      r.checked = false; // 현재 선택 해제
      r.defaultChecked = false; // "초기 상태"도 선택 해제로 바꿈
    });
  });
});
