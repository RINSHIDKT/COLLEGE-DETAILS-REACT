import './Adminstaffreg.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Adminstaffreg = () => {
  const [username, setUsername] = useState("");

  
  const navigate = useNavigate();

  const [val, setVal] = useState({
    admin: "",
    empid: "",
    name: "",
    username: "",
    password: "",
    confirmpassword: "",
    email: "",
    phone: "",
    designation: "",
    salary: "",
    experience: "",
    address: "",
    photo: ""
  });

  let Photo = "";

  const Getdata = (e) => {
    setVal((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  function convertToBase64(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }

  const Upload = async (e) => {
    e.preventDefault();
    Photo = await convertToBase64(e.target.files[0]);
  };

  const registerStaff = async (e) => {
    e.preventDefault();
    if (!val.username || !val.password) {
      alert("Please enter both username and password");
      return;
    }
    if (val.password !== val.confirmpassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const res = await axios.post("http://localhost:3369/authentication/addstaff", {...val,photo: Photo,admin: username});
      console.log(res.data);
      if (res.status !== 201) {
        alert("Data Not Added");
      } else {
        // alert("Data Successfully Registered");
        navigate("/adminhome")
      }
    } catch (error) {
      alert(`Error: Data not added. ${error.message}`);
    }
  };

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(JSON.parse(storedUsername));
    }
  }, []);

  return (
    <div className='admin-staff-reg-color'>
      <nav className="navbar admin-home-bg">
        <div className="container-fluid">
          <div className="admin-user-logout">
            <div className='admin-home-fafa'><i className="fa fa-user-circle" aria-hidden="true"></i></div>
            <div className='admin-home-user'>{username}</div>
          </div>
          <Link to={"/adminhome"}><button class="button-91" role="button">BACK</button></Link>
        </div>
      </nav>
      <div className="admin-staff-reg-head">
        <h2>Staff Register</h2>
      </div>
      <div className="admin-staff-reg-inputfields">
        <div className="admin-staff-reg-input-row-1">
                <input type="text" name='empid' onChange={Getdata} placeholder='Empid'/>
                <input type="text" name='salary' onChange={Getdata} placeholder='Salary'/>
                <input type="text" name='phone' onChange={Getdata} placeholder='Phone'/>
                <input type="text" name='experience' onChange={Getdata} placeholder='Experience'/>
                <input type="text" name='name' onChange={Getdata} placeholder='Name'/>
                <input type="text" id='adminstaffreg-input' name='username' onChange={Getdata} placeholder='Username'/>
        </div>
        <div className="admin-staff-reg-input-row-2">
                   <input type="text" name='password' onChange={Getdata} placeholder='Password'/>
                   <input type="text" name='confirmpassword' onChange={Getdata} placeholder='Confirmpassword'/>
                   <input type="text" name='address' onChange={Getdata} placeholder='Address'/>
                   <input type="text" name='designation' onChange={Getdata} placeholder='Designation'/>
                  <input type="text" name='email' onChange={Getdata} placeholder='Email'/>
        </div>
      </div>
      <div className="admin-staff-reg-input-admin-name">
        <input type="file" name='photo' onChange={Upload} placeholder='Photo' />
      </div>
      <div className="admin-staff-reg-btn">
        <button onClick={registerStaff}>Register</button>
      </div>
    </div>
  );
};

export default Adminstaffreg;












