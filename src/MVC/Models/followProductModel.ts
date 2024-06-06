import { Product } from "../../types";
import followProduct from "./../../../db.json";

export class ProductModel {
  products: Product[];

  constructor() {
    this.products = [];
    this.fillProduct();
  }

  fillProduct() {
    if (this.products.length != 0) this.products = [];
    followProduct.followProduct.forEach((fp) => {
      const newProduct = new Product(fp.link, fp.alt);
      this.products.push(newProduct);
    });
  }

  addProduct(newProduct: Product) {
    followProduct.followProduct.push(newProduct);
    this.fillProduct();
  }

  getProduct() {
    return this.products;
  }
}
