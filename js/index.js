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
                                        <a href="specificproduct.html?id=${jacket.id}"><img src="${jacket.image}" alt="${jacket.description} "class="images-js"></a>
                                        <h2>${jacket.title}</h2>
                                        <p>USD ${jacket.price}</p>
                                        </div>`;
 }
}

displayJackets();

