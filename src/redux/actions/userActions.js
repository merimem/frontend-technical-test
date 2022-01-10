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
export const redirect = link => {
  console.log("=== REDIRECT ACTION DISPATCHED ===");
  return { type: "REDIRECT", redirectTo: link };
};
export const setUser =   (nickname) =>{
  return  (dispatch) => {
    return new Promise(async (resolve, reject) => {
      try{
        const result = await axios.get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/users/`)
        // i am supposing that nicknames are uniques so i can implement the login part :)
        const user = result.data
        .filter(user => user.nickname.toLowerCase() === nickname.toLowerCase())   
        if (user && user.length > 0 ){              
          dispatch(
            { type: "SET_USER",
              id : user[0].id,
              nickname : user[0].nickname,
              errorForm: ""
            })
            dispatch(redirect("/chats"));
        }else{
          dispatch(
            { type: "SET_USER_ERROR",
              errorForm : "User not found !"
            })
        }
        resolve()
  
      }catch (err){
        dispatch(
          { type: "SET_USER_ERROR",
            errorForm : err
          })
  
      }
      
    });
   
 
      
    
  }
}
/* export const setId =  (nickname) =>{
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

} */
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
