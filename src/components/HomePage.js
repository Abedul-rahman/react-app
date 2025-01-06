import React from 'react';
import { Link } from 'react-router-dom';
import homestyle from '../HomePageComps/Homepage.module.css';  // Import CSS module as homestyle
import NavBar from '../HomePageComps/NavBar';
import AboutUs from '../HomePageComps/AboutUs';
import Services from '../HomePageComps/Services';
import Footer from '../HomePageComps/Footer';
import useAuth from '../hooks/useAuth';

const HomePage = () => {
    const {auth}=useAuth();
    return (
        <>
            <NavBar />

            <section>
                <div className={homestyle.textbox}> {/* Use scoped class */}
                    <h1>Welcome To JU Halls</h1>
                    <p>
                        Login now and schedule your lecture, event, group study, etc.<br />
                        Explore our amazing services.
                    </p>
                    {!auth?.accessToken &&<Link className={homestyle.get} to="/Login">Login</Link>}
                </div>
            </section>

            <Services />

            <AboutUs />

            <Footer />
        </>
    );
}

export default HomePage;
