import React,{useState, useEffect} from 'react';
import { Context } from "../context";

import {
    MainContainer,
    ChatContainer,
    MessageList,
    Message,
    MessageInput,
  } from "@chatscope/chat-ui-kit-react";
  



export default function ConversationsList(props) {
    
    console.log("props " , props)
    const { nickname, id } = useContext(Context); 
    return (
       <div style={{ position: "relative", height: "500px" }}>
        <MainContainer responsive>
        <Sidebar position="left" scrollable>
            <ConversationHeader style={{backgroundColor:"#fff"}}>
                <Avatar src={user.avatar} />
                <ConversationHeader.Content>
                    {user.username}
                </ConversationHeader.Content>
            </ConversationHeader>
            <ConversationList>
                {conversations.map(c => {
                    // Helper for getting the data of the first participant
                    const [avatar, name] = (() => {

                        const participant = c.participants.length > 0 ? c.participants[0] : undefined;
                        
                        if (participant) {
                            const user = getUser(participant.id);
                            if (user) {

                                return [<Avatar src={user.avatar} />, user.username]

                            }
                        }

                        return [undefined, undefined]
                    })();

                    return <Conversation key={c.id}
                                  name={name}
                                  info={c.draft ? `Draft: ${c.draft.replace(/<br>/g,"\n").replace(/&nbsp;/g, " ")}` : ``}
                                  active={activeConversation?.id === c.id}
                                  unreadCnt={c.unreadCounter}
                                  onClick={() => setActiveConversation(c.id)}>
                        {avatar}
                    </Conversation>
                })}
            </ConversationList>
        </Sidebar>
        </MainContainer>
</div>
    )
}
