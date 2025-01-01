import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Layout from './components/Layout'
import RequireAuth from './components/RequireAuth';
import UnAuthorized from './components/UnAuthorized';
import Dashbaord from './components/Dashboard';
import Missing from "./components/Missing"
import Reservations from"./components/Reversation"
import RoomManage from './components/RoomManage';

function App() {
  return (
    
          <Routes>

            <Route path='/Login' element={<Login/>}/>
            <Route path='/Unauthorized' element={<UnAuthorized/>} />
            <Route element={<RequireAuth AllowedRoles={['STUDENT','ADMIN','DOCTOR']}/>}>
            <Route element={<Layout/>}>
            <Route path='/dashboard' element={<Dashbaord/>}/>    
            <Route path='/reserve' element={<Reservations/>}/>  
            <Route path='/History' element={<Reservations/>}/>  

            </Route> 
            </Route>
            <Route element={<RequireAuth AllowedRoles={['ADMIN']}/>}>
            <Route element={<Layout/>}>
            <Route path='/RoomManagement' element={<RoomManage/>}/>
            
            </Route>
            </Route>
            <Route path='/*' element={<Missing/>}/>
          </Routes>
    
  );
}

export default App;
