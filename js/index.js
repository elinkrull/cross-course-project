const url = "https://api.noroff.dev/api/v1/rainy-days";

async function makeApiCall() {
  try {
    const response = await fetch(url);

    const results = await response.json();

    console.log(results);
  } catch (error) {
    console.log(error);
    resultsContainer.innerHTML = error;
  }
}

makeApiCall();

/* <div class="best-sellers-jackets">
                    <figure class="best-sellers-jackets-container">
                        <a href="spesificproduct.html"><img src="img/rainydays_everest.jpeg" alt="A green jacket" class="index-everest"> </a>
                    </figure>
                    <p>Rainy Days "Everest"</p>
                    <p> 2 299 kr</p>
                </div>
                <div class="best-sellers-jackets">
                    <figure class="best-sellers-jackets-container">
                        <img src="img/rainydays_biker.png" alt="A black jacket with some white detalis" class="index-biker">
                    </figure>
                    <p>Rainy Days "Biker"</p>  
                    <p>1 899 kr</p>
                </div>
                <div class="best-sellers-jackets">
                    <figure class="best-sellers-jackets-container">
                        <img src="img/rainydays_runnerlight.png" alt="A grey running jacket" class="index-runner-light">
                    </figure>
                    <p>Rainy Days "Runner Light"</p>
                    <p>1 899 kr</p>
                </div>
                <div class="best-sellers-jackets">
                    <figure class="best-sellers-jackets-container">
                        <img src="img/rainydays_racer.png" alt="A grey and orange jacket" class="index-racer">
                    </figure>
                    <p>Rainy Days "Racer"</p>  
                    <p>2 299 kr</p>  
                </div> */
