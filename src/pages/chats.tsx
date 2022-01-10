import React, {  useEffect } from "react";
import { useRouter } from "next/router";
import ConversationsList from "../components/ConversationsList"
import {  useReduxState, useReduxDispatch } from '../redux/redux-bindings';



export default function Chats() {
  const state = useReduxState();
  const router = useRouter();

   useEffect(() => {
    if ( state.user.id === "") {
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
