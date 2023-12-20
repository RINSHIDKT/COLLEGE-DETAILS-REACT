import React from 'react';
import './Admin.css';
import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';






const Admin = () => {
  const success = () =>
 toast.success("You Are Succesfuly Loged",{
	position: "top-right",
	autoClose:2500 ,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true, 
	draggable: true,
	progress: undefined, 
	theme: "dark",
 })



  const navigate=useNavigate()
  const [username,setusername]=useState("");
  const [password,setpassword]=useState("");

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post("http://localhost:3369/authentication/login", {

        username: username,
        password: password
      });

      const data = response.data;
      console.log(data);

      if (response.status !== 404) {
        const token = data.token;
        localStorage.setItem("token", JSON.stringify(token));
        localStorage.setItem("username", JSON.stringify(username));
        		success();
            setTimeout(()=>{
              navigate("/adminhome");
            },3000);

      } else {
        alert(data.msg);
      }
    } catch (error) {
      alert("User Name Or Password Is In Correct");
    }
  };





  return (
    <div>
       <div className="container">
            <div className="top">
                <div className="bottom">
                    <div className="center">
                        <h2 id='admin-head'>Admin Page</h2>
                        <h4 id='admin-login'>Login</h4>
                        <div className="admin-name-div">
                           <i class="fa fa-user" aria-hidden="true"></i>
                           <input type="text" className='admin-name' name='username' value={username} onChange={(e) => setusername(e.target.value)}  placeholder='User Name' />
                        </div>
                        <div className="admin-pass-div">
                          <i class="fa fa-key" aria-hidden="true"></i>
                           <input type="password" className='admin-pass' name='password' value={password} onChange={(e) => setpassword(e.target.value)} placeholder='Password' />
                        </div>
                        <button id='admin-btn' onClick={handleLogin}>Submit</button>
                        <ToastContainer
                            position="top-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="dark"
                            />
                        <Link className='admin-create' to={"/admincreate"}><div className="admin-create">Create Account ?</div></Link>
                        <Link to={"/acctype"}><div className='admin-back'><i class="fa fa-arrow-circle-left" aria-hidden="true"></i></div></Link>
                    </div>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Admin





