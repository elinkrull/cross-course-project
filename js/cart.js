//Error handling

function showError(message) {
    const errorContainer = document.getElementById("cart-container");
    errorContainer.innerHTML += `<h2>${message}</h2>`;
  }
  
  //Loading indicator
  
  function showLoadingIndicator() {
    const loadingIndicator = document.getElementById("cart-container");
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

// Function to fetch the specific jacket to cart
async function fetchJacketDetail() {
  try {
  showLoadingIndicator();

  const jacketId = getJacketIdFromQuery();

    
  if(!jacketId)
  showError(message);

  const response = await fetch(
	`https://api.noroff.dev/api/v1/rainy-days/${jacketId}`
  );
  
  const jacketDetail = await response.json();
  console.log(jacketDetail);
          
  const jacketDetailContainer = document.getElementById("cart-container");
  jacketDetailContainer.innerHTML = "";

  jacketDetailContainer.innerHTML += `
                <div class="shopping-bag-container1">
                    <div>
                        <h1 class="shopping-bag-header">Your shopping bag</h1>
                        <h2>${jacketDetail.title}</h2>
                        <p>M</p>
                        <p class="remove item">Remove</p>
                        <p>USD${jacketDetail.price}</p>
                    </div>
                        <img src=${jacketDetail.image} alt=${jacketDetail.description} class="images-js">
                    <div>
                        <a href="product.html" class="continue-shopping-button">CONTINUE SHOPPING</a>
                    </div>
                </div>
                <div class="shopping-bag-container2">
                    <div>
                        <h3>Total:</h3>
                        <p>USD${jacketDetail.price}</p>
                        <p>Shipping: $ 0</p>
                        <p>USS</p>
                    </div>
                    <div>
                        <a href="delivery.html" class="button cart-pay-button">PAY NOW</a>
                    </div>
                </div>
                  `;


  } catch (error) {
    showError(error.message);
  }
}

fetchJacketDetail();


