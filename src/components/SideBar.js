import { Link } from "react-router-dom";
import sidebar from "../DashboardComps/Dashbaord.module.css"
import logo from "../Logo/University_of_Jordan_Logo.svg.png"
import Reserve from "../Logo/bxs-edit.svg"
import halls from "../Logo/bxs-door-open.svg"
import history from "../Logo/history.png"
import reservation from "../Logo/reservation.png"
import reports from "../Logo/pie-chart.png"
import dashboard from "../Logo/dashboard.png"
import user from "../Logo/bxs-user.svg"
import useAuth from "../hooks/useAuth";
const SideBar = () => {
    const {auth}=useAuth();
    
    return (
        <aside className={`${sidebar.sidebar} ${sidebar.dashboard}`}>
         <div className={sidebar.logo}><img src={logo} alt=""/> <span>JU Hallls</span></div>
        <div className={sidebar.pages}>
        <Link to="/dashboard" > <div><img src={dashboard} alt="" /> <span>Dashboard</span></div></Link>
        <Link to="/Reserve"><div><img src={Reserve} alt=""/> <span>Reserve a Room</span></div></Link>
        <Link to="/History"><div><img src={history}  alt=""/> <span>History</span></div></Link>
        {auth?.role==="ADMIN"&&<Link to="/Requests"><div><img src={reservation} alt=""/> <span>Requsts</span></div></Link>}
        {auth?.role==="ADMIN"&&<Link to="/RoomManagement"><div><img src={halls} alt="" /> <span>Management</span></div></Link>}
        {auth?.role==="ADMIN"&&<Link to="/AdminPanel"><div><img src={user} alt="" /> <span>Users</span></div></Link>}
        {auth?.role==="ADMIN"&&<Link to="/reports"><div><img src={reports} alt=""/> <span>Reports</span></div></Link>}
    </div>
</aside>
     );
}
 
export default SideBar;