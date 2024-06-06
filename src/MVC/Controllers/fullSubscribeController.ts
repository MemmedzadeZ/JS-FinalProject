import { FullSubscribe } from "../../types";
import { FullSubscribeModel } from "../Models/fullSubscribeModel";
import { FullSubscribeView } from "../Views/fullSubscribeView";

export class FullSubscribeController {
  model: FullSubscribeModel;
  view: FullSubscribeView;

  constructor(model: FullSubscribeModel, view: FullSubscribeView) {
    this.model = model;

    this.view = view;
  }

  updateView() {
    const subscribes = this.model.getSubscribe();
    this.view.displaySubscribe(subscribes);
  }

  addSubscribe(subscribe: FullSubscribe) {
    this.model.addSubscribe(subscribe);
    this.updateView();
  }
}
