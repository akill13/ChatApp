import React from 'react';
import SockJsClient from 'react-stomp';
import axios from 'axios';

class Socket extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ws: null
        };
    }

    componentDidMount() {
        this.connect();
    }

    connect = () => {
        var ws = new WebSocket('ws://127.0.0.1:8080/chat/websocket');
        this.setState({
            ws: ws
        });
        ws.onopen = () => {
            console.log('connected');
            ws.send('test');
        };

        ws.onclose = e => {
            console.log(e);
            this.connect();
        };

        ws.onmessage = event => {
            const message = JSON.parse(event.data);
            console.log(event);
            console.log(message);
        }
    }

    sendMessage = () => {
        try{
            console.log('I am happening');
            const msg = Object.create({messageId: null, message: 'omg plz work', user: null});
            console.log(this.state.ws);
            this.state.ws.send(JSON.stringify(msg));
        } catch(error) {
            console.error(error);
        }
    } 

    // sendMessage = (msg) => {
    //     console.log(this.clientRef);
    //     try {
    //         msg = Object.create({
    //             messageId: null,
    //             message: 'omg plz work',
    //             user: null
    //         });
    //         this.clientRef.sendMessage("/app/chat.send", msg);
    //     } catch(error) {
    //         return false;
    //     }
    // }

    /**
     * componentDidUpdate() {
     *   axios.get('http://127.0.0.1:8080/app/test').then(resp => console.log(resp)).catch(e => console.error(e));
     *   }
     */

    render() {
        return (
            <>
            <button onClick={this.sendMessage}>test</button>
            </>
            // <>
            // <SockJsClient url={'http://127.0.0.1:8080/chat'} topics={["/topics/public"]}
            // onMessage={(msg)=>{console.log(msg)}}
            // ref={(client)=>{this.clientRef=client}}/>
            // <button onClick={this.sendMessage}>test</button>
            // </>
        );
    }
}

export default Socket;