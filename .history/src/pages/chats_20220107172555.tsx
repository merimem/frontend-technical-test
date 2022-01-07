import React, { useState, useEffect, useContext } from "react";
import { Context } from "../context";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";




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
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
        // 4. Setting *dogImage* to the image url that we received from the response above
    .then(data => setDogImage(data.message))
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
