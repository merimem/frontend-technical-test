import React,{useState, useEffect, useContext, useCallback} from 'react';
import { addMessage } from "../redux/actions/messageActions"
import {Loader ,Avatar, ChatContainer, ConversationHeader,MessageList, MessageInput, TypingIndicator } from "@chatscope/chat-ui-kit-react";
import getReceipientNickname from "../helpers/getReceipientNickname";
import {  useReduxState, useReduxDispatch } from '../redux/redux-bindings';
import { setMessages } from "../redux/actions/messageActions";
import Message  from "./Message";

function MessagesList (props){
    const state = useReduxState();
    const dispatch = useReduxDispatch();
    const [currentMessage, setCurrentMessage] = useState("")
    const { nickname, id, allAvatars, conversations } = state.user; 
    const { messages } = state.message; 
    let {activeConversation, urlAvatar} = props;
    if( !activeConversation) 
      return(null)
    
    useEffect(() => {}, [dispatch, state.messages]);
   
    useEffect(()=>{
        dispatch(setMessages(activeConversation.id));
    }, [activeConversation.id])
   
    const handleChange = (value)=>{
        setCurrentMessage(value);
    }

    const handleSend = (content)=>{
      dispatch(addMessage(content, activeConversation.id, id));
      setCurrentMessage("")
    } 
      
    return(
         <ChatContainer>
             <ConversationHeader>
             <Avatar src = {urlAvatar} 
                    name={nickname }  
                    className="avatar" 
                    />
                <ConversationHeader.Content userName={getReceipientNickname(activeConversation, nickname)} />
            </ConversationHeader>
             <MessageList >
                {  messages.map( (g) => 
                        <Message  key={g.id} content = {g} id = {id} />)
                }
            </MessageList> 
            <MessageInput value={currentMessage} onChange={handleChange} onSend={handleSend} disabled={!activeConversation} attachButton={false} placeholder="Type here..."/> 
        </ChatContainer>

    )  
}
 

export default MessagesList