import React from 'react';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>About Us</h4>
                    <p>
                        Refelx Pvt Ltd provides quality solutions for your business needs.
                    </p>
                </div>
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        <a>Facebook</a>
                        <a>Twitter</a>
                        <a>LinkedIn</a>
                    </div>
                </div>
            </div>
           
        </footer>
    );
};

export default Footer;

