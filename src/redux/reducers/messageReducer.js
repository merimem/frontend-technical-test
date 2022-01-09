export const initState = {
    messages : [],
    successMsg : ""
}
export  const messageReducer = (state = initState, action) => {
    switch(action.type){
        case 'ADD_MESSAGE':
          console.log('ADD_MESSAGE')
          return ({...state, successMsg : action.successMsg});
        case 'SET_MESSAGES':
          console.log("SET_MESSAGES ",action.messages )
          return {...state, messages : [...action.messages]}     
        default:
            return state;
    }
    
  
  }
   
