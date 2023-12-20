import React, { useEffect, useState } from 'react'
import './Adminstudentallview.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const Adminstudentallview = () => {


    const navigate=useNavigate()
    const { id } = useParams();
    const [getStudent, setStudent] = useState([]);
    const [attantantace, setAttantantace] = useState();
  
    const fullData = async () => {
        try {
            const res = await axios.post(`http://localhost:3369/authentication/getStudentdetails/${id}`);
            setStudent(res.data);
            console.log(res.data); 
            getpersantage(); 
        } catch (error) {
            console.log(error);
        }
    }
  
    useEffect(() => {
        fullData(id);
    }, [id]);
  
    const getpersantage = () => {
     if (getStudent.attandance !== "" && getStudent.attandance !== undefined) {
         let pers = (getStudent.attandance / 200) * 100;
         setAttantantace(pers);
         console.log(pers);
     }
  };
  
  const [username, setUsername] = useState("");
  
    useEffect(() => {
      const storedUsername = localStorage.getItem("username");
      if (storedUsername) {
        setUsername(JSON.parse(storedUsername));
      }
    }, []);




  return (
    <div className='student-full-view-color'>
    <div className="admin-staff-back-btn">
       <Link to={"/adminstudentview"}><button class="button-91" role="button">BACK</button></Link>
     </div>
  <div className="student-full-view-head">
      <h2>Student Full View</h2>
      {/* <h2>{username}</h2> */}
  </div>


  <div className="student-full-view-card">
      <div className="student-full-view-img">
            <div className="student-full-view-img-only">
                <img src={getStudent.photo} alt="" />
            </div>
            <div className="student-full-view-head-id">
                <h1>{getStudent.fullname}</h1>
                <h2>{getStudent.studentid}</h2>
                {/* <Link to={`/staffstudentedit/${getStudent._id}`}><button className='student-full-view-edit'>Edit</button></Link> */}
            </div>
      </div>
      <div className="student-full-view-details">
            <h3 className='details-flex'>Admin: <p>{getStudent.staff}</p></h3>
            <h3 className='details-flex'>Student Id: <p>{getStudent.studentid}</p></h3>
            <h3 className='details-flex'>Date Of Birth: <p>{getStudent.date}</p></h3>
            <h3 className='details-flex'>Phone: <p>{getStudent.phonenumber}</p></h3>
            <h3 className='details-flex'>Email: <p>{getStudent.email}</p></h3>
            <h3 className='details-flex'>Address: <p>{getStudent.address}</p></h3>
            <h3 className='details-flex'>Cource: <p>{getStudent.course}</p></h3>
            <h3 className='details-flex'>Batch: <p>{getStudent.batch}</p></h3>
            <h3 className='details-flex'>Semester: <p>{getStudent.semester}</p></h3>
            <h3 className='details-flex'>Attandance: <p>{attantantace!==""?`${attantantace}%`:'Loading...'}</p></h3>
            <h3 className='details-flex'>Internal Mark:
                <p>Chemistry :- {getStudent?.internal?.internalchemistry}</p>
                <p>Physics :- {getStudent?.internal?.internalphysics}</p>
                <p>Maths :- {getStudent?.internal?.internalmaths}</p>
            </h3>

            <h3 className='details-flex'>Test Mark: 
                <p>Chemistry :- {getStudent?.test?.testchemistry}</p>
                <p>Physics :- {getStudent?.test?.testphysics}</p>
                <p> Maths :- {getStudent?.test?.testmaths}</p>
            </h3>

      </div>
  </div>


</div>
  )
}

export default Adminstudentallview
