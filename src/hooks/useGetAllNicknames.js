
import {  useReduxState, useReduxDispatch } from '../redux/redux-bindings';

const useGetAllNicknames = ( conversations)=>{
    const state = useReduxState();
    const { nickname} = state.user 
    let allNicknames = [nickname]
    conversations.map(conv =>{
        let pseudo = conv.recipientNickname.toLowerCase() == nickname.toLowerCase() ? conv.senderNickname : conv.recipientNickname 
        allNicknames.push(pseudo)
    })
    
    return allNicknames;
}
export default useGetAllNicknames