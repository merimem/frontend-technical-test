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

  console.log("id ",id)
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
        console.log("before filter", result.data)
      let data = result.data.filter((conv)=>
        conv.recipientId !== id
      )
      console.log("after filter ", data)
      setConversations(result.data);
    };
    fetchData();
  },[])

  
  return (
    <div className="background">
      <div className="shadow">
      <div className="ce-chat-engine" >
        <ConversationsList conversations = {conversations}/>
        </div>
        
      </div>
    </div>
  )
}
