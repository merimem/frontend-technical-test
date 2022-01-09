import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import rootReducer from "./reducers/rootReducer"

const initialState = {
  nickname: "",
  text: 'edit me'
};
/* 
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'setNickname':
      return { ...state, nickname: action.nickname };
    case 'setText':
      return { ...state, text: action.text };
    default:
      return state;
  }
}; */

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;