//Error handling

function showError(message) {
  const errorContainer = document.getElementById("all-jackets");
  const message = ("Sorry, something went wrong");
  errorContainer.innerHTML += `<h2>${message}</h2>`;
}


//  API call

const urlRainyDays = "https://api.noroff.dev/api/v1/rainy-days";

async function getJackets() {
  try {  
  const response = await fetch(urlRainyDays);
    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error("Sorry, we could not fetch the jackets");
  }
}




async function displayAllJackets() {
  const productJackets = await getJackets();
  console.log(productJackets);

const jacketsProductPageContainer = document.getElementById("all-jackets");

for (let i = 0; i < 8; i++) {
  const allJackets = productJackets[i];
  console.log(allJackets);


  jacketsProductPageContainer.innerHTML += `<div class="all-jackets-container">
                                           <a href="specificproduct.html?id=${allJackets}"><img src="${allJackets.image}" alt="${allJackets.description}" class="images-js"></a>
                                          <h2>${allJackets.title}</h2>
                                          <p>USD ${allJackets.price}</p>
                                          </div>`;
 }
}

displayAllJackets();
