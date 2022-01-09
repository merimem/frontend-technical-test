

const getReceipientNickname = (conversation, nickname)=>{
        console.log("getReceipientNickname ", conversation, nickname)
      
        return conversation.recipientNickname.toLowerCase() == nickname.toLowerCase() ? conversation.senderNickname : conversation.recipientNickname
}
export default getReceipientNickname;