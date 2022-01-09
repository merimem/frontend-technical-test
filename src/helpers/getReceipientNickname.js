import { useContext} from 'react';
import { Context } from "../context";

const getReceipientNickname = (conversation, nickname)=>{
    console.log("getReceipientNickname ", conversation)
    
    return conversation.recipientNickname == nickname ? conversation.senderNickname : conversation.recipientNickname
}
export default getReceipientNickname;