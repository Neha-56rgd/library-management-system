# library-management-system
  This is a library management API backed for the management of users and the books

  # Routes and the Endpoints

  ## \users
  GET: get all the list of users in the system
  POST: create/Register a new user

  # /users{id}
  GET: get a user by their ID
  PUT: update a user by their ID
  DELETE: delete a user by their ID (Check if the user still has a issued book) && (is there any fine/penalty to be collected) 

  ## /users/subscription-details/{id}
  GET: get subscription details of a user by their ID
    >>Date of subscription
    >>valid till ?
    >>Fine if any ?
  
  ## /books
  Get: get all the list of books in the system  
  POST: Add a new book to the system

  ## /books/{id}
  GET: get a book by its ID
  PUT: update a book by its ID
  DELETE: delete a book by its ID (Check if the book is issued to any user)

  ## /books/issued
  GET: get all the list of issued books in the system

  ## /books/issued/withfine
  GET: get all the list of issued books with fine in the system

  ## Subscription Types
   >>Basic (3 months)
    >>Standard (6 months)
    >>Premium (12 months)

>> If a user misses the renewal date, a fine of INR 100 will be charged as penalty
>> If a user misses his subscription, then user is expected to pay a fine of INR 100
>> If a user misses both renewal and subscription, then user is expected to pay a fine of INR 200

## Commands:
npm init
npm i express
npm i nodemon 

npm run dev

To restore node and package files.json ----> npm i/npm install