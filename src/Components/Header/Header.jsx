import React, { useRef, useState } from 'react';
import './Header.css';
import Logo from './img-vid/image 17.png';
import Video from './img-vid/coffee.mp4';


const Header = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const toggleVideo = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className='main'>
            <nav className="navbar">
                <div className="container">
                    <div className="navbar-container">
                        <ul className="navbar-list-left">
                            <li><a href="#Cards">Price</a></li>
                            <li><a href="#News">news & events</a></li>
                            <li><a href="#Cards">products</a></li>
                        </ul>
                        <img src={Logo} alt="Logo" className="navbar-logo" />
                        <ul className="navbar-list-right">
                            <li><a href="#">factory tours</a></li>
                            <li><a href="#">specificators & quality</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <header className="header">
                <div className="container">
                    <h1 className="header-title">
                        The best <span className="orange-text">Coffee</span> in <br />
                        your stunning world
                    </h1>
                    <p className="header-subtitle">Highland Tropico Coffee Company</p>
                    <div className="header-btns">
                        <button className="btn-shop">Shop Now</button>
                        <button className="btn-cta">CTA</button>
                    </div>
                </div>
            </header>

            <section className="video-section">
                <div className="video-wrapper-inner">
                    <div className="orange-glow"></div>
                    <div className="video-wrapper" onClick={toggleVideo}>
                        <video ref={videoRef} className="main-video" loop muted>
                            <source src={Video} type="video/mp4" />
                        </video>
                        {!isPlaying && (
                            <div className="play-button">
                                <div className="triangle"></div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Header;