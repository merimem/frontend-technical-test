import React,{useState, useEffect, useContext} from 'react';
import { Context } from "../context";
import { connect } from "react-redux";
import { getAllAvatars } from "../redux/actions/userActions"
import getRandomColor from '../helpers/getRandomColor';
import  MessagesList  from './MessagesList';
import {Loader, Avatar,  MainContainer, Sidebar, ConversationList, Conversation, ChatContainer, ConversationHeader, MessageGroup, Message,MessageList, MessageInput, TypingIndicator } from "@chatscope/chat-ui-kit-react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import useGetConversations from '../hooks/useGetConversations';
import useGetAllNicknames from '../hooks/useGetAllNicknames';
import getDateFromTimestamp from '../helpers/getDateFromTimestamp'
import getReceipientNickname from "../helpers/getReceipientNickname";
import {  useReduxState, useReduxDispatch } from '../redux/redux-bindings';
import { setConversations } from "../redux/actions/userActions";
function ConversationsList(props) {
    const state = useReduxState();
    const dispatch = useReduxDispatch();
    const { nickname, id, allAvatars, conversations } = state.user; 
    const [activeConversation, setActiveConversation] = useState()
    if(id =="" )
        return null  
    const allNicknames = useGetAllNicknames(conversations)
    
    useEffect(() => {}, [dispatch]);
    useEffect(()=>{
        dispatch(setConversations(id));
    }, [])
    
     useEffect(()=>{
        conversations && setActiveConversation(conversations[0])
        dispatch(getAllAvatars(allNicknames) )
    }, [conversations])
     
    
    const getUrlAvatar  = (nickname) =>{ 
        let avatar =  allAvatars.filter((avatar)=>avatar.nickname.toLowerCase() === nickname.toLowerCase()).shift()
        if(avatar)
            return avatar.avatar;
        else
            return "data:image/png;base64,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"           
    } 
    
    /* if (loading) 
        return  <Loader />
    
    if (error) 
        handleError(error); */
    
    console.log("ConversationsList conversations",conversations)
    if(!activeConversation)
        return null;
    return (
       <div style={{ position: "relative", height: "500px" }}>
         <MainContainer responsive>
        <Sidebar position="left" scrollable>
            <ConversationHeader style={{backgroundColor:"#fff"}}>
            <Avatar src = {getUrlAvatar(nickname)} 
                    name={nickname }  
                    className="avatar" 
                    color={getRandomColor()}/>
                <ConversationHeader.Content>
                    {nickname}
                </ConversationHeader.Content>
            </ConversationHeader>
            <ConversationList>
                
                    {conversations?
                         conversations.map(conv =>{
                            let pseudoname = conv.recipientNickname == nickname ? conv.senderNickname : conv.recipientNickname
                            
                            return <Conversation key={conv.id}
                                    name={getReceipientNickname(conv, nickname) }
                                    info={getDateFromTimestamp(conv.lastMessageTimestamp)}
                                    active={activeConversation.id === conv.id}
                                    onClick={() => setActiveConversation(conv)}>
                                    <Avatar src={getUrlAvatar(pseudoname)} name="Lilly" />            
                            </Conversation>
                        }) 
                        :  ""
                    }
                
                
               
         
            </ConversationList>
        </Sidebar>
         {/* <MessagesList activeConversation = {activeConversation} urlAvatar = {getUrlAvatar(getReceipientNickname(activeConversation))} />  */}
        </MainContainer> 
         
</div>
    )
}
const mapStateToProps = state => {
    return {allAvatars: state.user.allAvatars} 
}
const mapDispacthToProps = (dispatch) => {
    return {
        getAllAvatars : (nicknames)=> dispatch(getAllAvatars(nicknames))
    }
}
  
  export default ConversationsList