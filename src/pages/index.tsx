import type { FC } from 'react'
import React, { useState, useEffect} from "react";
import Router  from 'next/router';
import {  useReduxState, useReduxDispatch } from '../redux/redux-bindings';
import { setUser } from "../redux/actions/userActions";

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
    console.log("update ", state.user.redirectTo!="" , "$$$",state.user.errorForm == "")
    if (state.user.redirectTo!="" && state.user.errorForm == "") {
      return Router.push("/chats");
    }
  }, [update]); 

  /*  if (state.user.redirectTo) {
    return Router.push("/chats");;
  }  */

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("handleSubmit ",e)
  
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
    <div className="background">
      <div className="auth-container">
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
               // dispatch({ nickname, type: 'setNickname' });
              }}
            />
            <p className = "error-login">{error || state.user.errorForm}</p>
          </div>

          

          <button type="submit" className="submit-button">
            Login 
          </button>
        </form>
      </div>
    </div>
  )
}

export default Auth