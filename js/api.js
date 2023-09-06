const url = "https://api.noroff.dev/api/v1/rainy-days";

async function makeApiCall() {
  try {
    const response = await fetch(url);

    const results = await response.json();

    // const objects = results.all;

    // for (let i = 0; i < objects.length; i++) {
    //   console.log(objects[i].text);
    // }

    console.log(results);
  } catch (error) {
    console.log(error);
    alert(error);
  }
}

makeApiCall();
