import type { FC } from 'react'
import React, {useContext, useState} from "react";
import { Context } from '../context';
import { useRouter } from 'next/router';
import axios from "axios";
import Logo from '../assets/lbc-logo.webp'
import styles from '../styles/Home.module.css'

const Auth: FC = () => {
  
  const { nickname, setNickname, id, setId } = useContext(Context);
  const [error , setError] = useState("")
  const router = useRouter();
  function onSubmit(e) {
    e.preventDefault();

    if (nickname.length === 0) {
      setError("Please enter your username !");
      return;

    }
      

    axios
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
        
      });
  }
  return (
    <div className="background">
      <div className="auth-container">
        <form className="auth-form" onSubmit={(e) => onSubmit(e)}>
          <div className="auth-title">Leboncoin Chat</div>

          <div className="input-container">
            <input
              placeholder="Nickname"
              className="text-input"
              onChange={(e) => {setNickname(e.target.value); setError("");}}
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