import React, {useContext} from 'react';
import {Redirect} from 'react-router-dom';
import {UserContext} from '../UserContext';
import Socket from './Socket';
const Chat = (props) => {
    var [user, setUser] = useContext(UserContext);
    const savedUser = JSON.parse(localStorage.getItem('user'));
    user = user ? user : savedUser;
    return !user ? (<Redirect to='/'/>) : (
        <div>
            <span>Hello, {user.name}</span>
            <Socket/>
        </div> 
    );
}

export default Chat;