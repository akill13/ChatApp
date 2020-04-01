import React, {useEffect, useState} from 'react';
import axios from 'axios';

const History = (props) => {
    const [messages, setMessage] = useState([]);
    const [users, setUsers] = useState([]);
    const [selectUserId, setSelectedUserId] = useState();
    const [success, setSuccess] = useState(false);
    useEffect(()=>{
        axios.get('http://127.0.0.1:8080/history').then(resp => {
            setMessage(resp.data);
        }).catch(e => console.log('no internet'));
        axios.get('http://127.0.0.1:8080/api/user/all').then(resp => {
            setUsers(resp.data);
        }).catch(e => console.error(e));
    },[])

    const setUser = () => {
        if (selectUserId) {
            const user = {"id":selectUserId}
            axios.post('http://127.0.0.1:8080/api/select', {
                user: user
            }).then(resp => updateResp())
            .catch(error => console.error(error));
        }
    }
    
    const updateResp = () => {
        setSuccess(true);
    }

    const handleChange = (e) => {
        setSelectedUserId(e.target.value);
    }

    const showSuccess = () => {
        if (success) {
            return <p>Done!</p>
        }
    }

    return(
        <div className='row'>
            <div className='col'>
                {messages.map(msg => {
                    return <p key={msg.messageId}>{users.find(e => e.id === msg.user.id)?.name + ": " + msg.message + " " + msg.date}</p>
                })}
            </div>
            <div className='col'>
                <div className='form-group'>
                <label>Select a User whose messages will all be deleted at 12AM (UTC)</label>
                    <div className='col-sm-4'>
                        <select disabled={users.length<1} className='form-control' onChange={handleChange}>
                            {users.map(usr => <option key={usr.id} value={usr.id}>{usr.name}</option>)}
                        </select>
                    </div>
                    <button className='col-sm-4' disabled={users.length<1} onClick={setUser}>Set User</button>
                </div>
                {showSuccess()}
            </div>
        </div>
    );
}

export default History;