import React, { useState, useEffect, useContext } from "react";
import { Context } from "../context";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import axios from "axios";
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

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `http://localhost:3005/conversations/${id}`,
        
      );
      setConversations(result.data);
    };
    fetchData();
  },[])

  
  return (
    <div className="background">
      <div className="shadow">
      <div class="ce-chat-engine" style={{text-align: "left", background-color: "white"}}>
        <ConversationsList conversations = {conversations}/>
        </div>
        
      </div>
    </div>
  )
}
