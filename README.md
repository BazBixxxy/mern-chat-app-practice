# MERN CHAT APP

This is a full stack chat app project is designed using the MERN stack (MongoDB, ExpressJS, ReactJS and NodeJS) It includes features such as user registration, user authentication, and real-time messaging.
Check out the app here.

# Production And Development

# Backend

- Set up the backend with the main.js/server.js file.
- Set up the development/local server.
- Connect/link the server to mongoDB database.

# Authentication

signup

- get inputs from the user
- check if passwords match
- check if the user exists
- hash the password
- create the new user and save them to the database
- set the cookie and call the response

login

- get inputs from the user
- decode it from brcypt and check whether its true
- generate the token and set the cookie
- send the response from the server

logout

- to logout, we delete the cookies from the browser

# messaging

sending message

- get the message input
- get access the receiver id
- get the sender id
- we look for the conversation
- we create the conversation and push it to message array
- we save the message to data base

# fetching messages

# fetching users

- return all the users accept the current authenticated users

! Issues

- Socket-io and real time messaging is still malfunctioning
- the design is not mobile responsive
