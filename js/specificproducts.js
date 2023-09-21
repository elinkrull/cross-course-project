//  API call

const urlRainyDays = "https://api.noroff.dev/api/v1/rainy-days";

async function getJackets() {
    const response = await fetch(urlRainyDays);
    const result = await response.json();
    
    return result;
}


// Function to extract the jacket ID from the query parameter
function getJacketIdIdFromQuery() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    
    return id;
  }
  
  // Function to fetch joke details using the joke ID and populate the details section
  async function fetchJacketDetail() {
    const jacketId = getJacketIdFromQuery();
  
      const response = await fetch(
        `https://api.noroff.dev/api/v1/rainy-days/${jacketId}`
      );
     
      const jacketDetail = await response.json();
      
    
  //       <h2>${jokeDetail.id}: ${jokeDetail.setup}</h2>
  //       <p>${jokeDetail.punchline}</p>


  const jacketDetailContainer = document.getElementById("main-container");
  jacketDetailContainer.innerHTML = `
  <div class="main-container-jacket">
  <img src=${jacketDetail.image} alt=${jacketDetail.description} class="everest">
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

fetchJacketDetail();





// can you explain more why you did the appendchild thing in the code in martes ca?

