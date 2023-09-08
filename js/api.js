const urlRainyDays = "https://api.noroff.dev/api/v1/rainy-days";

async function makeApiCall() {
  try {
    const response = await fetch(urlRainyDays);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    alert(error);
  }
}

makeApiCall();

async function displayJackets() {
  const jackets = await makeApiCall();
  console.log(jackets);

  const jacketsContainer = document.getElementById("all-jackets");

  for (let jacket of jackets) {
    jacketsContainer.innerHTML += `<h2>${jacket.title}</h2>
                                    <p>Kr ${jacket.price}</p>
                                    <img src="${jacket.image}" class="images">`;
  }
}

displayJackets();
