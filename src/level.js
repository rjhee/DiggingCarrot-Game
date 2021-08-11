"use strict";

export default class Level {
  constructor() {
    this.yesBtn = document.querySelector(".yes-btn");
    this.levelNum = document.querySelector(".level-num");
    this.levelNumInit = 1;
  }
  leveNumlUp() {
    this.levelNum.innerHTML = ++this.levelNumInit;
  }
}
