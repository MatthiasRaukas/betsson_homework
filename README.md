Task 1 

Test Plan: 

Login functionality 

1. Valid Login, verify successful login with valid credentials 

2. Invalid Login, verify error message with invalid credentials 

3. Empty Login: verify error message when username and password fields are empty 

Product management 

1. Add the product, verify that adding ONE product to the cart works 

2. Add multiple products, verify that adding TWO products to the cart works 

3. Remove product, verify removing a product from the cart works 

Chose Playwright for its easy integration and API testing. Did not use POM as tests directly interact with DOM using selectors. 

Tried to keep the tests in feature-specific files e.g. login.spec.js and cart.js and pretty basic, although I'm very intrigued to learn even more about playwright. 

For the second feature I used Record tool a little bit but can also do without, just to show my experience with playwright. 

 

Task 2 

Test Plan: 

GET  

1. Retrieve all the sold pets and verify that pet named ‘caini’ is in that list and status code 200 response. 

2. Retrieve a pet using a non-existent or invalid ID and verify a 404 response 

 

POST 

1. Add a valid pet with complete details and verify the response status code is 200 and the returned data matches the input 

2. Place and order for a pet and verify the response status code is 200 and the returned data matches the input 

Decided to continue with Playwright but did not make it a reusable HTTP as the test itself is pretty straightforward.  

I'm also very comfortable with other APIs requests like delete and put. 

All the tests were successful and returned the correct data in response. 
