import React,{useState, useEffect, useContext} from 'react';
import { Context } from "../context";
/* import Avatar, { Cache, ConfigProvider } from 'react-avatar'; */
import getRandomColor from '../helpers/getRandomColor';

import {Avatar,  MainContainer, Sidebar, ConversationList, Conversation, ChatContainer, ConversationHeader, MessageGroup, Message,MessageList, MessageInput, TypingIndicator } from "@chatscope/chat-ui-kit-react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";




export default function ConversationsList(props) {
    
    console.log("props " , props)
    const { nickname, id } = useContext(Context); 
    let {conversations } = props
    return (
       <div style={{ position: "relative", height: "500px" }}>
        <MainContainer responsive>
        <Sidebar position="left" scrollable>
            <ConversationHeader style={{backgroundColor:"#fff"}}>
            <Avatar src = "https://chatscope.io/storybook/react/static/media/zoe.e31a4ff8.svg" name={nickname } round={true} className="avatar" size="50px" color={getRandomColor()}/>
                <ConversationHeader.Content>
                    {nickname}
                </ConversationHeader.Content>
            </ConversationHeader>
            <ConversationList>
                {
                    {/* props.conversations.map(conv =>{
                        <Conversation key={conv.id}
                                  name={conv.senderNickname}
                                  info={"Draft"}
                                  active={true}
                                  onClick={() => setActiveConversation(c.id)}>
                            {}
                        </Conversation>

                    }) */}
                }
                
                <Conversation key={1}
                                  name={"test"}
                                  info={"coucou"}
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
