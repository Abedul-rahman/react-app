import React from 'react';
import homestyle from './Homepage.module.css';  // Import the CSS module as homestyle

const AboutUs = () => {
    return (
        <section aria-labelledby="abouto" className={homestyle.aboutus}> {/* Use scoped class */}
            <h1 id="abouto">About Us</h1>
            <div className={homestyle.pos}> {/* Use scoped class */}
                <div className={homestyle.content}> {/* Use scoped class */}
                    <h2>Who We Are</h2>
                    <p>JU Halls is the official hall scheduling and reservation platform for the University of Jordan.</p>
                    <h2>What We Do</h2>
                    <p>Our website offers a smooth way to reserve and schedule university halls.</p>
                    <h2>Our Vision</h2>
                    <p>We aim to offer a platform that encourages cooperation, innovation, and achievement.</p>
                </div>
                <div className={homestyle.A}> {/* Use scoped class */}
                    <img src={`${process.env.PUBLIC_URL}/images/about.jpg`}  alt="About Us" />
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
