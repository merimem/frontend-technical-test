import React,{useState, useEffect, useContext} from 'react';
import { Context } from "../context";

import { MainContainer, Sidebar, ConversationList, Conversation, Avatar, ChatContainer, ConversationHeader, MessageGroup, Message,MessageList, MessageInput, TypingIndicator } from "@chatscope/chat-ui-kit-react";
  



export default function ConversationsList(props) {
    
    console.log("props " , props)
    const { nickname, id } = useContext(Context); 
    return (
       <div style={{ position: "relative", height: "500px" }}>
        <MainContainer responsive>
        <Sidebar position="left" scrollable>
            <ConversationHeader style={{backgroundColor:"#fff"}}>
                <Avatar src="https://demo.chatscope.io/static/media/lilly.62d4acff.svg" />
                <ConversationHeader.Content>
                    {nickname}
                </ConversationHeader.Content>
            </ConversationHeader>
            <ConversationList>
                <Conversation key={1}
                                  name={nickname}
                                  info={"Draft"}
                                  active={true}
                                  unreadCnt={new Date()}
                                  onClick={() => setActiveConversation(c.id)}>
                        {}
                </Conversation>
         
            </ConversationList>
        </Sidebar>
        </MainContainer>
</div>
    )
}
