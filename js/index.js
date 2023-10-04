//Error handling

function showError(message) {
  const errorContainer = document.getElementById("best-sellers-jackets");
  errorContainer.innerHTML += `<h2>${message}</h2>`;
}

//Loading indicator

function showLoadingIndicator() {
  const loadingIndicator = document.getElementById("best-sellers-jackets");
  loadingIndicator.innerHTML = "<li>Loading...</li>"
}

//  API call

const urlRainyDays = "https://api.noroff.dev/api/v1/rainy-days";

async function getJackets() {
  try {
    showLoadingIndicator();
    const response = await fetch(urlRainyDays);
    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error("Sorry, we could not fetch the jackets");
  }
}

// Display the jackets on the index.html page:

async function displayJackets() {
  try {
  const jackets = await getJackets();
  const jacketsFrontPageContainer = document.getElementById("best-sellers-jackets");
  jacketsFrontPageContainer.innerHTML = "";

  for (let i = 0; i < 4; i++) {
    const jacket = jackets[i];

    jacketsFrontPageContainer.innerHTML += `<div class="best-sellers-jackets-container">
                                        <a href="specificproduct.html?id=${jacket.id}&title=${jacket.title}"><img src="${jacket.image}" alt="${jacket.description} "class="images-js"></a>
                                        <h2>${jacket.title}</h2>
                                        <p>USD ${jacket.price}</p>
                                        </div>`;
 }
} catch (error) {
    showError(error.message);
  }
}


displayJackets();