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

  const title = getJacketTitleFromQuery();
  
  if(!jacketId)
  showError(message);

  const response = await fetch(`https://api.noroff.dev/api/v1/rainy-days/${jacketId}`);
  const jacketDetail = await response.json();
          
  const jacketTitleContainer = document.getElementById("title");
  const jacketDetailContainer = document.getElementById("main-container");

//Add jacket title to the title of the page
  jacketTitleContainer.textContent = title;
  jacketDetailContainer.innerHTML += `
      <div class="main-container-jacket">
      <img src=${jacketDetail.image} alt=${jacketDetail.description} class="images-js">
      <p>${jacketDetail.title}</p>
      <p>USD ${jacketDetail.price}</p>
      </div>
      <div class="main-container-info">              
      <div>
          <h1>Description</h1>
          <p>${jacketDetail.description}</p>
      </div>
      <div>
          <p>Choose size</p>
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
      </div> 
      `;
    } catch (error) {
      showError(error.message);
  }
}

fetchJacketDetail();