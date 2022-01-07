import React,{useState, useEffect, useContext} from 'react';
import { Context } from "../context";
import axios from "axios";
import {Avatar, ChatContainer, ConversationHeader, MessageGroup, Message,MessageList, MessageInput, TypingIndicator } from "@chatscope/chat-ui-kit-react";
export default function MessagesList (props){
    let [messages, setMessages] = useState()
    const { nickname, id } = useContext(Context); 
    let {idActiveConversation} = props
    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            `http://localhost:3005/messages/${idActiveConversation}`          
          );
          console.log("messages:  ", result.data)
          setMessages(result.data);
        };
        fetchData();
      },[])
    return(
         <ChatContainer>
             <ConversationHeader>
             <Avatar src = "https://chatscope.io/storybook/react/static/media/zoe.e31a4ff8.svg" 
                    name={nickname }  
                    className="avatar" 
                    />
                <ConversationHeader.Content userName={nickname} />
            </ConversationHeader>
            {/* <MessageList typingIndicator={getTypingIndicator()}>
                {activeConversation && currentMessages.map( (g:MessageGroup) => <MessageGroup key={g.id} direction={g.direction}>
                    <MessageGroup.Messages>
                        {g.messages.map((m:ChatMessage<MessageContentType>) => <Message key={m.id} model={{
                            type: "html",
                            payload: m.content
                        }} />)}
                    </MessageGroup.Messages>
                </MessageGroup>)}
            </MessageList> */}
            {/* <MessageInput value={currentMessage} onChange={handleChange} onSend={handleSend} disabled={!activeConversation} attachButton={false} placeholder="Type here..."/> */}
        </ChatContainer>

    )
}