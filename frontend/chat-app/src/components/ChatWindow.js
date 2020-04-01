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
        <div className="col-sm-3 col-sm-offset-4 frame">
            <div>
                <div className="msj-rta macro">                        
                    <div className="text text-r" style={{background: 'whitesmoke !important'}}>
                        <input className="mytext" value={message} onChange={e=> setMessage(e.target.value)} placeholder="Type a message"/>
                        <button onClick={saveMessage}>Send</button>
                    </div> 
                </div>         
            </div>
        </div>       
    );
}

export default ChatWindow;