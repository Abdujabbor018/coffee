import React from 'react'
import CircleText from './img/circled-text.png'
import './News.css'
import Img1 from './img/img1.png'
import Img2 from './img/img2.png'
import Money from './img/Money.png'
import CircleTextBlack from './img/circled-text-balck.png'
const News = () => {
    return (
        <div>
            <div className="news" id='News'>
                <div className="container">
                    <div className="news-container">
                        <div className="news-top">
                            <h1 className="news-entering">
                                Experience the Complex and <br /> <span className="orange-text">Delicious</span> Tastes of Two <br /> Exceptional <span className="orange-text">Arabica</span> Coffees
                            </h1>
                            <img className='circle-text' src={CircleText} alt="" />
                        </div>
                        <div className="news-card">
                            <img src={Img1} alt="" />
                            <div className="news-card-text">
                                <p className="news-info">
                                    Dakak September 2nd Import-Export Company Limited (Simexco Daklak), a state-owned <br /> company, is recognized as one of the leading Vietnam coffee exporters while Vietnam is <br /> the world’s largest Robusta producer. Founded in 1993, Simexco Dakak has bult up a <br /> dynamic purchasing network directly from the farm gates and plantations: has also <br /> invested in modern coffee processing factories. staft training and quality control systems <br /> in key coffee growing areas of Vietnam.
                                </p>
                                <p className="news-info">
                                    Weak demand from China caused pepper price to stumble. Exports to China - Vietnam's <br /> largest pep-per consumption market last year - decreased by 95.8%, reaching
                                </p>
                                <button className="news-button">
                                    <img src={Money} alt="" />
                                    Shop Now
                                </button>
                            </div>
                        </div>
                        <div className="news-card second">
                            <div className="news-card-text second-texts">
                                <p className="news-info">
                                    Dakak September 2nd Import-Export Company Limited (Simexco Daklak), a state-owned <br /> company, is recognized as one of the leading Vietnam coffee exporters while Vietnam is <br /> the world’s largest Robusta producer. Founded in 1993, Simexco Dakak has bult up a <br /> dynamic purchasing network directly from the farm gates and plantations: has also <br /> invested in modern coffee processing factories. staft training and quality control systems <br /> in key coffee growing areas of Vietnam.
                                </p>
                                <p className="news-info">
                                    Weak demand from China caused pepper price to stumble. Exports to China - Vietnam's <br /> largest pep-per consumption market last year - decreased by 95.8%, reaching
                                </p>
                                <button className="news-button">
                                    <img src={Money} alt="" />
                                    Shop Now
                                </button>
                            </div>
                            <img src={Img2} alt="" className='second-card-img'/>

                        </div>
                        <img className='circled-text-black' src={CircleTextBlack} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News