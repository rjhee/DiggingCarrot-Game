"use strict";
import Field from "./field.js";
import GameInfo from "./game-info.js";
import Modal from "./modal.js";
import * as sound from "./sound.js";

const modal = new Modal();
const gameInfo = new GameInfo(result);

const field = new Field(2, 4); // carrot , bug
let duration = 2;

gameInfo.playBtn.addEventListener("click", () => {
  gameInfo.printTimer(duration);
  gameInfo.changeBtn();
  field.addItem();
  sound.playbg();
  modal.hide("gameLule");
});

gameInfo.stopBtn.addEventListener("click", (event) => {
  modal.show("replay");
  field.itemsRemove("all");
  clearInterval(gameInfo.timerinterval);
  sound.playAlert();
  sound.stopbg();
});

gameInfo.replayBtn.addEventListener("click", () => {
  gameInfo.printTimer(duration);
  gameInfo.changeBtn();
  field.addItem();
  modal.hide();
  gameInfo.countItems("reset");
  sound.playbg();
});

field.itemsBox.addEventListener("click", (event) => {
  const target = event.target.className;
  if (target != "items-box") {
    result(target);
    field.itemsRemove(event.target);
    target == "carrot" && gameInfo.countItems(), sound.playCarrotPull();
  }
});

function result(target) {
  if (target === "bug") {
    modal.show("lost");
    field.itemsRemove("all");
    clearInterval(gameInfo.timerinterval);
    sound.playFail();
    sound.stopbg();
  } else if (gameInfo.counter.textContent === field.carrotCount) {
    modal.show("win");
    field.itemsRemove("all");
    clearInterval(gameInfo.timerinterval);
    sound.playWin();
    sound.stopbg();
  }
}

// 📌 어려웠던점!
// 👉🏼 items-box안에 새로만든 당근과 버그를 랜덤으로 배치하는 기능.
// 해결: 1. 반복문으로 items-box안에 img.carrot과 img.bug 태그 15개씩 만들기.
//      2. querySelectorAll로 모든 .carrot과 .bug를 가져오기.
//      3. 가져온 15개 태그에 각각, css translate 값을 랜덤으로 변경하기.
// 단점: 코드 너무 길다 총 30줄이상.

// 👉🏼 (중지버튼 || 버그 || 당근 모두) 클릭했을때 타이머가 멈추는 기능.
// 해결: 1. 처음에 setTimeout로 만든 타이머로는 clearTimeout 사용할수 없어서 처음에 만든 타이머를 setInterval로 다시만듬.
//      2. setInterval로 타이머를 더 간단하게 만들고 clearInterval로 요소를 클릭할때 생성한 타이머 멈추게함.
// 단점: 없는듯?

// 👉🏼 리플레이버튼을 클릭했을때 타이머를 초기화 하는 기능.
// 해결: 1. 처음에 만든 타이머 경우, replaybtn을 클릭하면 처음에 playbtn을 클릭했을때 시작했던 타이머가 멈추지 않아서,
//         playbtn클릭시 보여졌던 타이머숫자와, replaybtn클릭시 보여졌던 타이머숫자가 겹처서 나왔음.
//      2. clearInterval로 타이머 멈추게하고, 타이머함수에 인자(타이머숫자)를 받아와 만들었더니 버튼 클릭시 다시 초기화됨.
// 장점: 인자를 받아올 수 있으니 타이머 숫자를 원하는데로 설정가능.
// 단점: 없는듯.

// 👉🏼 😱 (타이머 == 0:0 && 카운터 != 15) 조건일때, LOST 모달창 띄우는것.
// 해결: 1. 첫번째 방법, 타이머의 숫자가 0일때  LOST 함수 호출.
//      2. 두번째 방법, 요소가 클릭될때 (타이머 == 0:0 && 카운터 != 15)이면 LOST함수 호출.
// 단점: 두번째 방법은 당근을 클릭했을때, (타이머 == 0:0 && 카운터 != 15) 이 조건이여야 LOST 함수가 호출된다.

// 👉🏼 😱 (타이머 != 0:0 && 카운터 == 15) 조건일때, WIN 모달창 띄우는것.
// 해결: 1. (타이머 != 0:0 && 카운터 == 15)조건이 맞을때 WIN 모달창 띄우는 WIN함수를 만들고,
//      2. items-box를 클릭했을때 클릭된 타겟을 인자로 받는 clickOnCarrot콜백함수를 호출하고,
//      3. clickOnCarrot의 인자(클릭된타겟이)가 carrot이면 WIN함수를 호출.
// 단점: 콜백지옥...?
