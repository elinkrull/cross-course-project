//Error handling

function showError(message) {
  const errorContainer = document.getElementById("main-container");
  errorContainer.innerHTML += `<h2>${message}</h2>`;
}

//Loading indicator

function showLoadingIndicator() {
  const loadingIndicator = document.getElementById("main-container");
  loadingIndicator.innerHTML = "<li>Loading...</li>"
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
  showLoadingIndicator();
  const jacketId = getJacketIdFromQuery();

  const title = getJacketTitleFromQuery();
  
  if(!jacketId)
  showError(message);

  const response = await fetch(`https://api.noroff.dev/api/v1/rainy-days/${jacketId}`);
  const jacketDetail = await response.json();
          
  const jacketTitleContainer = document.getElementById("title");
  const jacketDetailContainer = document.getElementById("main-container");
  jacketDetailContainer.innerHTML = "";

//Add jacket title to the title of the page
  jacketTitleContainer.textContent = title;
  jacketDetailContainer.innerHTML += `
      <div class="main-container-jacket">
      <img src=${jacketDetail.image} alt=${jacketDetail.description} class="images-js">
      <h2>${jacketDetail.title}</h2>
      <p>USD ${jacketDetail.price}</p>
      </div>
      <div class="main-container-info">              
      <div>
          <h1>Description</h1>
          <p>${jacketDetail.description}</p>
      </div>
      <div>
          <h3>Choose size</h3>
      </div>
      <div>
          <button class="size-button">XS</button>
          <button class="size-button">S</button>
          <button class="size-button">M</button>
          <button class="size-button">L</button>
          <button class="size-button">XL</button>
      <div>
          <a href="cart.html"><button class="add-to-cart-button" type="button"> ADD TO CART</button></a> 
      </div>
      </div> 
      `;

//function to change color on the size button when being clicked
const sizeButtons = jacketDetailContainer.querySelectorAll(".size-button");

sizeButtons.forEach((sizeButton) => {
  sizeButton.addEventListener("click", () => {
    sizeButton.style.backgroundColor = "lightgrey";
  });
})


    } catch (error) {
      showError(error.message);
  }
}

fetchJacketDetail();


