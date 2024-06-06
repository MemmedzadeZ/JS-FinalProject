import { ProductModel } from "../Models/followProductModel";
import { ProductView } from "../Views/followProductView";
import { Product } from "./../../types/index";
export class ProductController {
  model: ProductModel;
  view: ProductView;

  constructor(model: ProductModel, view: ProductView) {
    this.model = model;
    this.view = view;
  }

  updateView() {
    const products = this.model.getProduct();
    this.view.displayPraduct(products);
  }

  addProduct(product: Product) {
    this.model.addProduct(product);
    this.updateView();
  }
}
