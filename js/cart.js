//Error handling

function showError(message) {
    const errorContainer = document.getElementById("main-container");
    errorContainer.innerHTML += `<h2>${message}</h2>`;
  }
  
  //Loading indicator
  
  function showLoadingIndicator() {
    const loadingIndicator = document.getElementById("main-container");
    loadingIndicator.innerHTML = "<li>Loading...</li>"
  }