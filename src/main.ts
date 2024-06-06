import { PartnerView } from "./MVC/Views/marksView";
import { MarksController } from "./MVC/Controllers/marksController";
import { MarksModel } from "./MVC/Models/marksModel";
import "./sass/main.scss";
import markImg from "./../header.json";
// import { SubscribeController } from "./MVC/Controllers/subscribeController";
// import { SubscribeModel } from "./MVC/Models/subscribeModel";
// import { SubscribeView } from "./MVC/Views/subscribeView";
import { FullSubscribeController } from "./MVC/Controllers/fullSubscribeController";
import { FullSubscribeModel } from "./MVC/Models/fullSubscribeModel";
import { FullSubscribeView } from "./MVC/Views/fullSubscribeView";
import { ProductModel } from "./MVC/Models/followProductModel";
import { ProductView } from "./MVC/Views/followProductView";
import { ProductController } from "./MVC/Controllers/followProductController";

//import "./sass/components/_header.scss";
//Model

// function login() {
//   let usename = document.getElementById("username");
//   let password = document.getElementById("password");
// }

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `

<header class="header">
<div class="header__div">
<img class="header__search-icon" src="./src/img/searchicon.png" alt="" />
  
  <img
    class="header__logo"
    src="/src/img/logo.png"
    alt=""
  />
  <div class="header__actions">
  <button class="header__account-btn">
  <div>
  <img src="./src/img/accauntIcon.png" alt="" />
  <p>Account</p>
</div>
</button>
<button class="header__basket-btn">
<div>
<img src="./src/img/shoppingIcon.png" alt="" />
<p>Shoping</p>
</div>
</button>
  </div>
</div>

<div class="header__divider">
<nav class="nav">
  <ul class="nav__ul">
    <li>Jewelry & Accessories</li>
    <li>Clothing & Shoes</li>
    <li>Home & Living</li>
    <li>Wedding & Party</li>
    <li>Toys & Entertainment</li>
    <li>Art & Collectibles</li>
    <li>Craft Supplies & Tools</li>
  </ul>
</nav>

</div>
</header>
<section class="intro">
<div>
  <h1 class="intro__header">Collections</h1>
  <h2 class="intro__text">
    You Can Explore Ans Shop Many Differnt Collection 
  </h2>
  <h2 class="intro__text">From Various Barands
  Here.</h2>
  <button class="intro__button">
  <img src="/src/assets/icons/white-basket.png" alt="" />
    
    <p>Shop Now</p>
  </button>
</div>
<div class="intro__img-div">
  <img class="intro__girl-img" src="${markImg["header-imgs"]["intro-img"]}" alt="" />
  <div class="intro__frame"></div>
</div>
<img
  class="intro__left-decor"
  src="./src/img/Frame.png"
  alt=""
/>
<img
  class="intro__right-decor"
  src="./src/img/Frame (1).png"
  alt=""
/>
</section>

`;

const partnerController = new MarksController(
  new MarksModel(),
  new PartnerView()
);
partnerController.updateView();

document.querySelector<HTMLDivElement>("#enep")!.innerHTML = `
<div class = "DIVElement">
 <img src="./src/img/Explore new and popular styles.png" alt="" />


<img src="./src/img/jicetbraun.png" alt="" />
<div >
      <div class="DivCard1">
        <img src="./src/img/card.png" alt="" />
        <img src="./src/img/card1.png" alt="" />
      </div>
      <div class="DivCard2">
        <img src="./src/img/card2.png" alt="" />
        <img src="./src/img/card3.png" alt="" />
      </div>
    </div>

    </div>


    <div>


    <h2 class = "main_titleSubscribe">Or subscribe to the newsletter</h2>

    <div class = "SubscribeDiv">
      <div>
        <a href="/">All Products</a>
        <a href="/">T-Shirt</a>
        <a href="/">Hoodies</a>
        <a href="/">Jacket</a>
      </div>

      <button class = "Subscribebtn">
        <img src="./src/img/v6-icon (free).png" alt="" class="subscribebtn_img"/>
        <p style="color: white" class="subscribebtn_btn">Filter</p>
      </button>
    </div>

    


    </div>

    

      <div class="listProduct"></div>
  `;

// const subscribeController = new SubscribeController(
//   new SubscribeModel(),
//   new SubscribeView()
// );

// subscribeController.updateView();
// const subscribeController1 = new SubscribeController(
//   new SubscribeModel(),
//   new SubscribeView()
// );

// subscribeController1.updateView();

