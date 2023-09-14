In this assignment, you will be required to modify your existing Cross-Course Project to fetch products from an external API. Your project should already have a product list page and a product detail page with hardcoded data, but you will now need to modify them to fetch data dynamically from the API.

The product list page should display a list of all products fetched from the API, and the user should be able to click on a product to view its details on a separate product detail page. You should ensure that the product data is not hardcoded into the HTML, but instead fetched dynamically from the API to display the latest data. Your API calls should include a loading indicator to show the user that data is being fetched. Additionally, you should implement error handling to catch any errors that may occur when fetching data and display an appropriate message on the page. Make sure that your project is tested thoroughly to ensure that it works as expected.

Level 1 Process

Look through your website and assess where API calls need to be made to dynamically add content. You should have a products page and a product details page, but there might be other pages like the home page where products are loaded.

Remove the hardcoded products from the HTML.

Fetch the products from the API and dyncamically add them to the page with links to the product details page. Use the ID as a query string parameter so that on the product details page you know which item has been clicked on.

On the product details page make a request to the API for the specific data for the product that the user has clicked on.

Add loading indicators when making API calls.

Ensure proper error handling.

Test the site.

Remove console.logs you’ve been using for testing.

Deliver the link to your site and your repository.
