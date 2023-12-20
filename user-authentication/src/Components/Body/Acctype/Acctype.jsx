import React from 'react'
import './Acctype.css';
import { Link } from 'react-router-dom';

const Acctype = () => {
  return (
    <div>
       <div className="container">
            <div className="top">
                <div className="bottom">
                    <div className="center">
                        <h2 id='type-head'>Account Type</h2>
                        <Link to="/admin"><button id='btn-admin'>Admin</button></Link>
                        <Link to="/staff"><button id='btn-staff'>Staff </button></Link>
                        {/* <Link to="/studenthome"><button id='btn-student'>Student </button></Link> */}
                    </div>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Acctype
