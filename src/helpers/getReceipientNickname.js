import { useContext} from 'react';
import { Context } from "../context";

const getReceipientNickname = (conversation)=>{
    const { nickname } = useContext(Context); 
    return conversation.recipientNickname == nickname ? conversation.senderNickname : conversation.recipientNickname
}
export default getReceipientNickname;