import React from 'react'
import Bag from './img/coffee-bag-mockup 6.png'
import MoneyPng from './img/Money.png'
import './Cards.css'

const Cards = () => {
  return (
   
    <div className="slider" id='Cards'>
      <div className="container">

      
      <div className="slide-track">

        <div className="card">
          <img src={Bag} alt="" className="card-img" />
          <div className="underline"></div>
          <h2 className="card-name">Đắk Lắk</h2>
          <p className="card-info">
            Colombian Supremo is the most popular <br /> Arabica coffee, accounting for 30% of all <br /> Arabica coffee sales worldwide.
          </p>
          <h4 className="card-price">103,000 đ/kg</h4>
          <button className="card-button"><img src={MoneyPng} alt="" />Shop Now</button>
        </div>

        <div className="card">
          <img src={Bag} alt="" className="card-img" />
          <div className="underline"></div>
          <h2 className="card-name">Lâm Đồng</h2>
          <p className="card-info">
            Colombian Supremo is the most popular <br /> Arabica coffee, accounting for 30% of all <br /> Arabica coffee sales worldwide.
          </p>
          <h4 className="card-price">102,300 đ/kg</h4>
          <button className="card-button"><img src={MoneyPng} alt="" />Shop Now</button>
        </div>

        <div className="card">
          <img src={Bag} alt="" className="card-img" />
          <div className="underline"></div>
          <h2 className="card-name">Gia Lai</h2>
          <p className="card-info">
            Colombian Supremo is the most popular <br /> Arabica coffee, accounting for 30% of all <br /> Arabica coffee sales worldwide.
          </p>
          <h4 className="card-price">102,500 đ/kg</h4>
          <button className="card-button"><img src={MoneyPng} alt="" />Shop Now</button>
        </div>

        <div className="card">
          <img src={Bag} alt="" className="card-img" />
          <div className="underline"></div>
          <h2 className="card-name">Đắk Nông</h2>
          <p className="card-info">
            Colombian Supremo is the most popular <br /> Arabica coffee, accounting for 30% of all <br /> Arabica coffee sales worldwide.
          </p>
          <h4 className="card-price">103,000 đ/kg</h4>
          <button className="card-button"><img src={MoneyPng} alt="" />Shop Now</button>
        </div>

        <div className="card">
          <img src={Bag} alt="" className="card-img" />
          <div className="underline"></div>
          <h2 className="card-name">Đắk Lắk</h2>
          <p className="card-info">
            Colombian Supremo is the most popular <br /> Arabica coffee, accounting for 30% of all <br /> Arabica coffee sales worldwide.
          </p>
          <h4 className="card-price">103,000 đ/kg</h4>
          <button className="card-button"><img src={MoneyPng} alt="" />Shop Now</button>
        </div>

        <div className="card">
          <img src={Bag} alt="" className="card-img" />
          <div className="underline"></div>
          <h2 className="card-name">Lâm Đồng</h2>
          <p className="card-info">
            Colombian Supremo is the most popular <br /> Arabica coffee, accounting for 30% of all <br /> Arabica coffee sales worldwide.
          </p>
          <h4 className="card-price">102,300 đ/kg</h4>
          <button className="card-button"><img src={MoneyPng} alt="" />Shop Now</button>
        </div>

        <div className="card">
          <img src={Bag} alt="" className="card-img" />
          <div className="underline"></div>
          <h2 className="card-name">Gia Lai</h2>
          <p className="card-info">
            Colombian Supremo is the most popular <br /> Arabica coffee, accounting for 30% of all <br /> Arabica coffee sales worldwide.
          </p>
          <h4 className="card-price">102,500 đ/kg</h4>
          <button className="card-button"><img src={MoneyPng} alt="" />Shop Now</button>
        </div>

        <div className="card">
          <img src={Bag} alt="" className="card-img" />
          <div className="underline"></div>
          <h2 className="card-name">Đắk Nông</h2>
          <p className="card-info">
            Colombian Supremo is the most popular <br /> Arabica coffee, accounting for 30% of all <br /> Arabica coffee sales worldwide.
          </p>
          <h4 className="card-price">103,000 đ/kg</h4>
          <button className="card-button"><img src={MoneyPng} alt="" />Shop Now</button>
        </div>
      </div>
      
    </div>
</div>
  )
}

export default Cards