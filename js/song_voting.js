window.addEventListener("load", function () {
  const aTag = this.document.querySelectorAll("a");
  aTag.forEach((a) => {
    a.addEventListener("click", (e) => {
      if (a.getAttribute("href") === "#") {
        e.preventDefault();
      }
    });
  });
  const progress = document.getElementById("voteGraph");
  const percent = document.getElementById("vote-percent");
  const progress2 = document.getElementById("voteGraph2");
  const percent2 = document.getElementById("vote-percent2");
  const progress3 = document.getElementById("voteGraph3");
  const percent3 = document.getElementById("vote-percent3");

  // 처음엔 0으로 초기화
  [progress, progress2, progress3].forEach((p) => (p.value = 0));
  [percent, percent2, percent3].forEach((t) => (t.textContent = "0%"));

  // ⭐ 추가: 현재 분포를 "표 수"로 관리
  let counts = [30, 40, 20];

  // ⭐ 추가: 선택된 라디오 인덱스 찾기
  function getCheckedIndex() {
    const list = Array.from(
      document.querySelectorAll('input[name="vote-song"]')
    );
    return list.findIndex((r) => r.checked);
  }

  // ⭐ 추가: 표수 → 퍼센트 변환 함수
  function toPercents(arr) {
    const total = arr.reduce((a, b) => a + b, 0) || 1;
    return arr.map((v) => Math.round((v / total) * 100));
  }

  // ✨투표하기 누르면 결과값 나오기
  const vote = this.document.querySelector("#voteBtn1");
  const voteReturn = this.document.querySelector("#voteBtn");
  const voteQ = this.document.querySelector(".voteRadio-wrap");
  const voteA = this.document.querySelector(".voteQ-wrap");
  vote.addEventListener("click", function (e) {
    e.preventDefault();

    // ⭐ 추가: 체크된 항목 확인
    const idx = getCheckedIndex();
    if (idx === -1) {
      alert("하나를 선택해주세요!");
      return;
    }

    // ⭐ 추가: 선택된 항목 표수 +1 → 비율 재계산
    counts[idx] += 1;
    const percents = toPercents(counts);

    voteQ.classList.add("activeVote");
    voteA.classList.add("activeVote");
    // 결과 보인 다음 틱에 값 변경 → 애니메이션 발동
    setTimeout(() => {
      // progress.value = 30;
      // percent.textContent = "30%";
      // progress2.value = 40;
      // percent2.textContent = "40%";
      // progress3.value = 20;
      // percent3.textContent = "20%";

      // ✅ (교체) 계산된 퍼센트 사용
      progress.value = percents[0];
      percent.textContent = percents[0] + "%";
      progress2.value = percents[1];
      percent2.textContent = percents[1] + "%";
      progress3.value = percents[2];
      percent3.textContent = percents[2] + "%";
    }, 0);
  });
  voteReturn.addEventListener("click", function (e) {
    e.preventDefault();
    voteQ.classList.remove("activeVote");
    voteA.classList.remove("activeVote");

    // 다시 0으로 리셋
    [progress, progress2, progress3].forEach((p) => (p.value = 0));
    [percent, percent2, percent3].forEach((t) => (t.textContent = "0%"));

    // 되돌아 갔을 때 선택 초기화
    const voteL = document.querySelectorAll('input[name="vote-song"]');
    voteL.forEach(function (r) {
      r.checked = false; // 현재 선택 해제
      r.defaultChecked = false; // "초기 상태"도 선택 해제로 바꿈
    });
  });
});
