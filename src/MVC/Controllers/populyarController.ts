import { Populyar } from "../../types";
import { PapulyarModel } from "../Models/papulyarModel";
import { PopulyarsView } from "./../Views/populyarsView";

export class PopulyarsController {
  model: PapulyarModel;
  view: PopulyarsView;

  constructor(model: PapulyarModel, view: PopulyarsView) {
    this.model = model;
    this.view = view;
  }

  updateView() {
    const papulyars = this.model.getPopulyar();
    this.view.displayPapulyar(papulyars);
  }

  addPapulyar(populyar: Populyar) {
    this.model.addPopulyar(populyar);
    this.updateView();
  }
}
