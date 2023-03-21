import React, { Fragment } from 'react'
import "../styles/style.css";
import cartImg from "../images/cart-image.png";

function Header() {
  return (
    <Fragment>
      <section classNameName="header">
        <header className="headerDetails">

          <section className="headerLeft">
            <div className="logo">
              <span className="logoP1">blink</span>
              <span className="logoP2">it</span>
            </div>
            <div className="deliveryDetails">
              <label for="delivery area">Delivery in 10 minutes</label>
              <select name="deliveryArea" className="deliveryArea">
                <option value="delhi">Delhi, India</option>
                <option value="bangalore">Bangalore, India</option>
                <option value="mumbai">Mumbai, India</option>
                <option value="ahmedabad">Ahmedabad, India</option>
              </select>
            </div>
          </section>

          <section className="headerRight">
            <button className="loginButton">Login</button>
            <button id="myCartButton">
              <img className="cartImage" src={cartImg} />
              <strong className="myCart">My Cart</strong>
            </button>
          </section>
        </header>
      </section>
    </Fragment>
  )
}

export default Header