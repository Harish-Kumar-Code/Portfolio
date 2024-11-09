import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h4>Harish Kumar</h4>
                    <p>Passionate developer skilled in building responsive, stylish web applications.</p>
                </div>
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/skills">Skills</a></li>
                        <li><a href="/Expertise">Expertise</a></li>
                        <li><a href="/Projects">Projects</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Follow Me</h4>
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/harishkumardiwatch" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>
                        <a href="https://github.com/Harish-Kumar-Code" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} size="2x" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; Harish-Kumar</p>
            </div>
        </footer>
    );
}

export default Footer;
