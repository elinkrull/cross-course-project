//Error handling

function showError(message) {
    const errorContainer = document.getElementById("main-container");
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


// Function to extract the jacket ID from the query parameter
function getJacketIdFromQuery() {
    try {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    return id;
  } catch (error) {
    throw new Error("Sorry, we could not fetch the Id's");
  }
}
  
  // Function to fetch jacket details using the jacket ID and populate the details section
  async function fetchJacketDetail() {
    try {
    const jacketId = getJacketIdFromQuery();
    const response = await fetch(`https://api.noroff.dev/api/v1/rainy-days/${jacketId}`);
    const jacketDetail = await response.json();
            

    const jacketDetailContainer = document.getElementById("main-container");

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
}
    } catch (error) {
        showError(message);
    }

fetchJacketDetail();

