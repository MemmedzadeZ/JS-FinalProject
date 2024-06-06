import { Subscribe } from "../../types";
import { SubscribeModel } from "../Models/subscribeModel";
import { SubscribeView } from "../Views/subscribeView";

export class SubscribeController {
  model: SubscribeModel;
  view: SubscribeView;

  constructor(model: SubscribeModel, view: SubscribeView) {
    this.model = model;

    this.view = view;
  }

  updateView() {
    const subscribes = this.model.getSubscribe();
    this.view.displaySubscribe(subscribes);
  }

  addSubscribe(subscribe: Subscribe) {
    this.model.addSubscribe(subscribe);
    this.updateView();
  }
}
