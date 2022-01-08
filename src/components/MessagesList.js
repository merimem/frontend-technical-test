import React,{useState, useEffect, useContext} from 'react';
import { Context } from "../context";
import axios from "axios";
import { connect } from "react-redux";
import { getAllAvatars } from "../redux/actions/userActions"
import {Avatar, ChatContainer, ConversationHeader, MessageGroup, Message,MessageList, MessageInput, TypingIndicator } from "@chatscope/chat-ui-kit-react";
 function MessagesList (props){
    let [messages, setMessages] = useState()
    const { nickname, id } = useContext(Context); 
    let {activeConversation} = props
    
    useEffect(() => {
      if(activeConversation){
        const fetchData = async () => {
          const result = await axios(
            `http://localhost:3005/messages/${activeConversation.id}`          
          );
          console.log("messages:  ", result.data)
          setMessages(result.data);
        };
        fetchData();
      }
       
      },[props.activeConversation])
     
      
      const fetchNameOtherUser = () => {
         let x = activeConversation.recipientNickname == nickname ? activeConversation.senderNickname : activeConversation.recipientNickname
  
         return x;
        }
      if(!messages || !activeConversation) 
         return("")
      
      return(
         <ChatContainer>
             <ConversationHeader>
             <Avatar src = "https://chatscope.io/storybook/react/static/media/zoe.e31a4ff8.svg" 
                    name={nickname }  
                    className="avatar" 
                    />
                <ConversationHeader.Content userName={fetchNameOtherUser()} />
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
            {/* <MessageInput value={currentMessage} onChange={handleChange} onSend={handleSend} disabled={!activeConversation} attachButton={false} placeholder="Type here..."/> */}
        </ChatContainer>

    ) 
}
const mapStateToProps = state => {
  return {avatar: state.user.avatar} 
}
const mapDispacthToProps = (dispatch) => {
  return {
      getAvatar : (nickname)=> dispatch(getAvatar(nickname))
  }
}

export default connect(mapStateToProps, mapDispacthToProps)(MessagesList)