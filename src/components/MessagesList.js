import React,{useState, useEffect, useContext, useCallback} from 'react';
import { Context } from "../context";
import { connect } from "react-redux";
import { addMessage } from "../redux/actions/messageActions"
import {Loader ,Avatar, ChatContainer, ConversationHeader, MessageGroup, Message,MessageList, MessageInput, TypingIndicator } from "@chatscope/chat-ui-kit-react";
import useGetMessages from "../hooks/useGetMessages";
import getReceipientNickname from "../helpers/getReceipientNickname"
function MessagesList (props){
    let [currentMessage, setCurrentMessage] = useState("")
    const { nickname, id } = useContext(Context); 
    let {activeConversation, urlAvatar} = props;
    if( !activeConversation) 
      return(null)
    const {  messages, loading, error } = useGetMessages(activeConversation); 
   
    const handleChange = (value)=>{
        setCurrentMessage(value);
    }

    const handleSend = (content)=>{
      props.addMessage(content, activeConversation.id, id)
      setCurrentMessage("")
      //fetchMessages()
    }
      
    if(loading)
      return (<Loader />)
  
    return(
         <ChatContainer>
             <ConversationHeader>
             <Avatar src = {urlAvatar} 
                    name={nickname }  
                    className="avatar" 
                    />
                <ConversationHeader.Content userName={getReceipientNickname(activeConversation)} />
            </ConversationHeader>
             <MessageList >
                { messages && messages.map( (g) => 
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
const mapStateToProps = state => {
  return {message: state.message.content} 
}
const mapDispacthToProps = (dispatch) => {
  return {
      addMessage : (content, idConv)=> dispatch(addMessage(content,idConv))
  }
}

export default connect(mapStateToProps, mapDispacthToProps)(MessagesList)