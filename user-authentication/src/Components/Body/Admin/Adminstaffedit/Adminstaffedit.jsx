import React , { useState ,useEffect }from 'react'
import './Adminstaffedit.css';
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { Link } from 'react-router-dom';



const Adminstaffedit = () => {

 

    let photo=""
    let navigate=useNavigate()
   const {id}=useParams()
    const[val,setVal]=useState({
      name:"",
      email:'',
      phone:'',
      address:'',
      empid:'',
      salary:'',
      designation:'',
      experience:'',
      username:"",
      password:"",
      confirmpassword:"",
      admin:"",
      photo:'',
    })
   
    console.log(id);
  
    const getData=async()=>{
      const res = await axios.post(`http://localhost:3369/authentication/getstaffdetails/${id}`);
  
      if(res.status==200)
      {
        setVal(res.data)
      }
    }
  
    useEffect(()=>{
      getData()
    },[])
    console.log('val',val);
  
  
    function convertToBase64(file) {
      return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file);
    
          fileReader.onload = () => {
              resolve(fileReader.result)
          }
          fileReader.onerror = (error) => {
              reject(error)
          }
      })
    }
    
    const getDatas=(e)=>{ 
      setVal((pre)=>({...pre,[e.target.name]:e.target.value}))
    }
    
    const Upload=async(e)=>{
      e.preventDefault()
    
      photo=await convertToBase64(e.target.files[0])
      setVal((pre)=>({...pre,photo:photo}))
    }
    
    const editData=async(e)=>{
      e.preventDefault()
      console.log(val)
      
      const res=await axios.patch(`http://localhost:3369/authentication/editstaffdetails/${id}`,{...val})
      if(res.status!=200){
        console.log(res.status);
        alert("Data Not Edited")
      }else{
        alert('Data Edited SuccessFully')
        navigate(`/adminstaffallview/${id}`)
      }
    }




  return (
   <div className='staff-edit-page-bg'>
    <div className="staff-edit-head">
        <h2>Staff Edit Page</h2>
    </div>
            <div className="staff-edit-inputfields">
                    <div className="staff-edit-input-one">
                            <input type="text" name='empid' value={val.empid} onChange={getDatas} placeholder='Empid'/>
                            <input type="text" name='salary' value={val.salary} onChange={getDatas} placeholder='Salary'/>
                            <input type="text" name='phone' value={val.phone} onChange={getDatas} placeholder='Phone'/>
                            <input type="text" name='experience' value={val.experience} onChange={getDatas} placeholder='Experience'/>
                            <input type="text" name='name' value={val.name} onChange={getDatas} placeholder='Name'/>
                            <input type="text" name='username' value={val.username} onChange={getDatas} placeholder='Username'/>
                    </div>
                    <div className="staff-edit-input-two">
                            <input type="text" name='password' value={val.password} onChange={getDatas} placeholder='Password'/>
                            <input type="text" name='confirmpassword' value={val.confirmpassword} onChange={getDatas} placeholder='ConfirmPassword'/>
                            <input type="text" name='address' value={val.address} onChange={getDatas} placeholder='Address'/>
                            <input type="text" name='designation' value={val.designation} onChange={getDatas} placeholder='Designation'/>
                            <input type="text" name='email' value={val.email} onChange={getDatas} placeholder='Email'/>
                            {/* <input type="text" name='admin' value={val.admin}  placeholder='Adminname'/> */}
                            <div className="staff-edit-input">
                                <input type="file" name='photo' onChange={Upload} />
                            </div>
                    </div>
            </div>
            <div className="staff-edit-input-img">
                        <img src={val.photo} alt="" />
                        {/* <input type="file" name='photo' onChange={Upload} /> */}
            </div>
            <div className="staff-edit-submit-btn">
                <button onClick={editData}>Edit</button>
            </div>
    </div>
  )
}

export default Adminstaffedit


    

























