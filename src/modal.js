"use strict";

export default class Modal {
  constructor() {
    this.modal = document.querySelector(".modal");
    this.modalTitle = document.querySelector(".modal-title");
    this.modalDesc = document.querySelector(".modal-desc");
    this.replayBtn = document.querySelector(".replay-btn");
    this.gameLule = document.querySelector(".game-rule");
    this.answerBtn = document.querySelector(".answer-btn");
  }

  show(showMessage, carrotNum = "0") {
    this.modal.style.display = "flex";
    switch (showMessage) {
      case "win":
        this.modalTitle.textContent = "🥳 YOU WIN 🥳";
        this.modalDesc.textContent = "Next Level?";
        this.answerBtn.style.display = "flex";
        this.replayBtn.style.display = "none";
        break;
      case "lost":
        this.modalTitle.textContent = "😱 GAME OVER 😱";
        this.modalDesc.textContent = `you dug carrot just ${carrotNum}...`;
        this.answerBtn.style.display = "none";
        this.replayBtn.style.display = "block";
        break;
      case "replay":
        this.modalTitle.textContent = "🥕 Replay 🥕";
        this.modalDesc.textContent = "";
        break;
    }
  }

  hide(modalBox) {
    if (modalBox == "gameLule") {
      this.gameLule.style.display = "none";
    } else {
      this.modal.style.display = "none";
    }
  }
}
