"use strict";

export default class Field {
  constructor(carrotCount, bugCount) {
    this.itemsBox = document.querySelector(".items-box");
    this.itemsBoxSize = this.itemsBox.getBoundingClientRect();
    this.itemsBoxW = this.itemsBoxSize.width;
    this.itemsBoxH = this.itemsBoxSize.height;
    this.itemSize = 80;

    this.carrotCount = carrotCount;
    this.bugCount = bugCount;
  }

  addItem() {
    this.itemOnDisplay("carrot", "./img/carrot.png", this.carrotCount);
    this.itemOnDisplay("bug", "./img/bug.png", this.bugCount);
  }

  itemOnDisplay(name, itemPath, count) {
    for (let i = 1; i <= count; i++) {
      let x = Math.floor(
        Math.random() * (this.itemsBoxW - this.itemSize + 1) + 1
      );
      let y = Math.floor(
        Math.random() * (this.itemsBoxH - this.itemSize + 1) + 1
      );
      const item = document.createElement("img");
      this.itemsBox.appendChild(item);
      item.setAttribute("src", itemPath);
      item.setAttribute("class", name);
      item.style.top = `${y}px`;
      item.style.left = `${x}px`;
    }
  }

  itemsRemove(target) {
    if (target == "all") {
      while (this.itemsBox.firstChild) {
        this.itemsBox.removeChild(this.itemsBox.firstChild);
      }
    } else {
      target.remove();
    }
  }
}
