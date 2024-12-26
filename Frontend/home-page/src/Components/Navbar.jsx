import React from 'react'
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <div className="row header">
                <div className="col-md-6 lft">
                    <i className="ri-home-8-line"></i>
                    <ul >
                        <li className="li">Home</li>
                        <li className="li">Product</li>
                        <li className="li">About-Us</li>
                        <li className="li">Contact</li>
                    </ul>
                </div>
                <div className="col-md-6 rgt"></div>
            </div>
        </div>
    )
}

export default Navbar
