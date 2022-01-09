import { useContext} from 'react';
import { Context } from "../context";

const useGetAllNicknames = ( conversations)=>{
    const { nickname } = useContext(Context); 
    let allNicknames = [nickname]
    conversations && conversations.map(conv =>{
        let pseudo = conv.recipientNickname == nickname ? conv.senderNickname : conv.recipientNickname 
        allNicknames.push(pseudo)
    })
    return allNicknames;
}
export default useGetAllNicknames