  window.addEventListener("load", () => {
        const cards = document.querySelectorAll(".card");
        const cardInners = document.querySelectorAll(".card-inner");
        let activeCard = null;

        cards.forEach((card) => {
          card.addEventListener("click", () => {
            // 이미 활성화된 카드를 다시 클릭한 경우
            if (activeCard === card) {
              card.classList.remove("expand");
              console.log("활성 카드 줄어듬");
              setTimeout(() => {
                card.querySelector(".card-inner").classList.remove("rotate");
                console.log("활성 카드 돌아감");
              }, 500);
              activeCard = null;
              return;
            }

            // 다른 카드가 활성화되어 있는 경우
            if (activeCard) {
              activeCard.classList.remove("expand");
              console.log("이전 카드 줄어듬");
              setTimeout(() => {
                activeCard
                  .querySelector(".card-inner")
                  .classList.remove("rotate");
                console.log("이전 카드 돌아감");

                // 이전 카드 애니메이션 완료 후 새 카드 활성화
                setTimeout(() => {
                  card.querySelector(".card-inner").classList.add("rotate");
                  console.log("새 카드 돌아감");
                  setTimeout(() => {
                    card.classList.add("expand");
                    console.log("새 카드 늘어남");
                  }, 500);
                  activeCard = card;
                }, 100); // 약간의 여유시간
              }, 500);
            } else {
              // 활성 카드가 없는 경우 즉시 새 카드 활성화
              card.querySelector(".card-inner").classList.add("rotate");
              console.log("새 카드 돌아감");
              setTimeout(() => {
                card.classList.add("expand");
                console.log("새 카드 늘어남");
              }, 500);
              activeCard = card;
            }
          });
        });
      });