import { Product } from "../../types";

export class ProductView {
  prod: HTMLDivElement | null;

  productList: HTMLUListElement;

  constructor() {
    this.prod = document.querySelector("#prod");
    this.productList = document.createElement("ul");
    this.productList.classList.add("product__ul");
    const section = document.createElement("section");

    section.classList.add("products");
    section.appendChild(this.productList);
    this.prod?.appendChild(section);
  }

  displayPraduct(product: Product[]) {
    this.productList.innerHTML = "";
    product.forEach((p) => {
      const productItem = document.createElement("li");

      productItem.classList.add("product__li");
      const productImg = document.createElement("img");

      productImg.src = p.link;
      productImg.alt = p.alt;

      productItem.appendChild(productImg);
      this.productList.appendChild(productItem);
    });
  }
}
