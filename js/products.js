import { makeApiCall } from "./index.js";

async function displayJackets() {
  const jackets = await makeApiCall();
  console.log(jackets);

  const jacketsContainer = document.getElementById("all-jackets");

  for (let jacket of jackets) {
    jacketsContainer.innerHTML += `<div class="all-jackets-container">
                                    <a href="specificproduct.html?id=${jacket.id}"><img src="${jacket.image}" alt="${jacket.description}" class="images-js"></a>
                                    <h2>${jacket.title}</h2>
                                    <p>USD ${jacket.price}</p>
                                    </div>`;
  }
}

displayJackets();

export { displayJackets };
