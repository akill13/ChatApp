import React, {useEffect, useState} from 'react';
import SockJsClient from 'react-stomp';
import axios from 'axios';
import Chat from './Chat';

const Socket = () => {
    const [clientRef, setClientRef] = useState(null);
    const [prevMessages, setPrevMessages] = useState([])

    // useEffect( () => {
    //     getHistory();
    // });

    const sendMessage = (msg) => {
        try {
            msg = {'messageId':'10', "message":"test"};
            clientRef.sendMessage("/app/chat.send", JSON.stringify(msg));
            return true;
        } catch(error) {
            return false;
        }
    }

    const messageRecieve = (msg, topics) => {
        setPrevMessages(prevMessages.concat(msg));
    }

    const getHistory = () => {
        axios.get('http://127.0.0.1:8080/history').then(resp => {
            
        })
    }

    return (
        <>
            <SockJsClient url={'http://127.0.0.1:8080/chat'} topics={["/topics/public"]}
            onMessage={messageRecieve}
            ref={(client)=>{setClientRef(client)}}
            debug={false}/>
            <Chat messages={prevMessages} sendMessage={sendMessage}/>
        </>
    );
}

export default Socket;