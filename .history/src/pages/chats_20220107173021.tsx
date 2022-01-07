import React, { useState, useEffect, useContext } from "react";
import { Context } from "../context";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import axios from "axios";




export default function Chats() {
  const { nickname, id } = useContext(Context);
  const router = useRouter();
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    if (typeof document !== undefined) {
      setShowChat(true);
    }
  }, []);
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

      //setData(result.data);
    };

    fetchData();
 
    
  },[])

  if (!showChat) return <div />;
  return (
    <div className="background">
      <div className="shadow">
        <ConversationsList/>
        
      </div>
    </div>
  )
}
