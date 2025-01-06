import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Layout from './components/Layout'
import RequireAuth from './components/RequireAuth';
import UnAuthorized from './components/UnAuthorized';
import Dashbaord from './components/Dashboard';
import Missing from "./components/Missing"
import Reservations from"./components/Reversation"
import RoomManage from './components/RoomManage';
import AdminPanel from './components/AdminPanel';
import Reserve from './components/Reserve';
import History from './components/History';
import Requests from './components/Requests';
function App() {
  return (
    
          <Routes>

            <Route path='/Login' element={<Login/>}/>
            <Route path='/Unauthorized' element={<UnAuthorized/>} />
            <Route element={<RequireAuth AllowedRoles={['STUDENT','ADMIN','DOCTOR']}/>}>
            <Route element={<Layout/>}>
            <Route path='/reserve/:id' element={<Reserve/>}/>
            <Route path='/dashboard' element={<Dashbaord/>}/>    
            <Route path='/reserve' element={<Reservations/>}/>  
            <Route path='/History' element={<History/>}/>  

            </Route> 
            </Route>
            <Route element={<RequireAuth AllowedRoles={['ADMIN']}/>}>
            <Route element={<Layout/>}>
            <Route path='/Requests' element={<Requests/>}/>
            <Route path='/RoomManagement' element={<RoomManage/>}/>
            <Route path='/AdminPanel' element={<AdminPanel/>}/>
            </Route>
            </Route>

            <Route path='/*' element={<Missing/>}/>
          </Routes>
    
  );
}

export default App;
