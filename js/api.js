const url = "https://api.noroff.dev/api/v1/rainy-days";

async function makeApiCall() {
  try {
    const response = await fetch(url);

    const results = await response.json();

    console.log(results);
  } catch (error) {
    console.log(error);
    alert(error);
  }
}

makeApiCall();
