import React,{useState, useEffect} from 'react';

import { ChatList  } from 'react-chat-elements';



export default function ConversationsList(props) {
    
    console.log("props " , props)
       
    return (
        <ChatList
            className='ce-wrapper'
            dataSource={[
                {
                    avatar: 'https://facebook.github.io/react/img/logo.svg',
                    alt: 'Reactjs',
                    title: 'Facebook',
                    subtitle: 'What are you doing?',
                    date: new Date(),
                    unread: 0,
                },
              
            ]} />
    )
}
