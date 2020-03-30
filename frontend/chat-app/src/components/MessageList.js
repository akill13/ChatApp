import React from 'react';

const MessageList = (props) => {
    console.log(props);
    return (
        <ul>
            <div>
                {props.message}
            </div>
        </ul>
    )
}

export default MessageList;