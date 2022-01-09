export const initState = {
  nickname: "",
  id: "",
  allAvatars: [],
  errorGetAvatar : ""
 
}
export const userReducer = (state = initState, action) => {
  console.log("userReducer action", action)
  switch(action.type){
      case 'setNickname':
        return { ...state, nickname: action.nickname };
      case 'setId':
        return { ...state, id: action.id };
      case 'GET_ALL_AVATARS':
        return Object.assign({}, state, {
          allAvatars: [...action.allAvatars, ...state.allAvatars]})
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

 