import React from 'react';
import './Admincreate.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Admincreate = () => {
  const success = () =>
 toast.success("You Are Succesfuly Created",{
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



    const [val,setval]=useState({
        name:"",
        username:"",
        password:""
    }  
    )
    const getData=(e)=>{
        e.preventDefault();
        setval((pre)=>({...pre,[e.target.name]:e.target.value}))
  
      }

      const RegisterData=async(e)=>{
        e.preventDefault();
        console.log(val);
    
    
        const res=await axios.post("http://localhost:3369/authentication/adduser",{...val})
        console.log(res.status);
        if(res.status!==201){
          alert("Data Note Added")
        }
        else{
          success();
            setTimeout(()=>{
              navigate("/admin")
            },3000);
          
        }
      }

      


  return (
    <div>
       <div className="container">
            <div className="top">
                <div className="bottom">
                    <div className="center">
                        <h2 id='admincreate-head'>Admin Page</h2>
                        <h4 id='admincreate-login'>Create Account</h4>
                        <div className="admincreate-name-div">
                           <i class="fa fa-user" aria-hidden="true"></i>
                           <input type="text" name='name' className='admincreate-name'  onChange={getData}  placeholder='Name' />
                        </div>
                        <div className="admincreate-username-div">
                           <i class="fa fa-user" aria-hidden="true"></i>
                           <input type="text" name='username' className='admincreate-username' onChange={getData}  placeholder='User Name' />
                        </div>
                        <div className="admincreate-pass-div">
                          <i class="fa fa-key" aria-hidden="true"></i>
                           <input type="password" name='password'  className='admincreate-pass'  onChange={getData} placeholder='Password' />
                        </div>
                        <Link to={"/admin"}><button id='admincreate-btn' onClick={RegisterData}>Submit</button></Link>
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
                        <Link to={"/admin"}><div className='admincreate-back'><i class="fa fa-arrow-circle-left" aria-hidden="true"></i></div></Link>
                    </div>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Admincreate
