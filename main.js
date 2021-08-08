"use strict";

// ▶ start button을 눌렀을때.
const playBtn = document.querySelector(".play-btn");
const stopBtn = document.querySelector(".stop-btn");
const bgm = document.querySelector(".bgm");
const gameLule = document.querySelector(".game-rule");

playBtn.addEventListener("click", () => {
  printTimer(11);
  onChangeBtn();
  carrotOnDisplay();
  bugOnDisplay();
  bgm.innerHTML = `<audio src="./sound/bg.mp3" autoplay></audio>`;
  gameLule.style.display = "none";
});

// - 재생버튼 중지버튼으로 바뀌기
function onChangeBtn() {
  playBtn.style.display = "none";
  stopBtn.style.display = "block";
}

const modal = document.querySelector(".modal");
const modalDesc = document.querySelector(".modal-desc");
const itemsBox = document.querySelector(".items-box");

//   * 중지버튼 눌렀을때, replay 모달창이 띄우기.
//   * 타이머가 숫자 그대로 멈추기.
//   * 버그와 당근이 더이상 클릭되지 않게 만든다.
stopBtn.addEventListener("click", (event) => {
  getModalBox("replay");
  itemsRemove("all");
  clearInterval(timerinterval);
  bgm.innerHTML = `<audio src="./sound/alert.wav" autoplay></audio>`;
});

function getModalBox(showMessage) {
  modal.style.display = "flex";
  switch (showMessage) {
    case "win":
      modalDesc.textContent = "YOU WIN🥳";
      break;
    case "lost":
      modalDesc.textContent = "YOU LOST😱";
      break;
    case "replay":
      modalDesc.textContent = "Replay🥕";
      break;
  }
}

function hideModalBox() {
  modal.style.display = "none";
}

const replayBtn = document.querySelector(".replay-btn");

//    * replay 버튼 누르면 모달창 사라지고 다시 게임시작.
replayBtn.addEventListener("click", () => {
  printTimer(11);
  onChangeBtn();
  carrotOnDisplay();
  bugOnDisplay();
  hideModalBox();
  countItems("reset");
  bgm.innerHTML = `<audio src="./sound/bg.mp3" class="bgm" autoplay></audio>`;
});

// - 타이머 시간 줄어들기.
// 아주 어렵게 만든타이머....기념으로 남기기...
// const timer = document.querySelector('.timer');
// function startTimer() {
//   let time = 1000;
//   let num = 10;
//   for(let i = 1; i <= 10; i++){
//     if(i * 1000 == time) {
//       setTimeout(function(){timer.innerHTML = `0:${num--}`}, time);
//       time = time + 1000;
//     } ;
//   };
// };

const timer = document.querySelector(".timer");
let timerinterval;
function printTimer(num) {
  timerinterval = setInterval(() => {
    if (num > 0) {
      timer.innerHTML = `0:${--num}`;
    } else if (num == 0) {
      clickOnBug("bug");
    }
  }, 1000);
}

// - 당근과 버그 15개씩 만들기
// - 당근과 버그 15개가 랜덤으로 배치되기.

const itemsBoxWidth = itemsBox.offsetWidth;
const itemsBoxHeight = itemsBox.offsetHeight;

