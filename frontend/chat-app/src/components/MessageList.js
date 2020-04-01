import React from 'react';

const MessageList = (props) => {
    return props.show ? (
        <div>
            <p className={props.className}>{props.message.user.username + ": " +props.message.message}</p>
        </div>
    ) : <div>
            <p className={props.className}>{props.message.message}</p>
        </div>
}

export default MessageList;