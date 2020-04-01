import React, {useState} from 'react';

const ChatWindow = (props) => {
    const [message, setMessage] = useState('');
    const saveMessage = () => {
        const msg = {"message":message, "user":props.user};
        if(props.sendMessage(msg)){
            setMessage('');
        } else {
            console.log('error');
        }
    }

    return (
        <div className="input-group mb-3">
            <input className="form-control" value={message} onChange={e=> setMessage(e.target.value)} placeholder="Type a message"/>
            <div className='input-group-append'>
                <button className='btn btn-outline-secondary' type='button' onClick={saveMessage}>Send</button>
            </div>
        </div>       
    );
}

export default ChatWindow;