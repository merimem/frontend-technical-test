import React,{useState, useEffect} from 'react';

import {
    MainContainer,
    ChatContainer,
    MessageList,
    Message,
    MessageInput,
  } from "@chatscope/chat-ui-kit-react";
  



export default function ConversationsList(props) {
    
    console.log("props " , props)
       
    return (
       <div style={{ position: "relative", height: "500px" }}>
  <MainContainer>
    <ChatContainer>
      <MessageList>
        <Message
          model={{
            message: "Hello my friend",
            sentTime: "just now",
            sender: "Joe",
          }}
        />
      </MessageList>
      <MessageInput placeholder="Type message here" />
    </ChatContainer>
  </MainContainer>
</div>
    )
}
