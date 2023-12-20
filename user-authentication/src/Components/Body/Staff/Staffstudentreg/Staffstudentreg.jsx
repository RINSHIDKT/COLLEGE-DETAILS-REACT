import React, { useEffect, useState } from 'react'; 
import { Link, Navigate, useNavigate } from 'react-router-dom'; 
import './Staffstudentreg.css'
import axios from 'axios';





const Staffstudentreg = () => {

    const navigate = useNavigate();
   let photo="";

      const [username, setUsername] = useState("");

      useEffect(() => {
        const storedUsername = localStorage.getItem("username");
        if (storedUsername) {
          setUsername(JSON.parse(storedUsername));
        }
      }, []);

      const [val, setVal] = useState({
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
      
        photo=await convertToBase64(e.target.files[0])
        console.log(photo);
      }
    
      const Getdata=(e)=>{ 
        console.log(e.target.value);
        e.preventDefault();
        setVal((pre)=>({...pre,[e.target.name]:e.target.value}))
        console.log(val);
      }
    
      const AddStudent=async(e)=>{
        e.preventDefault()
        console.log(val);
       try {
        const res=await axios.post("http://localhost:3369/authentication/addstudent",{...val,photo:photo,staff:username})
        console.log(res.data);
        if(res.status === 201){
          navigate("/staffhome")
          alert("Seccussfully registerd")
         }
         else{
          alert("Data Not Added");
         }
       } catch (error) {
        alert("error",error)
       }
       
        
      }

const GetTestmark = (e) =>{
    setVal((pre)=>({...pre,test:{...pre.test,[e.target.name]:e.target.value},}));
}

const GetInternalmark = (e) =>{
  setVal((pre)=>({...pre,internal:{...pre.internal,[e.target.name]:e.target.value},}));
}






  return (
    <div id='staff-student-back-color'>
        <nav className="navbar admin-home-bg"> 
          <div className="container-fluid">
            <div className="admin-user-logout">
                <div className='admin-home-fafa'><i className="fa fa-user-circle" aria-hidden="true"></i></div>
                <div className='admin-home-user'>{username}</div>
            </div>  
            <Link to={"/staffhome"}><button className="button-91" role="button">BACK</button></Link>
          </div>
        </nav>
        <div className="staff-student-head">
            <h2>Student Register</h2>
        </div>
        <div className="staff-student-one-two">
        <div className="staff-student-row-one">
            <input type="text" onChange={Getdata} name='studentid' className='staff-stud-text-color'  placeholder='Student Id'/>
            <input type="text" onChange={Getdata} name='batch' className='staff-stud-text-color'  placeholder='Batch'/>
            <input type="text" onChange={Getdata} name='email' className='staff-stud-text-color'  placeholder='Email'/>
            <input type="text" onChange={Getdata} name='phonenumber'className='staff-stud-text-color'  placeholder='Phonenumber'/>
        </div>
        <div className="staff-student-row-two">
            <input type="text" onChange={Getdata} name='fullname' className='staff-stud-text-color'  placeholder='Fullname'/>
            <input type="text" onChange={Getdata} name='attandance' className='staff-stud-text-color'  placeholder='Attandance '/>
            <input type="text" onChange={Getdata} name='address' className='staff-stud-text-color' placeholder='Address'/>
            {/* <input type="text" onChange={Getdata} name='staff' className='staff-stud-text-color' placeholder='Staff'/> */}
            <input type="date" onChange={Getdata} name='date'  id='student-staff-date' />
        </div>
        </div>
        <div className="staff-student-subjects-one">
            <p>Internal Marks :</p>
            <input type="number" onChange={GetInternalmark} name='internalphysics' className='staff-stud-text-color' placeholder='Physics'/>
            <input type="number" onChange={GetInternalmark} name='internalmaths' className='staff-stud-text-color'  placeholder='Maths'/>
            <input type="number" onChange={GetInternalmark} name='internalchemistry' className='staff-stud-text-color'  placeholder='Chemistry'/>
        </div>
        <div className="staff-student-subjects-two">
            <p>Test Scores :</p>
            <input type="number" onChange={GetTestmark} name='testphysics' className='staff-stud-text-color'  placeholder='Physics'/>
            <input type="number" onChange={GetTestmark} name='testmaths' className='staff-stud-text-color'  placeholder='Maths'/>
            <input type="number" onChange={GetTestmark} name='testchemistry' className='staff-stud-text-color'  placeholder='Chemistry'/>
        </div>
        <div className="staff-studenr-cours-sem">
       <div className="staff-student-drop-cource">
       <select name="course" onChange={Getdata} id="course">
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
        <select name="semester" onChange={Getdata} id="semester">
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
            <input type="file" onChange={Upload} name='photo'/>
        </div>
        <div className="staff-student-submit">
            <button onClick={AddStudent}>Register</button>
        </div>
    </div>
  )
}

export default Staffstudentreg
















