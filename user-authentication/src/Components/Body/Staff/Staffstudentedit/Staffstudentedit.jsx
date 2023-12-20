import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import './Staffstudentedit.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const Staffstudentedit = () => {

  const {id}=useParams()
  let Photo="";
const [val,setVal]=useState({
        studentid: "",
        address:"",
        staff:"",
        batch: "",
        email: "",
        fullname: "",
        attandance: "",
        phonenumber: "",
        date: "",
        internal:{
          internalphysics:"",
          internalmaths:"",
          internalchemistry:""
        },
       test:{
        testphysics:"",
        testmaths:"",
        testchemistry:""
       },
        semester:"",
        course:"",
        photo:""
      });

 



  const navigate=useNavigate()

  const fullData = async () => {
      try {
          const res = await axios.post(`http://localhost:3369/authentication/getStudentdetails/${id}`);
          setVal(res.data);
          console.log(val);
      } catch (error) {
          console.log(error);
      }
  }

  useEffect(() => {
      fullData(id);
  }, [id]);



 




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

const Upload=async(e)=>{
  e.preventDefault()

  Photo=await convertToBase64(e.target.files[0])
  console.log(Photo);
  setVal((pre)=>({...pre,[e.target.name]:Photo}))
}

const Getdata=(e)=>{ 
  // console.log(e.target.value);
  setVal((pre)=>({...pre,[e.target.name]:e.target.value}))
  // console.log(val);
}


const GetTestmark = (e) => {
  setVal((pre) => ({...pre,test: { ...pre.test, [e.target.name]: e.target.value },}));
};


const GetInternalmark = (e) => {
  setVal((pre) => ({...pre,internal: { ...pre.internal, [e.target.name]: e.target.value },}));
};

const Edit=async(e)=>{
  e.preventDefault()
 try {
  const res=await axios.patch(`http://localhost:3369/authentication/editstudentdetails/${id}`,{...val})
  console.log(res.data);
  if(res.status!==404){
      alert('Data Edited SuccessFully')
      navigate(`/staffstudentallview/${id}`);
   }
 } catch (error) {
  alert("error",error)
 }
}







  return (
    <div id='staff-edit-student-back-color'>
        <div className="staff-edit-student-head">
            <h2>Student Edit Page</h2>
        </div>
        <div className="staff-student-one-two">
        <div className="staff-student-row-one">
            <input type="text" onChange={Getdata} value={val.studentid} name='studentid' className='staff-stud-text-color'  placeholder='Student Id'/>
            <input type="text" onChange={Getdata} value={val.batch} name='batch' className='staff-stud-text-color'  placeholder='Batch'/>
            <input type="text" onChange={Getdata} value={val.email} name='email' className='staff-stud-text-color'  placeholder='Email'/>
            <input type="text" onChange={Getdata} value={val.phonenumber} name='phonenumber'className='staff-stud-text-color'  placeholder='Phonenumber'/>
        </div>
        <div className="staff-student-row-two">
            <input type="text" onChange={Getdata} value={val.fullname} name='fullname' className='staff-stud-text-color'  placeholder='Fullname'/>
            <input type="text" onChange={Getdata} value={val.attandance} name='attandance' className='staff-stud-text-color'  placeholder='Attandance '/>
            <input type="text" onChange={Getdata} value={val.address} name='address' className='staff-stud-text-color' placeholder='Address'/>
            <input type="date" onChange={Getdata} value={val.date} name='date'  id='student-staff-date' />
        </div>
        </div>
        <div className="staff-student-subjects-one">
            <p>Internal Marks :</p>
            <input type="number" onChange={GetInternalmark} value={val.internal.internalphysics} name='internalphysics' className='staff-stud-text-color' placeholder='Physics'/>
            <input type="number" onChange={GetInternalmark} value={val.internal.internalmaths} name='internalmaths' className='staff-stud-text-color'  placeholder='Maths'/>
            <input type="number" onChange={GetInternalmark} value={val.internal.internalchemistry} name='internalchemistry' className='staff-stud-text-color'  placeholder='Chemistry'/>
        </div>
        <div className="staff-student-subjects-two">
            <p>Test Scores :</p>
            <input type="number" onChange={GetTestmark} value={val.test.testphysics} name='testphysics' className='staff-stud-text-color'  placeholder='Physics'/>
            <input type="number" onChange={GetTestmark} value={val.test.testmaths} name='testmaths' className='staff-stud-text-color'  placeholder='Maths'/>
            <input type="number" onChange={GetTestmark} value={val.test.testchemistry} name='testchemistry' className='staff-stud-text-color'  placeholder='Chemistry'/>
        </div>
        <div className="staff-studenr-cours-sem">
       <div className="staff-student-drop-cource">
       <select name="course" onChange={Getdata} value={val.course} id="course">
              <option value="Select Cource">Select Cource</option>
                <option value="BCA">BCA</option>
                <option value="BBA">BBA</option>
                <option value="B.COM">B.COM</option>
                <option value="BA.ENGLISH">BA.ENGLISH</option>
                <option value="BA.MALAYALAM">BA.MALAYALAM</option>
                <option value="BA.PHYSICS">BA.PHYSICS</option>
      </select>  
        </div>
        <div className="staff-student-drop-sem">
        <select name="semester" onChange={Getdata} value={val.semester} id="semester">
              <option value="Select Semester">Select Semester</option>
                <option value="1st">1st</option>
                <option value="2nd">2nd</option>
                <option value="3rd">3rd</option>
                <option value="4th">4th</option>
                <option value="5th">5th</option>
                <option value="6th">6th</option>
      </select>
       </div>
        </div>
        <div className="staff-student-chhose-file">
            <div  className='staff-student-edit-img'><img src={val.photo} alt="" /></div>
            <input type="file" onChange={Upload} name='photo'/>
        </div>
        <div className="staff-edit-student-submit">
            <button onClick={Edit}>Edit</button>
        </div>
    </div>
  )
}

export default Staffstudentedit