document.querySelector<HTMLDivElement>("#naza")!.innerHTML = `
<div>
 <div style="background-color: black">
      <img
        src="./src/img/andrey-zvyagintsev-EQj1ZMpq_VM-unsplash 1.png"
        alt=""
        class="img_back"
      />
    </div>

    <img
      src="./src/img/1024px-Zara_Logo 1.png"
      alt=""
      style="
        position: absolute;
        margin-top: -670px;
        margin-left: 880px;
        background-color: transparent;
      "
    />

    <img
      src="./src/img/1024px-Zara_Logo 2.png"
      alt=""
      style="
        position: absolute;
        margin-top: -500px;
        margin-left: 750px;
        background-color: transparent;
      "
    />

    <p
      style="
        position: absolute;
        margin-top: -360px;
        margin-left: 750px;
        background-color: transparent;
        color: white;
        font-size: 25px;
      "
    >
      Lustrous Yet Understated. The New Evening <br />
      Wear Collection Exclusively Offered At The <br />
      Reopened Giorgio Armani Boutique In Los <br />Angeles.
    </p>

    <div>
      <a href="https://www.zara.com/az/en/">
        <button
          style="
            width: 237px;
            height: 72px;

            padding: 19px 26px 19px 26px;
            position: absolute;
            margin-top: -230px;
            margin-left: 750px;
            background-color: transparent;
            background-color: white;
            font-size: 30px;
          "
        >
          See Collection
        </button>
      </a>
    </div>

    </div>



        <h2 style = "display: flex; justify-content: center; margin-top: 80px; font-size: 30px;">Best sellers</h2>
     <div class = "SubscribeDiv">
      <div>
        <a href="/">All Products</a>
        <a href="/">T-Shirt</a>
        <a href="/">Hoodies</a>
        <a href="/">Jacket</a>
      </div>

      <button class = "Subscribebtn">
       Show All
      </button>
    </div>




    
`;

const fullsubscribeController = new FullSubscribeController(
  new FullSubscribeModel(),
  new FullSubscribeView()
);

fullsubscribeController.updateView();

document.querySelector<HTMLDivElement>("#prod")!.innerHTML = `
<div style="background-color: "#e3e3e3">
      <h2
        style="
          display: flex;
          justify-content: center;
          margin-top: 90px;
          font-size: 30px;
        "
      >
        Follow products and discounts on Instagram
      </h2>
    </div>

`;

const followProductController = new ProductController(
  new ProductModel(),
  new ProductView()
);

followProductController.updateView();

document.querySelector<HTMLDivElement>("#sletter")!.innerHTML = `
    <div style="background-color: #e3e3e3
">
      <h2
        style="
          display: flex;
          justify-content: center;
          
          font-size: 30px;
          margin-top: 90px;
        "
      >
        Or subscribe to the newsletter
      </h2>


      
    <div class = "inputBtn">

    <input
      type="text"
      style="
        width: 251px;
        height: 22px;
        top: 32px;
        gap: 0px;
        border: 2px 0px 0px 0px;
        opacity: 0px;
      "
      placeholder="Email address..."
    />


    <button
      style="
        width: 91px;
        height: 22px;
        padding: 0px 16px 0px 16px;
        gap: 4px;
       
      "
    >
      SUBMIT
    </button>

    </div>


  </div>



<footer>
        <section>    
            <div id="containerFooter">
                
                <div id="webFooter">
                    <h2>CORAL</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing  elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua
                    </p>

                     <div>
    
      <a href="https://www.facebook.com/">
        <img src="./src/img/facebook.png" alt="facebook" />
      </a>

      <a href="https://x.com/">
        <img src="./src/img/tweetter.png" alt="twitter" />
      </a>

      <a href="https://www.linkedin.com/">
        <img src="./src/img/linIn.png" alt="" />
      </a>

      <a href="https://www.instagram.com/">
        <img src="./src/img/instagram.png" alt="" />
      </a>
    </div>
                        


                </div>

                <div id="webFooter">
                    <h2> CATALOG </h2>
                    <p> Necklaces </p>
                    <p> Hoodies </p>
                    <p> Jewelry Box </p>
                    <p> T-Shirt </p>
                    <p> jacket </p>
                </div>

                <div id="webFooter">
                    <h2> ABOUT US </h2>
                    <p> Our Producers </p>
                    <p> Sitemap </p>
                    <p> FAQ </p>
                    <p> About Us </p>
                    <p> Terms & Conditions </p>
                </div>

                 <div id="webFooter">
                    <h2> CUSTOMER SERVICES </h2>
                    <p> Contact Us </p>
                    <p> Track Your Order </p>
                    <p> Product Care & Repair </p>
                    <p> Book an Appointment </p>
                    <p> Shipping & Returns </p>
                </div>


               
            </div>
            <div id="credit">
            
            </div>

            

  <div
      style="
        display: flex;
        justify-content: space-evenly;
        background-color: #1e2832;
        height: 70px;
      "
    >
      <a
        href="https://www.linkedin.com/in/priyanka-sharma-b79401142"
        ,
        style="color: white; margin-top: 25px"
        >© 2022 Coral , Inc.</a
      >
      <div style="margin-top: 25px">
        <img src="./src/img/icons_payment 1.png" alt="" />
      </div>
      <p style="color: white; margin-top: 25px">Scroll to top</p>
    </div>
           
        </section>

    </footer>



`;
