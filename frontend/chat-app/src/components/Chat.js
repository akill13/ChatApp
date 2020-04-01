import React, {useContext} from 'react';
import {Redirect} from 'react-router-dom';
import {UserContext} from '../UserContext';
import MessageList from './MessageList';
import ChatWindow from './ChatWindow';

const Chat = (props) => {
    var [user, setUser] = useContext(UserContext);
    const savedUser = JSON.parse(localStorage.getItem('user'));
    user = user ? user : savedUser;

    return !user ? (<Redirect to='/'/>) : (
        <div>
            <span>Hello, {user.name}</span>
            <div>{props.messages.map((msg) => <MessageList key={msg.messageId} message={msg.message}/>)}</div>
            <ChatWindow user={user} sendMessage={props.sendMessage}/>
        </div> 
    );
}

export default Chat;