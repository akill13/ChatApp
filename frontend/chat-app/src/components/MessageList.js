import React from 'react';

const MessageList = (props) => {
    return (
        <ul>
            <div>
                {props.message}
            </div>
        </ul>
    )
}

export default MessageList;