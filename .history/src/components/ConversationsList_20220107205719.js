import React,{useState, useEffect, useContext} from 'react';
import { Context } from "../context";
/* import Avatar, { Cache, ConfigProvider } from 'react-avatar'; */
import getRandomColor from '../helpers/getRandomColor';
import { MessagesList } from './MessagesList';
import {Avatar,  MainContainer, Sidebar, ConversationList, Conversation, ChatContainer, ConversationHeader, MessageGroup, Message,MessageList, MessageInput, TypingIndicator } from "@chatscope/chat-ui-kit-react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";




export default function ConversationsList(props) {
    const { nickname, id } = useContext(Context); 
    let [activeConversation, setActiveConversation] = useState(0)
    let {conversations } = props
   
   

        
    const getDate = (tmp)=>{
       
        var date = new Date(tmp);
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        return (monthNames[date.getMonth()]
               + " "+date.getDate()
                )
                
            }
    
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
                
                    {conversations?
                         conversations.map(conv =>{
                            return <Conversation key={conv.id}
                                    name={conv.recipientNickname}
                                    info={getDate(conv.lastMessageTimestamp)}
                                    active={activeConversation === conv.id}
                                    onClick={() => setActiveConversation(conv.id)}>
                                {}
                            </Conversation>
                        }) 
                        :  ""
                    }
                
                
               
         
            </ConversationList>
        </Sidebar>
        </MainContainer>
        <MessagesList activeConversation = {activeConversation} />
</div>
    )
}
