import { MarksModel } from "./../Models/marksModel";
import { MarksView } from "../Views/marksView";
import { Partner } from "./../../types/index";
export class MarksController {
  model: MarksModel;
  view: MarksView;

  constructor(model: MarksModel, view: MarksView) {
    this.model = model;
    this.view = view;
  }
  updateView() {
    const partners = this.model.getPartners();
    this.view.displayPartner(partners);
  }
  addPartner(partner: Partner) {
    this.model.addPartner(partner);
    this.updateView();
  }
}