function carrotOnDisplay() {
  for (let i = 1; i <= 15; i++) {
    const newCarrot = document.createElement("img");
    itemsBox.appendChild(newCarrot);
    newCarrot.setAttribute("src", "./img/carrot.png");
    newCarrot.setAttribute("class", `carrot`);
  }
  const carrotAll = document.querySelectorAll(".carrot");
  carrotAll.forEach((index) => {
    carrotAll[0].style.transform = `translate(${Math.floor(
      Math.random() * (itemsBoxWidth - 80 + 1) + 1
    )}px,${Math.floor(Math.random() * (itemsBoxHeight - 60 + 1) + 1)}px)`;
    carrotAll[1].style.transform = `translate(${Math.floor(
      Math.random() * (itemsBoxWidth - 80 + 1) + 1
    )}px,${Math.floor(Math.random() * (itemsBoxHeight - 60 + 1) + 1)}px)`;
    carrotAll[2].style.transform = `translate(${Math.floor(
      Math.random() * (itemsBoxWidth - 80 + 1) + 1
    )}px,${Math.floor(Math.random() * (itemsBoxHeight - 60 + 1) + 1)}px)`;
    carrotAll[3].style.transform = `translate(${Math.floor(
      Math.random() * (itemsBoxWidth - 80 + 1) + 1
    )}px,${Math.floor(Math.random() * (itemsBoxHeight - 60 + 1) + 1)}px)`;
    carrotAll[4].style.transform = `translate(${Math.floor(
      Math.random() * (itemsBoxWidth - 80 + 1) + 1
    )}px,${Math.floor(Math.random() * (itemsBoxHeight - 60 + 1) + 1)}px)`;
    carrotAll[5].style.transform = `translate(${Math.floor(
      Math.random() * (itemsBoxWidth - 80 + 1) + 1
    )}px,${Math.floor(Math.random() * (itemsBoxHeight - 60 + 1) + 1)}px)`;
    carrotAll[6].style.transform = `translate(${Math.floor(
      Math.random() * (itemsBoxWidth - 80 + 1) + 1
    )}px,${Math.floor(Math.random() * (itemsBoxHeight - 60 + 1) + 1)}px)`;
    carrotAll[7].style.transform = `translate(${Math.floor(
      Math.random() * (itemsBoxWidth - 80 + 1) + 1
    )}px,${Math.floor(Math.random() * (itemsBoxHeight - 60 + 1) + 1)}px)`;
    carrotAll[8].style.transform = `translate(${Math.floor(
      Math.random() * (itemsBoxWidth - 80 + 1) + 1
    )}px,${Math.floor(Math.random() * (itemsBoxHeight - 60 + 1) + 1)}px)`;
    carrotAll[9].style.transform = `translate(${Math.floor(
      Math.random() * (itemsBoxWidth - 80 + 1) + 1
    )}px,${Math.floor(Math.random() * (itemsBoxHeight - 60 + 1) + 1)}px)`;
    carrotAll[10].style.transform = `translate(${Math.floor(
      Math.random() * (itemsBoxWidth - 80 + 1) + 1
    )}px,${Math.floor(Math.random() * (itemsBoxHeight - 60 + 1) + 1)}px)`;
    carrotAll[11].style.transform = `translate(${Math.floor(
      Math.random() * (itemsBoxWidth - 80 + 1) + 1
    )}px,${Math.floor(Math.random() * (itemsBoxHeight - 60 + 1) + 1)}px)`;
    carrotAll[12].style.transform = `translate(${Math.floor(
      Math.random() * (itemsBoxWidth - 80 + 1) + 1
    )}px,${Math.floor(Math.random() * (itemsBoxHeight - 60 + 1) + 1)}px)`;
    carrotAll[13].style.transform = `translate(${Math.floor(
      Math.random() * (itemsBoxWidth - 80 + 1) + 1
    )}px,${Math.floor(Math.random() * (itemsBoxHeight - 60 + 1) + 1)}px)`;
    carrotAll[14].style.transform = `translate(${Math.floor(
      Math.random() * (itemsBoxWidth - 80 + 1) + 1
    )}px,${Math.floor(Math.random() * (itemsBoxHeight - 60 + 1) + 1)}px)`;
  });
}

