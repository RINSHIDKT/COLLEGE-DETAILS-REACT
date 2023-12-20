// import axios from 'axios';
// import  { React,useEffect, useState } from 'react'
// import './Studentdetails.css'

// const Studentdetails = () => {


//     const [student,setStudent]=useState({})

//     const FullData = async () => {
//       try { 
//         // const key = localStorage.key(0);
//         const value = JSON.parse(localStorage.getItem('stud_token'));
//         // console.log('dstud token',value);
//          const res = await axios.get("http://localhost:3369/authentication/getdetsilsloginedstudent",{headers: {Authorization: Bearer ${value} },});
//          console.log(res);
//         setStudent(res.data.task);
//         console.log(res.data);
//         console.log(res.data.task.name);
//       } catch (error) {
//         console.log('Error fetching data:', error); 
//       }
//     };
    
  
//     useEffect(() => {
//       FullData();
//     }, []);
    





//   return (
//     <div className='student-full-view-color'>
//     <div className="admin-staff-back-btn">
//        <Link to={"/studenthome"}><button class="button-91" role="button">BACK</button></Link>
//      </div>
//   <div className="student-full-view-head">
//       <h2>Student Full View</h2>
//       {/* <h2>{username}</h2> */}
//   </div>


//   <div className="student-full-view-card">
//       <div className="student-full-view-img">
//             <div className="student-full-view-img-only">
//                 <img src={student.photo} alt="" />
//             </div>
//             <div className="student-full-view-head-id">
//                 <h1>{student.fullname}</h1>
//                 <h2>{student.studentid}</h2>
//                 <Link to={`/staffstudentedit/${student._id}`}><button className='student-full-view-edit'>Edit</button></Link>
//             </div>
//       </div>
//       <div className="student-full-view-details">
//             <h3 className='details-flex'>Admin: <p>{student.staff}</p></h3>
//             <h3 className='details-flex'>Student Id: <p>{student.studentid}</p></h3>
//             <h3 className='details-flex'>Date Of Birth: <p>{student.date}</p></h3>
//             <h3 className='details-flex'>Phone: <p>{student.phonenumber}</p></h3>
//             <h3 className='details-flex'>Email: <p>{student.email}</p></h3>
//             <h3 className='details-flex'>Address: <p>{student.address}</p></h3>
//             <h3 className='details-flex'>Cource: <p>{student.course}</p></h3>
//             <h3 className='details-flex'>Batch: <p>{student.batch}</p></h3>
//             <h3 className='details-flex'>Semester: <p>{student.semester}</p></h3>
//             <h3 className='details-flex'>Attandance: <p>{attantantace!==""?`${attantantace}%`:'Loading...'}</p></h3>
//             <h3 className='details-flex'>Internal Mark:
//                 <p>Chemistry :- {student?.internal?.internalchemistry}</p>
//                 <p>Physics :- {student?.internal?.internalphysics}</p>
//                 <p>Maths :- {student?.internal?.internalmaths}</p>
//             </h3>

//             <h3 className='details-flex'>Test Mark: 
//                 <p>Chemistry :- {student?.test?.testchemistry}</p>
//                 <p>Physics :- {student?.test?.testphysics}</p>
//                 <p> Maths :- {student?.test?.testmaths}</p>
//             </h3>

//       </div>
//   </div>


// </div>
//   )
// }

// export default Studentdetails



import axios from 'axios';
import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import './Studentdetails.css';

const Studentdetails = () => {
  const [student, setStudent] = useState({});
  const [attantantace, setAttantantace] = useState(""); 

  const FullData = async () => {
    try {
      const value = JSON.parse(localStorage.getItem('std_token'));
      const res = await axios.get("http://localhost:3369/authentication/getdetsilsloginedstudent", {
        headers: { Authorization: `Bearer ${value}` },
      });
      setStudent(res.data.task);
      console.log(res.data);
      console.log(res.data.task.name);
      setAttantantace(res.data.task.attandance); 
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  useEffect(() => {
    FullData();
  }, []);



  const Logout = () => {
    const confirmed = window.confirm("Are You Sure You Want To LogOut?");
    if (confirmed) {
        localStorage.clear();
        navigate("/studenthome")
    }
     
    };



  return (
    <div className='student-full-view-color'>
    <div className="admin-staff-back-btn">
        
       {/* <Link to={"/student"}><button class="button-91" role="button">BACK</button></Link> */}
       <div className="btn-username">
                 <div className='student-fullname'>{student.fullname}</div>
            <div>
                <Link to="/student"><button class="Btn" id='btn-log-student-details' onClick={Logout}>
                                    <div class="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
                                    <div class="text">LogOut</div>
                </button></Link>
            </div>
       </div>
     </div>
    <h1 className='std-details'>Student Details</h1>
  <div className="student-full-view-card">
      <div className="student-full-view-img">
            <div className="student-full-view-img-only">
                <img src={student.photo} alt="" />
            </div>
            <div className="student-full-view-head-id">
                <h1>{student.fullname}</h1>
                <h2>{student.studentid}</h2>
            </div>
      </div>
      <div className="student-full-view-details">
            <h3 className='details-flex'>Admin: <p>{student.staff}</p></h3>
            <h3 className='details-flex'>Student Id: <p>{student.studentid}</p></h3>
            <h3 className='details-flex'>Date Of Birth: <p>{student.date}</p></h3>
            <h3 className='details-flex'>Phone: <p>{student.phonenumber}</p></h3>
            <h3 className='details-flex'>Email: <p>{student.email}</p></h3>
            <h3 className='details-flex'>Address: <p>{student.address}</p></h3>
            <h3 className='details-flex'>Cource: <p>{student.course}</p></h3>
            <h3 className='details-flex'>Batch: <p>{student.batch}</p></h3>
            <h3 className='details-flex'>Semester: <p>{student.semester}</p></h3>
            <h3 className='details-flex'>Attandance: <p>{attantantace!==""?`${attantantace}%`:'Loading...'}</p></h3>
            <h3 className='details-flex'>Internal Mark:
                <p>Chemistry :- {student?.internal?.internalchemistry}</p>
                <p>Physics :- {student?.internal?.internalphysics}</p>
                <p>Maths :- {student?.internal?.internalmaths}</p>
            </h3>

            <h3 className='details-flex'>Test Mark: 
                <p>Chemistry :- {student?.test?.testchemistry}</p>
                <p>Physics :- {student?.test?.testphysics}</p>
                <p> Maths :- {student?.test?.testmaths}</p>
            </h3>

      </div>
  </div>


</div>
  );
};

export default Studentdetails;










