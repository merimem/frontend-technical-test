import React,{useState, useEffect, useContext} from 'react';
export default function MessagesList (props){
    let {id} = props
    useEffect(() => {

        const fetchData = async () => {
          const result = await axios(
            `http://localhost:3005/messages/${id}`          
          );
            console.log("before messages", result.data)
          let data = result.data.filter((conv)=>
            conv.recipientId !== id
          )
          console.log("after filter ", data)
         // setConversations(data);
        };
        fetchData();
      },[id])
    return(
         <ChatContainer>
             <ConversationHeader>
                {currentUserAvatar}
                <ConversationHeader.Content userName={currentUserName} />
            </ConversationHeader>
            {/* <MessageList typingIndicator={getTypingIndicator()}>
                {activeConversation && currentMessages.map( (g:MessageGroup) => <MessageGroup key={g.id} direction={g.direction}>
                    <MessageGroup.Messages>
                        {g.messages.map((m:ChatMessage<MessageContentType>) => <Message key={m.id} model={{
                            type: "html",
                            payload: m.content
                        }} />)}
                    </MessageGroup.Messages>
                </MessageGroup>)}
            </MessageList> */}
            <MessageInput value={currentMessage} onChange={handleChange} onSend={handleSend} disabled={!activeConversation} attachButton={false} placeholder="Type here..."/>
        </ChatContainer>

    )
}