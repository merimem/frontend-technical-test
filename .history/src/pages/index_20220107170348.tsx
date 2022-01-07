import type { FC } from 'react'
import React, {useContext} from "react";
import { Context } from '../context';
import { useRouter } from 'next/router';
import axios from "axios";
import Logo from '../assets/lbc-logo.webp'
import styles from '../styles/Home.module.css'

const Auth: FC = () => {
  
  const { nickname, setNickname, id, setId } = useContext(Context);
  const router = useRouter();
  function onSubmit(e) {
    e.preventDefault();

    if (nickname.length === 1) return;

    axios
      .get(
        " http://localhost:3005/users/"
      )

      .then((data) => {
        console.log("ftch ",data)
        // i supposed that nicknames are uniques
        const user = data.data
        .filter(user => user.nickname.toLowerCase() === nickname.toLowerCase())
        .shift()
        
        if (user && user.length >1 ){
          console.log("user ", user)
          setNickname(user[0].nickname)
          setId(user[0].id)
        }
        //router.push("/chats");
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
              onChange={(e) => setNickname(e.target.value)}
            />
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