import React, { useState, useEffect, useContext } from "react";
import { Context } from "../context";
import { useRouter } from "next/router";

import ConversationsList from "../components/ConversationsList"




export default function Chats() {
  const { nickname, id } = useContext(Context);
  const router = useRouter();
  const [conversations, setConversations] = useState();

  
  useEffect(() => {
    if (nickname === "" || id === "") {
      router.push("/");
    }
  }, [nickname, id]);

 
  
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
