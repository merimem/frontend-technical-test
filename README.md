# Authentification :

In the first page of the app, you can find the login form.
I suppose that nicknames are uniques so I can search for it in the DB.
If the nickname doesn't exist, an error msg is displayed:  "User not found !"
if the nickname is empty, an error msg is displayed : "Please enter your username !"

# Chat :
In this page, you can fin : 
- a list of all the conversations
- the user can select a conversation
  - Inside the conversation, there is a list of all the messages between the two users.
  - As a user, you can type and send new messages in this conversation
- The avatars are generated with the API eu.ui-avatars.
- If an error happens with the API, an alien avatar is displayed by default.

# Link :
Plz follow this steps to test the app in heroku :
1. Clone the project
2. In the project folder run: npm run start-server
3. test here: https://leboncoin-chat.herokuapp.com/chats 
4. // or run npm run start




Thank you !
