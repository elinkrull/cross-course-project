//Error handling

function showError(message) {
    const errorContainer = document.getElementById("main-container");
    errorContainer.innerHTML += `<h2>${message}</h2>`;
  }


// Function to extract the jacket ID from the query parameter
function getJacketIdFromQuery() {
    try {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    return id;
  } catch (error) {
    throw new Error("Sorry, we could not fetch the Id");
  }
  }

  // Function to extract the jacket title from the query parameter
function getJacketTitleFromQuery() {
    try {
    const urlParams = new URLSearchParams(window.location.search);
    const title = urlParams.get("title");
    return title;
  } catch (error) {
    throw new Error("Sorry, we could not fetch the Title");
  }
  }

    // Function to fetch jacket details using the jacket ID and populate the details section
  async function fetchJacketDetail() {
    try {
    const jacketId = getJacketIdFromQuery();

        if(!jacketId)
    showError(message);

    const response = await fetch(`https://api.noroff.dev/api/v1/rainy-days/${jacketId}`);
    const jacketDetail = await response.json();

    const jacketDetailContainer = document.getElementById("cart-container-1");

    jacketDetailContainer.innerHTML += `
    <div>
    <h1 class="shopping-bag-header">Your shopping bag (1 item)</h1>
    <p>${jacketDetail.title}</p>
    <p>Size M</p>
    <p>Remove</p>
    <p>${jacketDetail.price}</p>
</div>
    <img src=${jacketDetail.image} alt=${jacketDetail.description} class="images-js">
<div>
    <a href="product.html" class="continue-shopping-button">CONTINUE SHOPPING</a>
</div>
    `;

} catch (error) {
    showError(error.message);
}
}

fetchJacketDetail();
