const initState = {
    content: ""
   }
   const messageReducer = (state = initState, action) => {
     switch(action.type){
          case 'ADD_MESSAGE':
            return ({...state});
          case 'GET_MESSAGES':
            return({...state,
                    messages : action.messages
            })       
         default:
             return state;
     }
     
   
   }
   
   export default messageReducer;