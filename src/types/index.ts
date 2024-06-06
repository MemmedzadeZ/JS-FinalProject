// import { Partner } from "../main";
// import marks from "../../db.json";

export class Post {
  title: string;
  category: string;
  price: number;
  img: string;
  constructor(title: string, category: string, price: number, img: string) {
    this.title = title;
    this.category = category;
    this.price = price;
    this.img = img;
  }
}

export class Partner {
  link: string;
  alt: string;

  constructor(link: string, alt: string) {
    this.link = link;
    this.alt = alt;
  }
}

export class Product {
  link: string;
  alt: string;

  constructor(link: string, alt: string) {
    this.link = link;
    this.alt = alt;
  }
}

export class Populyar {
  img: string;

  alt: string;

  constructor(img: string, alt: string) {
    this.img = img;
    this.alt = alt;
  }
}

export class Subscribe {
  img: string;
  pBold: string;
  p: string;
  price: string;

  constructor(img: string, pBold: string, p: string, price: string) {
    this.img = img;
    this.pBold = pBold;
    this.p = p;
    this.price = price;
  }
}

export class FullSubscribe {
  img: string;
  pBold: string;
  p: string;
  price: string;

  constructor(img: string, pBold: string, p: string, price: string) {
    this.img = img;
    this.pBold = pBold;
    this.p = p;
    this.price = price;
  }
}
