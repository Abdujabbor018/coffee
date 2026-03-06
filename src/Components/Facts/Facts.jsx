import React, { useState } from 'react'; // useState qo'shildi
import axios from 'axios'; // axios import qilindi
import './Facts.css';
import Arrow from './img/btn-arrow.png';
import Img1 from './img/img.png';
import Img2 from './img/img2.png';
import Img3 from './img/img3.png';

const Facts = () => {
    // 1. State va Funksiyalar komponent ichida bo'lishi shart
    const [email, setEmail] = useState("");

    const sendMessage = (e) => {
        e.preventDefault();

        const token = "8586580877:AAEazv2Y3aPuc9jNS6_ApbFDYgWfpiFf23k";
        const chat_id = 5258999486; 
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        const text = `📧 Yangi obunachi: ${email}`;

        axios.post(url, {
            chat_id: chat_id,
            text: text
        }).then(() => {
            alert("Muvaffaqiyatli obuna bo'ldingiz! ✅");
            setEmail(""); 
        }).catch((err) => {
            console.error(err);
            alert("Xatolik yuz berdi. Konsolni tekshiring.");
        });
    };

    return (
        <div className="facts">
            <div className="container">
                <div className="facts-container">
                    <div className="facts-top">
                        <h1 className="facts-text">
                            Coffee Insights: Exploring the <br /> World of Specialty Coffee
                        </h1>
                        <a href="#"><img src={Arrow} alt="Arrow" /></a>
                    </div>

                    <div className="facts-cards">
                        <div className="facts-card">
                            <img src={Img1} alt="Fact 1" />
                            <h3 className="facts-card-info">
                                Hygge Vibes <br /> Weak demand from China...
                            </h3>
                        </div>
                        <div className="facts-card">
                            <img src={Img2} alt="Fact 2" />
                            <h3 className="facts-card-info">
                                By GC Libraries <br />
                                Exports to China - Vietnam's...
                            </h3>
                        </div>
                        <div className="facts-card">
                            <img src={Img3} alt="Fact 3" />
                            <h3 className="facts-card-info">
                                Coffee <br />
                                Decreased by 95.8%, reaching...
                            </h3>
                        </div>
                    </div>

                    <div className="facts-bottom">

                            <h2 className="facts-text">Subscribe on our updates</h2>
                            <form className="subscribe-box" onSubmit={sendMessage}>
                                <input
                                    type="email"
                                    placeholder="Your email here"
                                    className="subscribe-input"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <button type="submit" className="subscribe-button">Sign up</button>
                            </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Facts;