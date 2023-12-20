
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Acctype from './Components/Body/Acctype/Acctype';
import Admin from './Components/Body/Admin/Admin/Admin'
import Staff from './Components/Body/Staff/Staff/Staff'
import Admincreate from './Components/Body/Admin/Admincreate/Admincreate';
import Student from './Components/Body/Student/Student/Student';
import Adminhome from './Components/Body/Admin/Adminhome/Adminhome';
import Adminstaffreg from './Components/Body/Admin/Adminstaffreg/Adminstaffreg';
import Adminstaffview from './Components/Body/Admin/Adminstaffview/Adminstaffview';
import Adminstaffallview from './Components/Body/Admin/Adminstaffallview/Adminstaffallview';
import Adminstaffedit from './Components/Body/Admin/Adminstaffedit/Adminstaffedit';
import Staffhome from './Components/Body/Staff/Staffhome/Staffhome';
import Staffforgotuser from './Components/Body/Staff/Staffforgotuser/Staffforgotuser';
import Staffforgotpass from './Components/Body/Staff/Staffforgotpass/Staffforgotpass';
import Staffstudentreg from './Components/Body/Staff/Staffstudentreg/Staffstudentreg';
import Staffstudentview from './Components/Body/Staff/Staffstudentview/Staffstudentview';
import Staffstudentallview from './Components/Body/Staff/Staffstudentallview/Staffstudentallview';
import Staffstudentedit from './Components/Body/Staff/Staffstudentedit/Staffstudentedit';
import Studenthome from './Components/Body/Student/Studenthome/Studenthome';
import Adminstudentview from './Components/Body/Admin/Adminstudentview/Adminstudentview';
import Adminstudentallview from './Components/Body/Admin/Adminstudentallview/Adminstudentallview';
import Studentdetails from './Components/Body/Student/Studentdetails/Studentdetails';

function App() {
  

  return (
    <>
    <BrowserRouter>
          <Routes>
               <Route  path="/acctype" Component={Acctype} />
               <Route  path="/admin" Component={Admin} />
               <Route  path="/staff" Component={Staff} />
               <Route  path="/student" Component={Student} />
               <Route  path="/admincreate" Component={Admincreate} />
               <Route  path="/adminhome" Component={Adminhome} />
               <Route  path="/adminstaffreg" Component={Adminstaffreg} />
               <Route  path="/adminstaffview" Component={Adminstaffview} />
               <Route  path="/adminstaffallview/:id" Component={Adminstaffallview} />
               <Route  path="/adminstaffedit/:id" Component={Adminstaffedit} />
               <Route  path="/staffhome" Component={Staffhome} />
               <Route  path="/staffforgotuser" Component={Staffforgotuser} />
               <Route  path="/staffforgotpass" Component={Staffforgotpass} />
               <Route  path="/staffstudentreg" Component={Staffstudentreg} />
               <Route  path="/staffstudentview" Component={Staffstudentview} />
               <Route  path="/staffstudentallview/:id" Component={Staffstudentallview} />
               <Route  path="/staffstudentedit/:id" Component={Staffstudentedit} />
               <Route  path="/" Component={Studenthome} />
               <Route  path="/adminstudentview" Component={Adminstudentview} />
               <Route  path="/adminstudentallview/:id" Component={Adminstudentallview} />
               <Route  path="/studentdetails" Component={Studentdetails} />
          </Routes>
    </BrowserRouter>
    
   
    </>
  )
}

export default App
