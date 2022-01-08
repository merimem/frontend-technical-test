import * as t from "../types";

export const getAllAvatars = (nicknames)  => {
 
  console.log("1 getAllAvatars nickname ",nicknames)
  let avatars = []
  return async  (dispatch) => {
    const reqs = await nicknames.map(async (nickname)=>{
        let response = await fetch(`https://eu.ui-avatars.com/api/?name=${nickname}`)
        console.log(" 2 getAllAvatars pushing", {nickname: nickname, avatar: response.url})
        avatars.push({nickname: nickname, avatar: response.url})
        return;
       
    })
     Promise.all(reqs).then(() => {
      console.log("3 getAllAvatars map finish")
      return dispatch(
        { type: "GET_ALL_AVATARS",
          allAvatars:avatars 
        })
    });
   
      

    
    console.log("getAllAvatars avatars ", avatars)
    
    

   /*  return fetch(`https://eu.ui-avatars.com/api/?name=${nickname}`)
    .then(response => {
      return response.url
    })
    .then(url => dispatch(
                  { type: "GET_ALL_AVATARS",
                  allAvatars: url })
        )*/
      } 
  
  }
