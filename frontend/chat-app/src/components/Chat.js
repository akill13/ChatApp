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
        <div className='col-sm-3 col-sm-offset-4'>
            <span>Hello, {user.name}</span>
            <ul></ul>
            <div className='media-body ml-3'>{props.messages.map((msg) => {
                let className = 'text-';
                let show = false;
                if(user.id === msg.user.id) {
                    className+='right';
                 } else {className+='left'; show=true;}
                return <MessageList key={msg.messageId} className={className} message={msg} show={show}/>
            })}
            </div>
            <ChatWindow user={user} sendMessage={props.sendMessage}/>
        </div> 
    );
}

export default Chat;