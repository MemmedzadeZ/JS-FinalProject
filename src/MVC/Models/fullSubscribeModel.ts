import { Subscribe } from "../../types";
import subscribes1 from "./../../../db.json";
export class FullSubscribeModel {
  subscribes: Subscribe[];

  constructor() {
    this.subscribes = [];
    this.fillSubscribe();
  }

  fillSubscribe() {
    if (this.subscribes.length != 0) this.subscribes = [];
    subscribes1.subscribes.forEach((p) => {
      const newSubscribe = new Subscribe(p.img, p.pBold, p.p, p.price);
      this.subscribes.push(newSubscribe);
    });
  }
  addSubscribe(newSubscribe: Subscribe) {
    subscribes1.subscribes.push(newSubscribe);
    this.fillSubscribe();
  }

  getSubscribe() {
    return this.subscribes;
  }
}
