import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Staffforgotpass.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Staffforgotpass = () => {

  const success = () =>
  toast.success("You Are Succesfuly Changed",{
   position: "top-right",
   autoClose:2500 ,
   hideProgressBar: false,
   closeOnClick: true,
   pauseOnHover: true, 
   draggable: true,
   progress: undefined, 
   theme: "dark",
  })




    const [val,setVal]=useState({phone:"",email:"",password:""})
    const handlechange=(e)=>{
      setVal((pre)=>({...pre,[e.target.name]:e.target.value}))
        console.log(val);
    }
 
    const editPwd=async(e)=>{
        e.preventDefault()
        const res=await axios.get(`http://localhost:3369/authentication/getusername/${val.phone}`)
        let data=res.data;
        if(data.email===val.email){
          const res=await axios.patch(`http://localhost:3369/authentication/forgotepwd/${val.phone}`,{password:val.password})
      if(res.status===200){
        success();
            setTimeout(()=>{
            },3000);
      }
      console.log(res.status);
    }else{
      alert("Username and Password does not match")
    }
        }



  return (
    <div>
            <div className="container">
            <div className="top">
                <div className="bottom">
                    <div className="center">
                        <h2 id='staff-head'>Staff Page</h2>
                        <h4 id='staff-login'>Forgot Password</h4>
                        <div className="staff-register-phone">
                            <input type="text" name='phone'  onChange={handlechange}   placeholder='Enter Phone Number'/>
                        </div>
                        <div className="staff-register-user">
                            <input type="text" name='email'  onChange={handlechange}   placeholder='Enter Email'/>
                        </div>
                        <div className="staff-register-password">
                            <input type="text" name='password'  onChange={handlechange}   placeholder='Enter New Password'/>
                        </div>
                        <button id='staff-btn-password' onClick={editPwd}>Change Password</button>
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
                        <Link to={"/staff"}><div className='staff-back'><i class="fa fa-arrow-circle-left" aria-hidden="true"></i></div></Link>
                    </div>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Staffforgotpass











