"use strict";

import Field from "./field.js";
import Modal from "./modal.js";
import * as sound from "./sound.js";

const modal = new Modal();
const field = new Field();

export default class GameInfo {
  constructor(result) {
    this.playBtn = document.querySelector(".play-btn");
    this.stopBtn = document.querySelector(".stop-btn");
    this.replayBtn = document.querySelector(".replay-btn");

    this.timer = document.querySelector(".timer");
    this.timerinterval;

    this.counter = document.querySelector(".counter");
    this.counterNumber = 0;
    this.result = result;
  }

  changeBtn() {
    this.playBtn.style.display = "none";
    this.stopBtn.style.display = "block";
  }

  printTimer(duration) {
    this.timerinterval = setInterval(() => {
      if (duration > 0) {
        this.timer.innerHTML =
          duration < 10 ? `00:0${--duration}` : `00:${--duration}`;
      } else if (duration == 0) {
        this.result("bug");
      }
    }, 1000);
  }

  countItems(num) {
    if (num == "reset") {
      this.counterNumber = 0;
      this.counter.textContent = this.counterNumber;
    } else {
      this.counterNumber = +this.counterNumber;
      this.counter.textContent = ++this.counterNumber;
    }
  }
}