function bugOnDisplay() {
  for (let i = 1; i <= 15; i++) {
    const newBug = document.createElement("img");
    itemsBox.appendChild(newBug);
    newBug.setAttribute("src", "./img/bug.png");
    newBug.setAttribute("class", `bug`);
  }
  const BugAll = document.querySelectorAll(".bug");
  BugAll.forEach((index) => {
    BugAll[0].style.transform = `translate(${Math.floor(
      Math.random() * (itemsBoxWidth - 80 + 1) + 1
    )}px,${Math.floor(Math.random() * (itemsBoxHeight - 60 + 1) + 1)}px)`;
    BugAll[1].style.transform = `translate(${Math.floor(
      Math.random() * (itemsBoxWidth - 80 + 1) + 1
    )}px,${Math.floor(Math.random() * (itemsBoxHeight - 60 + 1) + 1)}px)`;
    BugAll[2].style.transform = `translate(${Math.floor(
      Math.random() * (itemsBoxWidth - 80 + 1) + 1
    )}px,${Math.floor(Math.random() * (itemsBoxHeight - 60 + 1) + 1)}px)`;
    BugAll[3].style.transform = `translate(${Math.floor(
      Math.random() * (itemsBoxWidth - 80 + 1) + 1
    )}px,${Math.floor(Math.random() * (itemsBoxHeight - 60 + 1) + 1)}px)`;
    BugAll[4].style.transform = `translate(${Math.floor(
      Math.random() * (itemsBoxWidth - 80 + 1) + 1
    )}px,${Math.floor(Math.random() * (itemsBoxHeight - 60 + 1) + 1)}px)`;
    BugAll[5].style.transform = `translate(${Math.floor(
      Math.random() * (itemsBoxWidth - 80 + 1) + 1
    )}px,${Math.floor(Math.random() * (itemsBoxHeight - 60 + 1) + 1)}px)`;
    BugAll[6].style.transform = `translate(${Math.floor(
      Math.random() * (itemsBoxWidth - 80 + 1) + 1
    )}px,${Math.floor(Math.random() * (itemsBoxHeight - 60 + 1) + 1)}px)`;
    BugAll[7].style.transform = `translate(${Math.floor(
      Math.random() * (itemsBoxWidth - 80 + 1) + 1
    )}px,${Math.floor(Math.random() * (itemsBoxHeight - 60 + 1) + 1)}px)`;
    BugAll[8].style.transform = `translate(${Math.floor(
      Math.random() * (itemsBoxWidth - 80 + 1) + 1
    )}px,${Math.floor(Math.random() * (itemsBoxHeight - 60 + 1) + 1)}px)`;
    BugAll[9].style.transform = `translate(${Math.floor(
      Math.random() * (itemsBoxWidth - 80 + 1) + 1
    )}px,${Math.floor(Math.random() * (itemsBoxHeight - 60 + 1) + 1)}px)`;
    BugAll[10].style.transform = `translate(${Math.floor(
      Math.random() * (itemsBoxWidth - 80 + 1) + 1
    )}px,${Math.floor(Math.random() * (itemsBoxHeight - 60 + 1) + 1)}px)`;
    BugAll[11].style.transform = `translate(${Math.floor(
      Math.random() * (itemsBoxWidth - 80 + 1) + 1
    )}px,${Math.floor(Math.random() * (itemsBoxHeight - 60 + 1) + 1)}px)`;
    BugAll[12].style.transform = `translate(${Math.floor(
      Math.random() * (itemsBoxWidth - 80 + 1) + 1
    )}px,${Math.floor(Math.random() * (itemsBoxHeight - 60 + 1) + 1)}px)`;
    BugAll[13].style.transform = `translate(${Math.floor(
      Math.random() * (itemsBoxWidth - 80 + 1) + 1
    )}px,${Math.floor(Math.random() * (itemsBoxHeight - 60 + 1) + 1)}px)`;
    BugAll[14].style.transform = `translate(${Math.floor(
      Math.random() * (itemsBoxWidth - 80 + 1) + 1
    )}px,${Math.floor(Math.random() * (itemsBoxHeight - 60 + 1) + 1)}px)`;
  });
}

// - 당근이 클릭 되기.
//   * 당근이 클릭될때, 클릭된 당근 당근 수만큼 카운터 줄어들기.
const counter = document.querySelector(".counter");
const clickSound = document.querySelector(".click-sound");

let counterNumber = 0;
function countItems(reset) {
  if (reset == "reset") {
    counterNumber = 0;
    counter.textContent = counterNumber;
  } else {
    counterNumber = +counterNumber;
    counter.textContent = ++counterNumber;
  }
}

function itemsRemove(target) {
  if (target == "all") {
    while (itemsBox.firstChild) {
      itemsBox.removeChild(itemsBox.firstChild);
    }
  } else {
    target.remove();
  }
}

itemsBox.addEventListener("click", (event) => {
  const target = event.target.className;
  clickOnCarrot(target);
  if (target != "items-box") {
    clickOnBug(target);
    itemsRemove(event.target);
  }
  // if(counter.textContent < 15 && timer.textContent == '0:0') {
  //   clickOnBug('bug');
  // };
});

function clickOnCarrot(target) {
  if (target === "carrot") {
    countItems();
    userWin();
    clickSound.innerHTML = `<audio src="./sound/carrot_pull.mp3" autoplay></audio>`;
  }
}

//   * 버그를 클릭했을때, lost 모달창 띄우기
//   * 타이머 00:00으로 바뀌기.
//   * 버그와 당근이 더이상 클릭되지 않게 하기.
function clickOnBug(target) {
  if (target === "bug") {
    getModalBox("lost");
    itemsRemove("all");
    clearInterval(timerinterval);
    clickSound.innerHTML = `<audio src="./sound/bug_pull.mp3" autoplay></audio>`;
    bgm.innerHTML = `<audio src="./sound/alert.wav" autoplay></audio>`;
  }
}

//   * 당근을 10초 내에 다 클릭했을때
//      ● win 모달창띄우기.
function userWin() {
  if (counterNumber === 15 && timer.textContent != "0:0") {
    getModalBox("win");
    itemsRemove("all");
    clearInterval(timerinterval);
    bgm.innerHTML = `<audio src="./sound/game_win.mp3" autoplay></audio>`;
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
