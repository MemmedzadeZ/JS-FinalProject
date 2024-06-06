import { Subscribe } from "../../types";

export class SubscribeView {
  app: HTMLDivElement | null;
  subscribeList: HTMLUListElement;

  constructor() {
    this.app = document.querySelector("#enep");
    this.subscribeList = document.createElement("ul");
    this.subscribeList.classList.add("subscribe__ul");

    const div = document.createElement("div");
    div.classList.add("SubscriebeDiv");

    div.appendChild(this.subscribeList);
    this.app?.appendChild(div);
  }
  displaySubscribe(subscribes: Subscribe[]) {
    this.subscribeList.innerHTML = "";

    subscribes.forEach((s) => {
      const subscribeItem = document.createElement("div");
      subscribeItem.classList.add("subscribe_Div");

      const subsribeImg = document.createElement("img");
      subsribeImg.classList.add("subscribe_Img");

      const subscribepBold = document.createElement("p");
      subscribepBold.classList.add("subscribe_pBold");

      const subscribeDivParagrf = document.createElement("div");
      subscribeDivParagrf.classList.add("subscribe_DivParagrf");

      const subscribeP = document.createElement("p");
      subscribeP.classList.add("subscribe_Paragrf");

      const subscribePrice = document.createElement("p");
      subscribePrice.classList.add("subscribe_Price");
      const subscribe_Addbtn = document.createElement("button");
      subscribe_Addbtn.classList.add("subsctibe_add-btn");
      subscribe_Addbtn.textContent = "Add Cart";

      subsribeImg.src = s.img;
      subscribepBold.textContent = s.pBold;
      subscribeP.textContent = s.p;
      subscribePrice.textContent = s.price;

      //divParagrf
      subscribeDivParagrf.appendChild(subscribeP);
      subscribeDivParagrf.appendChild(subscribePrice);

      //Item
      subscribeItem.appendChild(subsribeImg);
      subscribeItem.appendChild(subscribepBold);
      subscribeItem.appendChild(subscribeDivParagrf);
      subscribeItem.appendChild(subscribe_Addbtn);

      //Common Div
      this.subscribeList.appendChild(subscribeItem);
    });
  }
}
