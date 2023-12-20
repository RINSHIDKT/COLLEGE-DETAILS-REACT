import React, {useState} from 'react'
import './Student.css'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Student = () => {


  const navigate=useNavigate()
    const [studentid,setstudentid]=useState("");
    const [date,setdate]=useState("");
    
    const handleLogin = async (e) => {
      e.preventDefault()
      try {
        const response = await axios.post("http://localhost:3369/authentication/studentlogin", {
    
        studentid: studentid,
        date: date
        });
    
        const data = response.data;
        console.log(data);
    
        if (response.status !== 404) {
        const token = data.token;
        localStorage.setItem("std_token", JSON.stringify(token));
        success(setTimeout(()=>{
            navigate("/studentdetails");
        },3000),{ state: { studentid } });
        } else {
        alert(data.msg);
        }
      } catch (error) {
        alert("Student ID Or Date Of Birth Incorrect");
      }
    };
    
    
    const success = () =>
     toast.success("Login Succesfully Completed",{
        position: "top-right",
        autoClose:2500 ,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true, 
        draggable: true,
        progress: undefined, 
        theme: "dark",
     })




  return (
    <div>
       <div className="container">
            <div className="top">
                <div className="bottom">
                    <div className="center">
                        <h2 id='student-head'>Student Page</h2>
                        <h4 id='student-login'>Login</h4>
                        <div className="student-name-div">
                           <i class="fa fa-user" aria-hidden="true"></i>
                           <input type="text" className='student-name' onChange={(e) => setstudentid(e.target.value)} name='studentid'  placeholder='Student Id' />
                        </div>
                        <div className="student-pass-div">
                           <i class="fa fa-calendar" aria-hidden="true"></i>
                           <input type="date" className='student-date' onChange={(e) => setdate(e.target.value)} name='date' placeholder='Date Of Birth' />
                        </div>
                        <button id='student-btn' onClick={handleLogin}>Submit</button>
                        <ToastContainer 
				
                          position="top-right" 
                          autoClose={2500}
                          hideProgressBar={false} 
                          newestOnTop={false} 
                          closeOnClick 
                          rtl={false}
                          pauseOnFocusLoss
                          draggable
                          pauseOnHover
                          theme="dark"
                          
                          />
                        <Link to={"/"}><div className='student-back'><i class="fa fa-arrow-circle-left" aria-hidden="true"></i></div></Link>
                    </div>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Student










