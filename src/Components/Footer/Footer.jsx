import React from 'react'
import Logo from './img/image 117.png'
import './Footer.css'
import Logo1 from './img/01.png'
import Logo2 from './img/04.png'
import Logo3 from './img/05.png'
import Logo4 from './img/02.png'
import Logo5 from './img/03.png'
const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="container">
                    <div className="footer-container">
                        <div className="footer-left">
                            <ul className="footer-left-top">
                                <li className="footer-left-item">
                                    <a href="#Price" className="footer-left-link">price</a>
                                </li>
                                <li className="footer-left-item">
                                    <a href="#News" className="footer-left-link">News & events</a>
                                </li>
                                <li className="footer-left-item">
                                    <a href="#Price" className="footer-left-link">products</a>
                                </li>
                            </ul>
                            <ul className="footer-left-bottom">
                                <li className="footer-left-item">
                                    <a href="" className="footer-left-link">Factory Tours</a>
                                </li>   
                                <li className="footer-left-item">
                                    <a href="" className="footer-left-link">Specifications & Quality</a>
                                </li>
                            </ul>
                        </div>
                        <img className='footer-logo' src={Logo} alt="" />
                        <div className="footer-right">
                            <ul className="footer-right-top">
                                <img src={Logo1} alt="" className="footer-logos" />
                                <img src={Logo2} alt="" className="footer-logos" />
                            </ul>
                            <ul className="footer-right-bottom">
                                <img src={Logo3} alt="" className="footer-logos" />
                                <img src={Logo4} alt="" className="footer-logos" />
                                <img src={Logo5} alt="" className="footer-logos" />
                            </ul>
                        </div>
                    </div>
                    <p className="footer-text">© 2025 Highland Tropico Coffee Company. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer