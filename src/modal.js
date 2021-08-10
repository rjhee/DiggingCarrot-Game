"use strict";

export default class Modal {
  constructor() {
    this.modal = document.querySelector(".modal");
    this.modalDesc = document.querySelector(".modal-desc");
    this.gameLule = document.querySelector(".game-rule");
  }

  show(showMessage) {
    this.modal.style.display = "flex";
    switch (showMessage) {
      case "win":
        this.modalDesc.textContent = "🥳 YOU WIN 🥳";
        break;
      case "lost":
        this.modalDesc.textContent = "😱 YOU LOST 😱";
        break;
      case "replay":
        this.modalDesc.textContent = "🥕 Replay 🥕";
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
