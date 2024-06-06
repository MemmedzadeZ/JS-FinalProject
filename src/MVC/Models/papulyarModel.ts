import { Populyar } from "../../types";
import populars from "./../../../db.json";

export class PapulyarModel {
  populyars: Populyar[];

  constructor() {
    this.populyars = [];
    this.fillPopulyar();
  }

  fillPopulyar() {
    if (this.populyars.length != 0) this.populyars = [];
    populars.populars.forEach((p) => {
      const newPopulyar = new Populyar(p.img, p.alt);
      this.populyars.push(newPopulyar);
    });
  }

  addPopulyar(newPopulyar: Populyar) {
    populars.populars.push(newPopulyar);
    this.fillPopulyar();
  }

  getPopulyar() {
    return this.populyars;
  }
}
