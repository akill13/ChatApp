import React, {useContext} from 'react';
import {Redirect} from 'react-router-dom';
import {UserContext} from '../UserContext';
import MessageList from './MessageList';

const Chat = (props) => {
    var [user, setUser] = useContext(UserContext);
    const savedUser = JSON.parse(localStorage.getItem('user'));
    user = user ? user : savedUser;
    return !user ? (<Redirect to='/'/>) : (
        <div>
            <span>Hello, {user.name}</span>
            <div>{props.messages.map((msg, i) => <MessageList key={msg.messageId} message={msg.message}/>)}</div>
            <button onClick={props.sendMessage}>Test</button>
        </div> 
    );
}

export default Chat;