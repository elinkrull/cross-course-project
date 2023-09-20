//  API call

const urlRainyDays = "https://api.noroff.dev/api/v1/rainy-days";

async function getJackets() {
    const response = await fetch(urlRainyDays);
    const result = await response.json();
    return result;
}

// Display the jackets on the index.html page:

async function displayJackets() {
  const jackets = await getJackets() 
  const jacketsFrontPageContainer = document.getElementById("best-sellers-jackets");


  for (let i = 0; i < 4; i++) {
    const jacket = jackets[i];
    console.log(jacket);

    jacketsFrontPageContainer.innerHTML += `<div class="best-sellers-jackets-container">
                                        <a href="specificproduct.html?id=${jackets[i].id}"><img src="${jackets[i].image}" alt="${jackets[i].description} "class="images-js"></a>
                                        <h2>${jackets[i].title}</h2>
                                        <p>USD ${jackets[i].price}</p>
                                        </div>`;
 }
}

displayJackets();

// Display jackets on product.html page


async function displayAllJackets() {
  const productJackets = await getJackets();
  console.log(productJackets);

const jacketsProductPageContainer = document.getElementById("all-jackets");

for (let i = 0; i < 8; i++) {
  const allJackets = productJackets[i];
  console.log(allJackets);


  jacketsProductPageContainer.innerHTML += `<div class=("all-jackets-container")>
                                           <a href="specificproduct.html?id=${productJackets[i].id}"><img src="${productJackets[i].image}" alt="${productJackets[i].description}" class="images-js"></a>
                                          <h2>${productJackets[i].title}</h2>
                                          <p>USD ${productJackets[i].price}</p>
                                          </div>`;
 }
}

displayAllJackets();

//Display jacket by ID on specificproduct.html page

// function showError(message) {
//   const errorContainer = document.getElementById("?");
//   errorContainer.innerHTML = `<h2>Error: ${message}</h2>`;
// }

// //why is it async?
// async function getjacketDetails() {
//   const jacketId = getJacketId();
//   if (!jacketId) {
//     //Error handling?
//   }
// }

// try {
//   const response = await fetch(`https://api.noroff.dev/api/v1/rainy-days/$(jacketID)`);
//   if (!response.ok) {
//     throw new Error("Failed to fetch jacket with that id");
//   }
//   const jacketDetail = await response.json();

//   const jacketDetailContainer = document.getElementById("main-container");
//   jacketDetailContainer.innerHTML = `
//   <div class="main-container-jacket">
//   <img src="img/rainydays_everest.jpeg" alt="A picture of a green jacket" class="everest">
//   <p>Rainy Days "Everest"</p>
//   <p>2 299 kr</p>
// </div>
// <div class="main-container-info">              
//   <div>
//       <h1>Description</h1>
//       <p>This jacket is made for the best adventures in the<br>mountains. With its good durability and quality, this<br> jacket provides maximum protection in all weather<br> conditions. All seams and zips are taped for increased<br> waterproofness. All our jackets have a special Tec<br> membrane that provides superior waterproofing and<br> breathability.</p>
//   </div>
//   <div>
//       <p>Choose size</p>
//   </div>
//   <div>
//       <button>XS</button>
//       <button>S</button>
//       <button>M</button>
//       <button>L</button>
//       <button>XL</button>
//   <div>
//       <a href="cart.html"><button class="add-to-cart-button" type="button"> ADD TO CART</button></a> 
//   </div>
// </div> 
//   `;
// } catch (error) {
//   showError(error.message);
// }





//can you explain more why you did the appendchild thing in the code in martes ca?

