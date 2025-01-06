import { Outlet } from "react-router-dom"
import SideBar from "./SideBar"
import style from "../DashboardComps/Dashbaord.module.css"
import Navbar from "./NavBar"
const Layout = () => {
    return (<>
        <SideBar/>

        <div className={style.container}>
        <Navbar/>   
        <main className={style.content}>
            <Outlet/>
            </main> 
</div>              
    </>
    )
}

export default Layout