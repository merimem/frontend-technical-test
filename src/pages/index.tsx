import type { FC } from 'react'
import React, {useContext, useState, useEffect, useCallback} from "react";
import { Context } from '../context';
import { useRouter } from 'next/router';
import { useDispatch } from "react-redux";
import axios from "axios";
import {  useReduxState, useReduxDispatch } from '../redux/redux-bindings';
import { setUseProxies } from 'immer';

const Auth: FC = () => {
  
  const state = useReduxState();
  const dispatch = useReduxDispatch();
 
  const [error , setError] = useState("")
  const router = useRouter();
  useEffect(() => {}, [dispatch]);
  function handleSubmit(e) {
    e.preventDefault();
    if (state.user.nickname.length === 0) {
        setError("Please enter your username !");
        return;
    } else{
      dispatch({  type: 'setId' });
    }
      

  /*   axios
      .get(
        "http://localhost:3005/users/"
      )

      .then((data) => {
        // i am supposing that nicknames are uniques so i can implement the login part :)
        const user = data.data
        .filter(user => user.nickname.toLowerCase() === nickname.toLowerCase())   
        console.log("user ", user)
        if (user && user.length > 0 ){
         
          setNickname(user[0].nickname)
          setId(user[0].id)
          router.push("/chats");
        }else {
          setError("Invalid username !")
        }
        
      }); */
  }
  console.log("state ",state.user)
  console.log("props ",state.user)
  return (
    <div className="background">
      <div className="auth-container">
        <form className="auth-form" onSubmit={(e) => handleSubmit(e)}>
          <div className="auth-title">Leboncoin Chat</div>

          <div className="input-container">
            <input
              placeholder="Nickname"
              className="text-input"
              value={state.user.nickname}
              onChange={(event) => {
                const nickname = event.target.value;
                dispatch({ nickname, type: 'setNickname' });
              }}
            />
            <p className = "error-login">{error}</p>
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