import { Populyar } from "./../../types/index";

export class PopulyarsView {
  app: HTMLDivElement | null;
  papulyarList: HTMLUListElement;

  constructor() {
    this.app = document.querySelector("#app");
    this.papulyarList = document.createElement("ul");
    this.papulyarList.classList.add("papulyars__ul");

    const section1 = document.createElement("section");
    section1.classList.add("papularSection");

    section1.appendChild(this.papulyarList);
    this.app?.appendChild(section1);
  }

  displayPapulyar(papulyars: Populyar[]) {
    this.papulyarList.innerHTML = "";
    papulyars.forEach((p) => {
      const populyarII = document.createElement("img");
      populyarII.classList.add("populyar_img");

      const papularItem = document.createElement("li");
      papularItem.classList.add("populyar__li");

      const papulyarImg = document.createElement("img");
      papulyarImg.src = p.img;

      papulyarImg.alt = p.alt;

      papularItem.appendChild(papulyarImg);
      this.papulyarList.appendChild(papularItem);
    });
  }
}
