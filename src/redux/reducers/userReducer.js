export const initState = {
  nickname: "",
  id: "",
  errorForm : "",
  allAvatars: [],
  errorGetAvatar : "",
  conversations : []
}
export const userReducer = (state = initState, action) => {
  console.log("userReducer action", action)
  switch(action.type){
      case 'setNickname':
        return { ...state, nickname: action.nickname };
      case 'SET_ID':
        return { ...state, id: action.id ,  errorForm: action.errorForm};
      case 'SET_CONVERSATIONS':
        return { ...state, conversations : action.conversations};
      
      case 'GET_ALL_AVATARS':  
        console.log('GET_ALL_AVATARS ',Object.assign({}, state, {
          allAvatars: [...action.allAvatars]}))
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

 