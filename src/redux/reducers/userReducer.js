const initState = {
 allAvatars: []
}
const userReducer = (state = initState, action) => {
  console.log("userReducer action", action)
  switch(action.type){
      case 'GET_ALL_AVATARS':
        return Object.assign({}, state, {
          allAvatars: [...action.allAvatars, ...state.allAvatars]})
          //return {...state, allAvatars: action.allAvatars};
     
     
      default:
          return state;
  }
  

}

export default userReducer;