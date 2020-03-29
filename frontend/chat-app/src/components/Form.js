import React, {useState, useContext} from 'react';
import axios from 'axios';
import {UserContext} from '../UserContext';

const Form = (props) => {
    const [user, setUser] = useContext(UserContext);
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");

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
        <div>
            <div>
                <div>
                    <label><b>Name</b></label>
                    <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="John Doe" required/>

                    <label><b>Username</b></label>
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="jonny_doe" required />
                </div>
                <div>
                    <button onClick={() => handleSubmit()}>Login/SignUp</button>
                </div>
            </div>
        </div>
    );
}


export default Form;