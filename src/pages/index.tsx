import type { FC } from 'react'
import React, { useState, useEffect} from "react";
import Router  from 'next/router';
import {  useReduxState, useReduxDispatch } from '../redux/redux-bindings';
import { setUser } from "../redux/actions/userActions";
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

const Auth: FC = () => {
  
  const state = useReduxState();
  const dispatch = useReduxDispatch();
  const [error , setError] = useState("")
  const [userName, setUserName ] = useState("")
  const [update, setUpdate ] = useState(false)
  //const router = useRouter();
 
  const setUserInfo = ( ) => new Promise(async (resolve, reject) => {
    await dispatch(setUser(userName))
    .then(() => {
      setUpdate(!update)
    })
    resolve("");
  })
  useEffect(() => {}, [dispatch]);
  useEffect(() => {
    if (state.user.redirectTo!="" && state.user.errorForm == "") {
       Router.push("/chats");
    }
   
  }, [update]); 

  
  async function handleSubmit(e) {
    e.preventDefault();
  
    if (!userName || userName.length === 0) {
        console.log("nickname empty")
        setError("Please enter your username !");
    } else{
      setError("");
      console.log("state.user ",state.user)
      setUserInfo()
      
    }
  }
  
  return (
    <Layout >
      <Head>
          <title>{siteTitle}</title>
        </Head>
     
        <div className="auth-container" role="formAuth">
          <form className="auth-form" onSubmit={(e) => handleSubmit(e)}>
            <div className="auth-title">
              <img className="auth-title-img" src="https://upload.wikimedia.org/wikipedia/commons/6/63/Leboncoin_Logo_%282016%29.svg"/>
            </div>

            <div className="input-container">
              <input
                placeholder="Nickname"
                className="text-input"
                value={userName}
                onChange={(event) => {
                  const nickname = event.target.value;
                  setUserName(nickname)
                  setError("");
                }}
              />
              <p className = "error-login">{error || state.user.errorForm}</p>
            </div>

            

            <button type="submit" className="submit-button" aria-label="button-submit">
              Login 
            </button>
          </form>
        </div>
     
    </Layout>
  )
}

export default Auth