
import * as t from "../types";
let url = "http://localhost:3005/messages/"
export const addMessage = (content, idConv, idUser)  => {
  return  (dispatch) => {
    const options = {
        method: 'POST',
        body: JSON.stringify({
            "body": content,
            "timestamp": Date.now(),
            "authorId":idUser,
            "conversationId":idConv
          }),
        headers: {
            'Content-Type': 'application/json'
        }
    }

    fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/messages/${idConv}`, options)
    .then(res => res.json())
    .then(res =>   dispatch(
        { type: t.ADD_MESSAGE,
          success : "true"
        })
    );
   
    } 
  
}
export const getMessages = (activeConversation)  => {
  return  (dispatch) => {
    fetch(  `${process.env.NEXT_PUBLIC_API_ENDPOINT}/${activeConversation.id}`)
    .then(res => res.json())
    .then(res =>   dispatch(
        { type: t.GET_MESSAGES,
          messages : res
        })
    );
   
    } 
  
}
