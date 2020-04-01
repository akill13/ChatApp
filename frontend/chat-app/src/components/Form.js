import React, {useState, useContext, useRef, useEffect} from 'react';
import axios from 'axios';
import {UserContext} from '../UserContext';

const Form = (props) => {
    const [user, setUser] = useContext(UserContext);
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const inputRef = useRef(null);

    useEffect(()=>{
        inputRef.current.focus()
    },[])

    const handleSubmit = () => {
        axios.post(`http://127.0.0.1:8080/api/user`, {
            name: name,
            username: username
            })
            .then(resp => {
                localStorage.removeItem('user');
                localStorage.setItem('user', JSON.stringify(resp.data));
                setUser(resp.data);
                props.history.push('/chat');
            })
            .catch(error => console.error(error));
    }

    return (
        <>
            <div className='container'>
                <div className='form-group'>
                    <label><b>Name</b></label>
                    <input type="text" className='form-control' ref={inputRef} value={name} onChange={e => setName(e.target.value)} placeholder="John Doe" required/>
                    <small className="form-text text-muted">You can't change name or username after! Choose wisely</small>
                </div>
                <div className='form-group'>
                <label><b>Username</b></label>
                    <input type="text" className='form-control' value={username} onChange={e => setUsername(e.target.value)} placeholder="jonny_doe" required />
                </div>
                <div className='row mb-3'>
                    <button className='btn btn-sm btn-primary mt-auto text-uppercase' onClick={handleSubmit}>Login/SignUp</button>
                </div>
            </div>
        </>
    );
}


export default Form;