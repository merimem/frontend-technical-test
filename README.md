# Authentification :

The first page of the app, we asks the user to login.
I am supposing that nicknames are uniques so I can search for it in the DB.
If the nickname doesn't exist, I display error msg :  "User not found !"
if the nickname is empty, I display error msg : "Please enter your username !"

# Chat :
In this page : 
- Display a list of all the conversations
- Allow the user to select a conversation
  - Inside the conversation, there is a list of all the messages between these two users.
  - As a user, you can type and send new messages in this conversation
- The avatars are generated with the API eu.ui-avatars.
- If an error happens with the API, we display by default an alien avatar.


Thank you !