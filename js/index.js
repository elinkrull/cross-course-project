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

export { makeApiCall };

async function displayJackets() {
  const jackets = await makeApiCall();
  console.log(jackets);

  const jacketFrontPageContainer = document.getElementById(
    "best-sellers-jackets"
  );

  for (let i = 0; i < 4; i++) {
    console.log(jackets[i]);

    jacketFrontPageContainer.innerHTML += `<div class=".best-sellers-jackets-container">
                                        <img src="${jackets[i].image}" alt="${jackets[i].description}" class="images-js">
                                        <h2>${jackets[i].title}</h2>
                                        <p>USD ${jackets[i].price}</p>
                                        </div>`;
  }
}

displayJackets();
