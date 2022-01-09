import * as t from "../types";

export const setId = () =>{
  console.log("setId ",state)

}
export const getAllAvatars = (nicknames)  => {
  let avatars = []
  return async  (dispatch) => {
    try{
      const reqs = await nicknames.map(async (nickname)=>{
        let response = await fetch(`https://eu.ui-avatars.com/api/?name=${nickname}`)
        avatars.push({nickname: nickname, avatar: response.url})
        return;
       
      })
      Promise.all(reqs).then(() => {
        return dispatch(
          { type: "GET_ALL_AVATARS",
            allAvatars:avatars 
        })
      });

    }catch(err){
      return dispatch(
        { type: "GET_ALL_AVATARS_ERROR",
          error:err 
      })
    } 
    
   
      

    
    console.log("getAllAvatars avatars ", avatars)
    
    

   
      } 
  
}
