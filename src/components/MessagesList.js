import React,{useState, useEffect, useContext, useCallback} from 'react';
import { addMessage } from "../redux/actions/messageActions"
import {Loader ,Avatar, ChatContainer, ConversationHeader, MessageGroup, Message,MessageList, MessageInput, TypingIndicator } from "@chatscope/chat-ui-kit-react";
import getReceipientNickname from "../helpers/getReceipientNickname";
import {  useReduxState, useReduxDispatch } from '../redux/redux-bindings';
import { setMessages } from "../redux/actions/messageActions";
function MessagesList (props){
    const state = useReduxState();
    const dispatch = useReduxDispatch();
    const [currentMessage, setCurrentMessage] = useState("")
    const { nickname, id, allAvatars, conversations } = state.user; 
    const { messages } = state.message; 
    let {activeConversation, urlAvatar} = props;
    if( !activeConversation) 
      return(null)
    console.log("staate ",state.message)
   
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
      
   
    console.log("urlAvatar ",urlAvatar)
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
                    <MessageGroup key={g.id} direction={g.authorId == id ? "outgoing":"incoming"}>
                    <MessageGroup.Messages>
                       <Message key={"msg"+g.id} model={{
                            type: "html",
                            message: g.body
                        }} />
                        </MessageGroup.Messages>
                    
                </MessageGroup>)}
            </MessageList> 
            <MessageInput value={currentMessage} onChange={handleChange} onSend={handleSend} disabled={!activeConversation} attachButton={false} placeholder="Type here..."/> 
        </ChatContainer>

    )  
}
 

export default MessagesList