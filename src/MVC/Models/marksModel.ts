import { Partner } from "../../types";
import marks from "./../../../db.json";

export class MarksModel {
  partners: Partner[];
  constructor() {
    this.partners = [];
    this.fillPartner();
  }

  fillPartner() {
    if (this.partners.length != 0) this.partners = [];
    marks.marks.forEach((p) => {
      const newPart = new Partner(p.link, p.alt);
      this.partners.push(newPart);
    });
  }

  addPartner(newPartner: Partner) {
    marks.marks.push(newPartner);
    this.fillPartner();
  }

  getPartners() {
    return this.partners;
  }
}
