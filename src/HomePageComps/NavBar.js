import React from 'react';
import logo from "../Logo/University_of_Jordan_Logo.svg.png";
import { Link } from "react-router-dom";
import homestyle from './Homepage.module.css';
import useAuth from '../hooks/useAuth';

const NavBar = () => {
    const {auth,setAuth}=useAuth()
    return (
        <header className={homestyle.header} aria-labelledby="home" id='home'> 
            <nav>
                <Link to="/"><img src={logo} className={homestyle.logo} alt="University of Jordan Logo" /></Link> 
                <div className={homestyle.navlinks}>
                    <ul>
                        {auth?.accessToken&&<li><Link to="/Dashboard">Dashbaord</Link></li>}
                        <li><a href="#abouto">About</a></li>
                        {!auth?.accessToken?<li><Link to="/Login">Login</Link></li>:<li ><Link onClick={()=>setAuth({})}>Logout</Link></li>}
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;
