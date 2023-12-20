import React, { useEffect, useState } from 'react'
import './Adminstudentview.css'
import { Link } from 'react-router-dom'; 
import axios from 'axios'

const Adminstudentview = () => {


    const [getStud,setStud]=useState([])

  const getAllstud=async()=>{
      const res=await axios.get("http://localhost:3369/authentication/getallstuds")
      setStud(res.data)
      console.log(getStud);
      
      
    }
    useEffect(()=>{
      getAllstud() 
  } ,[])

  const deleteStudent = async (id) => {
      try {
        const confirmed = window.confirm("Are you sure you want to delete this staff member?");
    
        if (confirmed) {
          const res = await axios.delete(`http://localhost:3369/authentication/deletestudent/${id}`);
          console.log("deleted", res.data);
          getAllstud();
        } 
      } catch (error) {
        console.log(error);
      }
    };




    
  return (
    <div className='admin-staff-view-color'>
    <div className="staff-home-back-btn">
    <Link to={"/adminhome"}><button class="button-91" role="button">BACK</button></Link>
    </div>
     <h1 className='student-view-head'>Student View</h1>
<div className="row admin-staff-view-card">
   {
    getStud.map((data,index)=>
    <div key={index} className="col-lg-3 admin-staff-view-card-1">
        <div className="admin-staff-view-img">
             <img src={data.photo} alt="" />
        </div>
        <h2>{data.fullname}</h2>
        <h4>{data.studentid}</h4>
        <div className="admin-staff-view-only-btn">
                 <Link className='admin-staff-view-btn-link' to={`/adminstudentallview/${data._id}`}><button className='admin-staff-view-btn'>View</button></Link>
                 {/* <Link className='admin-staff-delete-btn-link' to={`#${data._id}`}><button onClick={()=>deleteStudent(data._id)} className='admin-staff-delete-btn'>Delete</button></Link> */}
        </div>
    </div>
        )
    }
</div>
</div>
  )
}

export default Adminstudentview
