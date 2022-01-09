import type { FC } from 'react'
import React, { useState, useEffect} from "react";
import { useRouter } from 'next/router';
import {  useReduxState, useReduxDispatch } from '../redux/redux-bindings';
import { setId } from "../redux/actions/userActions";

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
      setError("");
      dispatch(setId(state.user.nickname));
      router.push("/chats");
    }
  }
  
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
                setError("");
                dispatch({ nickname, type: 'setNickname' });
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