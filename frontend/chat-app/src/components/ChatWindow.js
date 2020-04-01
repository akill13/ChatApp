import React, {useState, useRef, useEffect} from 'react';

const ChatWindow = (props) => {
    const inputRef = useRef(null);
    const [message, setMessage] = useState('');

    useEffect(()=> {
        inputRef.current.focus()
    },[])
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
            <input ref={inputRef} className="form-control" value={message} onChange={e=> setMessage(e.target.value)} placeholder="Type a message"/>
            <div className='input-group-append'>
                <button className='btn btn-outline-secondary' type='button' onClick={saveMessage}>Send</button>
            </div>
        </div>       
    );
}

export default ChatWindow;