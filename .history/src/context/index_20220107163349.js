import React, { useState, createContext } from "react";

export const Context = createContext();

export const ContextProvider = (props) => {
  const [nickname, setNickname] = useState("");
  const [id, setId] = useState("");

  const value = {
    nickname,
    setNickname,
    id,
    setId,
  };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};