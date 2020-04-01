# ChatApp

Chatapp is an application that allows multiple people to message each other. Built using Spring Boot and React

## Running Locally
Run this inside of the chat folder
```bash
mvn install
mvn spring-boot:run
```
Run this inside of chat-app folder
```bash
npm start
```


## Notes
In application.resources spring.datasource.username and spring.datasource.password have been intentially left blank. Enter your mysql database username and passwords there!

## Chatting
If you would like to chat with yourself you must use two separate web browsers! (e.g., Safari and Chrome) The reason is because the logged in user is saved to localStorage and this persists betweeen tabs. So login with different users on different web browers to see the chatting in action!

## Public 
Below is a link to the app being hosted on heroku! (please be patient with it as it most likely got loaded off of memory)
<a>https://pumpkin-shortcake-84161.herokuapp.com</a>
