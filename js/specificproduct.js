import { displayJackets } from "./products.js";

const specificJacketContainer = document.getElementById(
  "specific-jacket-container"
);

async function displaySpecificPageJackets() {
  try {
    const specificJacket = await displayJackets();
  } catch (error) {
    console.log(error);
    alert(error);
  }

  specificJacketContainer.innerHTML += `<div class="specific-jacket-container">
    <img src="img/rainydays_everest.jpeg" alt="A picture of a green jacket" class="everest">
    <p>${specificJacket.title}</p>
    <p>USD ${specificJacket.price}</p>
</div>
<div class="main-container-info">
    <div>
        <h1>Description</h1>
        <div>${specificJacket.description}
        </div>
    </div>
    <div>
        <p>Choose size${specificJacket.size}</p>
    </div>
    <div>
        <button>XS</button>
        <button>S</button>
        <button>M</button>
        <button>L</button>
        <button>XL</button>
    <div>
        <a href="cart.html"><button class="add-to-cart-button" type="button"> ADD TO CART</button></a>
    </div>
</div>`;
}

displaySpecificPageJackets();
