import React from 'react';
import SockJsClient from 'react-stomp';
import axios from 'axios';

class Socket extends React.Component {

    sendMessage = (msg) => {
        try {
            msg = {'messageId':'10', "message":"test"};
            console.log(JSON.stringify(msg));
            this.clientRef.sendMessage("/app/chat.send", JSON.stringify(msg));
        } catch(error) {
            return false;
        }
    }

    messageRecieve = (msg, topics) => {
        console.log(msg);
        console.log(topics);
    }

    test = () => {
        axios.get('http://127.0.0.1:8080/test').then(resp => console.log(resp));
    }

    render() {
        return (
            <>
                <SockJsClient url={'http://127.0.0.1:8080/chat'} topics={["/topics/public"]}
                onMessage={this.messageRecieve}
                ref={(client)=>{this.clientRef=client}}
                debug={false}/>
            </>
        );
    }
}

export default Socket;