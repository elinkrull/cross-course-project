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
                                        <a href="specificproduct.html?id=${jackets[i].id}"><img src="${jackets[i].image}" alt="${jackets[i].description}" class="images-js"></a>
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




//can you explain more why you did the appendchild thing in the code in martes ca?

