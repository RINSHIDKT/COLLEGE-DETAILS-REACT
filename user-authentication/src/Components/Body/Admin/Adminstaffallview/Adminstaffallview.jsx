import React, {useEffect,useState} from 'react'
import './Adminstaffallview.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useLocation, Link, useNavigate } from 'react-router-dom';


const Adminstaffallview = () => {


  const location = useLocation();
  const username = location.state && location.state.username;
  const navigate = useNavigate();

  const gotoview = ()=>{
    navigate("", { state: { username } });
  }


          const {id}=useParams()
          console.log(id);
          const [getEmp,setEmp]=useState([])
          const fullView = async (id) => {
            try {
              const res = await axios.post(`http://localhost:3369/authentication/getstaffdetails/${id}`);
              console.log(res);
              setEmp(res.data);
              console.log(res.data);
            } catch (error) {
              console.error('Error fetching employee details:', error);
            }
          };
          useEffect(() => {
            fullView(id); 
          }, [id]);
          console.log(getEmp);
 
 return (
                <div className='staff-full-view-color'>
                  <div className="admin-staff-back-btn">
                     <Link to={"/adminstaffview"}><button class="button-91" role="button">BACK</button></Link>
                   </div>
                <div className="staff-full-view-head">
                    <h2>Staff Full View</h2>
                    <h2>{username}</h2>
                </div>
                <div className="staff-full-view-card">
                    <div className="staff-full-view-img">
                          <div className="staff-full-view-img-only">
                              <img src={getEmp.photo} alt="" />
                          </div>
                          <div className="staff-full-view-head-id">
                              <h1>{getEmp.name}</h1>
                              <h2>{getEmp.empid}</h2>
                              <Link to={`/adminstaffedit/${getEmp._id}`}><button className='staff-full-view-edit' onClick={gotoview}>Edit</button></Link>
                          </div>
                    </div>
                    <div className="staff-full-view-details">
                          <h3 className='details-flex'>Username: <p>{getEmp.username}</p></h3>
                          {/* <h3 className='details-flex'>Password: <p>{getEmp.password}</p></h3>
                          <h3 className='details-flex'>Confirmpassword: <p>{getEmp.confirmpassword}</p></h3> */}
                          <h3 className='details-flex'>Phone: <p>{getEmp.phone}</p></h3>
                          <h3 className='details-flex'>Experience: <p>{getEmp.experience}</p></h3>
                          <h3 className='details-flex'>Designation: <p>{getEmp.designation}</p></h3>
                          <h3 className='details-flex'>Address: <p>{getEmp.address}</p></h3>
                          <h3 className='details-flex'>Email: <p>{getEmp.email}</p></h3>
                          <h3 className='details-flex'>Salary: <p>{getEmp.salary}</p></h3>
                          <h3 className='details-flex'>Admin: <p>{getEmp.admin}</p></h3>
                    </div>
                </div>
              </div>
  )
}

export default Adminstaffallview













