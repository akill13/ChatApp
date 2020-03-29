import React, {useContext} from 'react';
import {UserContext} from '../UserContext';
const Chat = () => {
    var [user, setUser] = useContext(UserContext);
    const savedUser = JSON.parse(localStorage.getItem('user'));
    user = user ? user : savedUser;
    return (
        <div>
            <span>Hello, {user.name}</span>
        </div> 
    );
}

export default Chat;