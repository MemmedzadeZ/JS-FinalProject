import { Subscribe } from "./../../types/index";
import subscribes from "./../../../db.json";

export class SubscribeModel {
  subscribes: Subscribe[];

  constructor() {
    this.subscribes = [];
    this.fillSubscribe();
  }

  fillSubscribe() {
    if (this.subscribes.length != 0) this.subscribes = [];
    subscribes.subscribes.forEach((p) => {
      const newSubscribe = new Subscribe(p.img, p.pBold, p.p, p.price);
      this.subscribes.push(newSubscribe);
    });
  }
  addSubscribe(newSubscribe: Subscribe) {
    subscribes.subscribes.push(newSubscribe);
    this.fillSubscribe();
  }

  getSubscribe() {
    return this.subscribes;
  }
}
