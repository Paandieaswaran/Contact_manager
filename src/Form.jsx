import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

function Form() {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    function update1(e) {
        setId(e.target.value);
    }

    function update2(e) {
        setName(e.target.value);
    }

    // This function will post data (i.e., register)
    async function handleHost(e) {
        e.preventDefault();
    
        try {
          // Fetch the stored user data from server
          const response = await axios.get('http://localhost:3002/data');
          const users = response.data;
    
          // Check if a user with matching credentials exists
          const validUser = users.find(
            user => user.id === id && user.name === name
          );
    
          if (validUser) {
            alert('Login successful!');
            localStorage.setItem('userId', validUser.id);
            navigate('/contacts/list'); // Redirect to the App page
          } else {
            alert('Invalid username or password!');
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
          alert('There was an error. Please try again later.');
        }

   

    }

    return (
        <div>
            <div className='whole'>
                <div className='img'>
                    <img src="1.png" alt="" />
                    <br /><br /><br />
                    <h6>Welcome Back! <br /><br />Please Log In to Continue.</h6>
                    
                    
                </div>
                <div className='login'>
                    <h1 id='heading'>LOGIN</h1>
                    <br /><br /><br />
                    <input type="text" placeholder='Username' value={id} onChange={update1} />
                    <br /><br /><br />
                    <input type="password" placeholder='Password' value={name} onChange={update2} />
                    <br /><br />
                   
                    <button onClick={handleHost}>Login</button> {/* Change to handleHost */}
                    <br /><br />
                </div>
            </div>

            {/* Render fetched data */}

        </div>
    );
}

export default Form;
