
import { Conversation } from '../types/conversation';
const getReceipientNickname = (conversation: Conversation, nickname: string)=>{
        return conversation.recipientNickname.toLowerCase() == nickname.toLowerCase() ? conversation.senderNickname : conversation.recipientNickname
}
export default getReceipientNickname;