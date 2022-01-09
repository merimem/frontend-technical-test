import { useContext} from 'react';
import { Context } from "../context";
import {  useReduxState, useReduxDispatch } from '../redux/redux-bindings';

const useGetAllNicknames = ( conversations)=>{
    const state = useReduxState();
    const dispatch = useReduxDispatch();
    const { nickname} = state.user 
    let allNicknames = [nickname]
    conversations.map(conv =>{
        let pseudo = conv.recipientNickname == nickname ? conv.senderNickname : conv.recipientNickname 
        allNicknames.push(pseudo)
    })
    return allNicknames;
}
export default useGetAllNicknames