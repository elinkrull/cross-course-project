//Error handling

// function showError(message) {
//     const errorContainer = document.getElementById("cart-container");
//     errorContainer.innerHTML += `<h2>${message}</h2>`;
//   }
  
  //Loading indicator
  
  // function showLoadingIndicator() {
  //   const loadingIndicator = document.getElementById("cart-container");
  //   loadingIndicator.innerHTML = "<li>Loading...</li>"
  // }

  // Function to extract the jacket ID from the query parameter
function getJacketIdFromQuery() {
  // try {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  return id;
  // } catch (error) {
  // throw new Error("Sorry, we could not fetch the Id");
  // }
} console.log(getJacketIdFromQuery)
// Function to extract the jacket title from the query parameter
function getJacketTitleFromQuery() {
  // try {
  const urlParams = new URLSearchParams(window.location.search);
  const title = urlParams.get("title");
  return title;
  // } catch (error) {
  // throw new Error("Sorry, we could not fetch the Title");
  // }
}

// Function to fetch the specific jacket to cart
async function fetchThatJacket() {
  // try {
  // showLoadingIndicator();
  const jacketId = getJacketIdFromQuery();

    
  // if(!jacketId)
  // showError(message);

  const response = await fetch(`https://api.noroff.dev/api/v1/rainy-days/${jacketId}`);
  const thatJacket = await response.json();
          
  const thatJacketContainer = document.getElementById("cart-container");
  // thatJacketContainer.innerHTML = "";

  thatJacketContainer.innerHTML += `
                <div class="shopping-bag-container1">
                    <div>
                        <h1 class="shopping-bag-header">Your shopping bag</h1>
                        <h2>${thatJacket.title}</h2>
                        <p>M</p>
                        <p>Remove</p>
                        <p>${thatJacket.price}</p>
                    </div>
                        <img src=${thatJacket.image} alt=${thatJacket.description} class="everest-shopping-bag">
                    <div>
                        <a href="product.html" class="continue-shopping-button">CONTINUE SHOPPING</a>
                    </div>
                </div>
                <div class="shopping-bag-container2">
                    <div>
                        <h1>Total:</h1>
                        <p>Total: kr 2 299</p>
                        <p>Shipping: kr 0</p>
                        <p>Total: kr 2 299</p>
                    </div>
                    <div>
                        <a href="delivery.html" class="button cart-pay-button">PAY NOW</a>
                    </div>
                </div>
                  `;


  // } catch (error) {
  //   showError(error.message);
  // }
}

fetchThatJacket();
