export const initState = {
  nickname: "",
  id: "",
  errorForm : "",
  allAvatars: [],
  errorGetAvatar : "",
  conversations : [],
  redirectTo : ""
}
export const userReducer = (state = initState, action) => {
  switch(action.type){
      case 'SET_USER':
        console.log("SET_USER", action)
        return { ...state, nickname: action.nickname, id : action.id, errorForm: action.errorForm};
      case 'SET_USER_ERROR':
          return { ...state, errorForm:  action.errorForm};
        case 'SET_CONVERSATIONS':
        return { ...state, conversations : action.conversations};
      case 'REDIRECT':
          return { ...state, redirectTo: action.redirectTo};
      
      case 'GET_ALL_AVATARS':  
        return Object.assign({}, state, {
          allAvatars: [...action.allAvatars]})
          //return {...state, allAvatars: action.allAvatars};
     
      case 'GET_ALL_AVATARS_ERROR':
          return {
            ...state,
            errorGetAvatar : action.error
          }
      default:
          return state;
  }
  

}

 