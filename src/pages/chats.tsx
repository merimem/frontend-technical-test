import React, {  useEffect } from "react";
import { useRouter } from "next/router";
import ConversationsList from "../components/ConversationsList"
import {  useReduxState, } from '../redux/redux-bindings';
import Layout  from "../components/layout";
import Head from 'next/head'


export default function Chats() {
  const state = useReduxState();
  const router = useRouter();

  //check if user is loggedin
   useEffect(() => {
    if ( state.user.id === "") {
      router.push("/");
    }
  }, [state.user]);
 
 
  
  return (
    <Layout>
        <Head>
            <title>Chat</title>
        </Head>
        <div className="background">
          <div className="shadow">
          <div className="ce-chat-engine" >
            <ConversationsList /> 
            </div>
            
          </div>
        </div>
    </Layout>
  )
}
