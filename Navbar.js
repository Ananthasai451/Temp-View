import React from 'react'
import "./Navbar.css";

function Navbar() {
    return (
        <div className="Navbar">
            <div className="Lefthead">
                <div className="Appname">
                    <h3>
                        Med Store
                    </h3>
                </div>
                <div className="Options">
                    <div>
                        <p>Home</p>
                    </div>
                    <div>
                        <p>Cart</p>
                    </div>
                    <div>
                        <p>My Order</p>
                    </div>
                </div>
            </div>
            <div className="Logout">
                <div>
                    <p>Logout</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar
