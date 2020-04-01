import React, {useContext, useState} from 'react';
import {Redirect} from 'react-router-dom';
import {UserContext} from '../UserContext';
import MessageList from './MessageList';
import ChatWindow from './ChatWindow';

const Chat = (props) => {
    var [user, setUser] = useContext(UserContext);
    const [redirect, setRedirect] = useState(false);
    const savedUser = JSON.parse(localStorage.getItem('user'));
    user = user ? user : savedUser;

    const goToLogs = () => {
        setRedirect(true);
    }
    const renderRedirect = () => {
        if(redirect) {
            return <Redirect to='/history'/>
        }
    }

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
            <div>
                {renderRedirect()}
                <button className='btn btn-primary btn-sm' onClick={goToLogs}>Go to chat logs</button>   
            </div>
        </div> 
    );
}

export default Chat;