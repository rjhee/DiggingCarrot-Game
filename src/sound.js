"use strict";

const carrotSound = new Audio("./sound/carrot_pull.mp3");
const failSound = new Audio("./sound/bug_pull.mp3");
const winSound = new Audio("./sound/game_win.mp3");
const alertSound = new Audio("./sound/alert.wav");
const bgSound = new Audio("./sound/bg.mp3");

export function playCarrotPull() {
  playSound(carrotSound);
}

export function playFail() {
  playSound(failSound);
}

export function playWin() {
  playSound(winSound);
}

export function playAlert() {
  playSound(alertSound);
}

export function playbg() {
  playSound(bgSound);
}

export function stopbg() {
  bgSound.pause(bgSound);
}

function playSound(sound) {
  sound.currentTime = 0;
  sound.play();
}
