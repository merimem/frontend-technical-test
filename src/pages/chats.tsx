import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ConversationsList from "../components/ConversationsList"
import {  useReduxState, useReduxDispatch } from '../redux/redux-bindings';



export default function Chats() {
  const state = useReduxState();

  //const { nickname, id } = useContext(Context);
  const router = useRouter();
  const [conversations, setConversations] = useState();

  console.log("state ",state.user)
   useEffect(() => {
    if (state.user.nickname === "" || state.user.id === "") {
      router.push("/");
    }
  }, [state.user]);
 
 
  
  return (
    <div className="background">
      <div className="shadow">
      <div className="ce-chat-engine" >
         <ConversationsList /> 
        </div>
        
      </div>
    </div>
  )
}
