import React from 'react';
import './Staffforgotuser.css';
import { useState } from 'react';
import { Link} from 'react-router-dom';
import axios from 'axios';





const Staffforgotuser = () => {


    const [phone, setPhone] = useState("");
    const [emp, setEmp] = useState(""); 
    const [usernameMessage, setUsernameMessage] = useState(""); 
  
    const handleChange = (e) => {
      setPhone(e.target.value);
    };
  
    const getUsername = async (e) => {
      e.preventDefault();
  
      try {
        const res = await axios.get(`http://localhost:3369/authentication/getusername/${phone}`);
        setEmp(res.data.username);
        setUsernameMessage(`Username is:- ${res.data.username}`);
      } catch (error) {
        setUsernameMessage("Username not found"); 
      }
    };







  return (
    <div>
            <div className="container">
            <div className="top">
                <div className="bottom">
                    <div className="center">
                        <h2 id='staff-head'>Staff Page</h2>
                        <h4 id='staff-login'>Forgot Username</h4>
                        <div className="staff-register-phone">
                            <input type="text" name='name' onChange={handleChange}  placeholder='Enter Phone Number'/>
                        </div>
                        <button id='staff-btn-phone' onClick={getUsername}>Find Username</button>
                        <div className="display-forgot-username">
                            <p>{usernameMessage}</p>
                        </div>
                        <Link to={"/staff"}><div className='staff-back'><i class="fa fa-arrow-circle-left" aria-hidden="true"></i></div></Link>
                    </div>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Staffforgotuser








