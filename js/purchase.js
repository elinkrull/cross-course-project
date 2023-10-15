const paymentCardFieldset = document.getElementById("payment-card-fieldset");
const creditCard = document.getElementById("credit-debit-card");

// Function to show the paymentCardFieldset
function showPaymentCardFieldset() {
	paymentCardFieldset.style.display = "block";
  }
  
  // Function to hide the paymentCardFieldset
  function hidePaymentCardFieldset() {
	paymentCardFieldset.style.display = "none";
  }
  
  hidePaymentCardFieldset();
  

  creditCard.addEventListener("click", () => {
	if (creditCard.checked) {
	  showPaymentCardFieldset();
	} else {
	  hidePaymentCardFieldset();
	}
  });

paymentCardFieldset.innerHTML += `
<div class="payment-card-container">
	<fieldset class="payment-card-info">
		<label for="name">Name</label>
		<input type="text" name="name" id="name" class="form input" required />
		<label for="number">Card number</label>
		<input type="text" name="name" id="name" class="form input" required />
		<label for="name">Expiration date</label>
		<input type="text" name="name" id="name" class="form input" required />
		<label for="cvc">cvc</label>
		<input type="text" name="cvc" id="cvc" class="form input" required />
	</fieldset>
</div> 
`;
