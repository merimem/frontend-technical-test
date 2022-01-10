
import {  useReduxState, useReduxDispatch } from '../redux/redux-bindings';
import { Conversation } from '../types/conversation';
const useGetAllNicknames = ( conversations: Conversation[])=>{
    const state = useReduxState();
    const { nickname} = state.user 
    let allNicknames:string[] = [nickname]
    conversations.map(conv =>{
        let pseudo : string = conv.recipientNickname.toLowerCase() == nickname.toLowerCase() ? conv.senderNickname : conv.recipientNickname 
        allNicknames.push(pseudo)
    })
    
    return allNicknames;
}
export default useGetAllNicknames