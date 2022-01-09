import * as t from "../types";
import axios from "axios";

export const setConversations =  (userId) => {
  return  (dispatch) => {
    axios.get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/conversations/${userId}`)  
    .then((result) =>{
      dispatch(
        { type: "SET_CONVERSATIONS",
          conversations : result.data,
        })
    }).catch((err)=>{
        console.log("getConversations ",err)
    })
  }
    
}
export const setId =  (nickname) =>{
  return  (dispatch) => {
    axios.get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/users/`)
    .then( (data) => {
      // i am supposing that nicknames are uniques so i can implement the login part :)
      const user = data.data
      .filter(user => user.nickname.toLowerCase() === nickname.toLowerCase())   

      if (user && user.length > 0 ){              
        dispatch(
          { type: "SET_ID",
            id : user[0].id,
          })
      }else{
        dispatch(
          { type: "SET_ID",
            errorForm : "User not found !"
          })
      }
      
    }).catch((error) => {
      dispatch(
        { type: "SET_ID",
          errorForm : error
        })
    }) 
  }

}
export const getAllAvatars = (nicknames)  => {
  let avatars = []
  return async  (dispatch) => {
    
      const reqs = await nicknames.map(async (nickname)=>{
        try{
          let response = await fetch(`https://eu.ui-avatars.com/api/?name=${nickname}`)
          avatars.push({nickname: nickname, avatar: response.url})
          return;
        }catch(err){
          return dispatch(
            { type: "GET_ALL_AVATARS_ERROR",
              error:err 
          })
        } 
       
      })
    
      Promise.all(reqs).then(() => { 
        return dispatch(
          { type: "GET_ALL_AVATARS",
            allAvatars: [...avatars ] 
        })
      });

    
    
   
      

    
    
    

   
      } 
  
}
