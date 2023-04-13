import React, { Fragment } from 'react'
import "../styles/style.css";

function NavigationBar() {
    return (
            <section className="navigationBar">
                <div className="navDetails">
                    <button className="navButtons">Vegetables & Fruits</button>
                    <button className="navButtons">Dairy & Breakfast</button>
                    <button className="navButtons">Munchies</button>
                    <button className="navButtons">Cold Drinks & Juices</button>
                    <button className="navButtons">Instant & Frozen Food</button>
                    <button className="navButtons">Tea, Coffee & Health Drinks</button>
                    <button className="navButtons">Bakery & Biscuits</button>

                    <label htmlFor="moreTypesOfProducts"></label>
                    <select className="navButtons" name="moreTypesOfProducts" id="moreTypesOfProducts">
                        <option value="more">More</option>
                        <option value="a">A</option>
                        <option value="b">B</option>
                        <option value="c">C</option>
                    </select>
                </div>
            </section>
    )
}

export default NavigationBar