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

// Getting the specific jacket:

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

async function getSpecificJacket() {
  const response = await fetch(url + id);

  const specificJacket = await response.json();

  return specificJacket;
}

export { getSpecificJacket };

// Display the jackets on the index.html page:

async function displayJackets() {
  const jackets = await makeApiCall();
  console.log(jackets);

  const jacketFrontPageContainer = document.getElementById(
    "best-sellers-jackets"
  );

  for (let i = 0; i < 4; i++) {
    console.log(jackets[i]);

    jacketFrontPageContainer.innerHTML += `<div class=".best-sellers-jackets-container">
                                        <a href="specificproduct.html?id=${jackets[i].id}"><img src="${jackets[i].image}" alt="${jackets[i].description}" class="images-js"></a>
                                        <h2>${jackets[i].title}</h2>
                                        <p>USD ${jackets[i].price}</p>
                                        </div>`;
  }
}

displayJackets();
