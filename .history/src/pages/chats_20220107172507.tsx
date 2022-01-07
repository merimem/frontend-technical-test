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
  if (!showChat) return <div />;
  return (
    <div className="background">
      <div className="shadow">
        <ConversationsList/>}
        />
      </div>
    </div>
  )
}
