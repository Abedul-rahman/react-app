import homestyle from "./Homepage.module.css";

const Footer = () => {
    return (
        <footer className={homestyle.footer}>
            <div className={homestyle.container}>
                <div className={homestyle.footerCon}>
                    <h3>Contact Us</h3>
                    <p>Email: <a href="mailto:nassarjihad2018@gmail.com">juHalls@gmail.com</a></p>
                    <p>Phone: +962778195623</p>
                    <p>Address: Aljubeiha, Amman, Jordan</p>
                </div>
                <div className={homestyle.footerCon}>
                    <h3>Main Nav</h3>
                    <ul className={homestyle.list}>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#abouto">About Us</a></li>
                        <li><a href="#serv">Services</a></li>
                    </ul>
                </div>
            </div>
            <div className={homestyle.bottombar}>
                <p>&copy;2025 JU Halls. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;