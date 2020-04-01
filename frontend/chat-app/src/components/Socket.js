import React, {useState} from 'react';
import SockJsClient from 'react-stomp';
import Chat from './Chat';

const Socket = () => {
    const [clientRef, setClientRef] = useState(null);
    const [prevMessages, setPrevMessages] = useState([])

    const sendMessage = (msg) => {
        try {
            clientRef.sendMessage("/app/chat.send", JSON.stringify(msg));
            return true;
        } catch(error) {
            return false;
        }
    }

    const messageRecieve = (msg, topics) => {
        setPrevMessages(prevMessages.concat(msg));
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