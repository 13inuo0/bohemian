window.addEventListener("load", function () {
  const flowST = document.getElementById("flowSection");

  //   해당 섹션이 html에 없을 때 경고하는 문구 표시
  if (!flowST) {
    console.warn("#flowSection 요소를 찾을 수 없습니다.");
    return;
  }

  //   콘텐츠에 표시되는 문구 목록
  const reviewMs = [
    "퀸의 명곡들을 극장에서 다시 들을 수 있다니 설레네요!",
    "극장에서 퀸을 만날 생각에 설렙니다.",
    "감동 재현",
    "콘서트장 같은 몰입감을 영화관에서 다시 체험하고 싶습니다.",
    "프레디 최고",
    "프레디의 목소리가 기다려져요.",
    "기대 만땅",
  ];

  //   최근 추가 된 문구 위치를 기억할 배열
  // let이 쓰이는 이유는 배열 안의 값이 변동되기 때문 (재할당)
  let lastTopsR = [];
  const minTextGap = 40; // px 단위 최소 간격

  function createFlowText() {
    // 1. 문구 랜덤 선택
    const rmsg = reviewMs[Math.floor(Math.random() * reviewMs.length)];

    // 2. 클래스 추가 - 기존에 있는 클래스에 영향 있음(같은 이름의 클래스명이 있으면 생성된 클래스 우선)
    const flowText = document.createElement("div");
    flowText.className = "flow-text";
    flowText.textContent = rmsg;

    // 3. 텍스트가 겹치지 않게 랜덤 배치하기 위한 계산 코드
    // 먼저 DOM에 붙여서 높이를 잽니다 (텍스트 높이 고려하여 top 계산)
    flowST.appendChild(flowText); //DOM에 추가
    const textH = flowText.offsetHeight || 24; // 만약 읽지 못하면 사용되는 대략값
    const maxTop = Math.max(0, flowST.clientHeight - textH); // 전체영역높이 - 생성된 문구의 높이

    // ⭐ 변경된 부분: 겹침 방지 로직 추가
    let randomTop;
    let triesR = 0;
    do {
      randomTop = Math.floor(Math.random() * (maxTop + 1));
      triesR++;
    } while (lastTopsR.some((t) => Math.abs(t - randomTop) < minTextGap) && triesR < 10);

    // 최종 확정된 위치 저장
    lastTopsR.push(randomTop);
    if (lastTopsR.length > 5) lastTopsR.shift(); // 최근 5개까지만 기억

    // 위치/속도 설정
    flowText.style.top = randomTop + "px";
    flowText.style.left = "100%";

    // ⭐ 개별 속도 랜덤 지정 (예: 15~25초)
    const randomSpeed = 15 + Math.random() * 10;
    flowText.style.animationDuration = randomSpeed + "s"; // moveLeft의 duration을 덮어씀

    // ⭐ 랜덤 폰트 크기 (18~32px 예시)
    const randomFontSize = 18 + Math.floor(Math.random() * 14);
    flowText.style.fontSize = randomFontSize + "px";

    // 4. 애니메이션이 끝나면 DOM에서 제거
    flowText.addEventListener("animationend", () => flowText.remove());
  }

  // 첫 개체 즉시 하나 생성(선택)
  createFlowText();

  // 3초마다 새 텍스트 생성
  setInterval(createFlowText, 2500);

  // 버튼과 인풋 요소 가져오기
  const reviewInput = document.querySelector(".reC-input input");
  const reviewBtn = document.getElementById("reviewBtn");

  // ✨버튼 클릭 이벤트
  reviewBtn.addEventListener("click", function (e) {
    e.preventDefault(); // 폼 제출 막기
    const newReview = reviewInput.value.trim();

    if (newReview) {
      reviewMs.push(newReview); // 배열에 추가
      reviewInput.value = ""; // 입력창 초기화
      console.log("추가됨:", reviewMs);
      alert("기대평을 작성해주셔서 감사합니다!");
    } else {
      alert("기대평을 입력해주세요!");
    }
  });

  // ✨엔터키 입력 이벤트
  reviewInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault(); // 폼 제출 막기
      const newReview = reviewInput.value.trim();

      if (newReview) {
        reviewMs.push(newReview); // 배열에 추가
        reviewInput.value = ""; // 입력창 초기화
        console.log("추가됨:", reviewMs);
        alert("기대평을 작성해주셔서 감사합니다!");
      } else {
        alert("기대평을 입력해주세요!");
      }
    }
  });

  // placeholder 내용 반응형 적용하기
  const input = document.getElementById("reC-input-txt"); // id="myInput"인 input 요소를 선택

  function updatePlaceholder() {
    if (window.innerWidth < 768) {
      input.placeholder = "기대평을 작성해주세요";
    } else {
      input.placeholder = "영화 [보헤미안 랩소디]의 기대평을 작성해주세요.";
    }
  }

  updatePlaceholder();
  window.addEventListener("resize", updatePlaceholder);
});
