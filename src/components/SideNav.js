import React from "react";
import "./SideNav.css";
import { Link } from "react-router-dom";

function SideNav() {
    return (
        <>
            <div className="side-nav">
                <div className="margin2"/>
                <Link to="/products" className="side-nav-segments"> 
                    <div className="product-text">All</div>   
                </Link>
                <Link to="/cakes" className="side-nav-segments">
                    <div className="product-text">Cakes</div> 
                </Link>
                <Link to="/chocolates" className="side-nav-segments">
                    <div className="product-text">Chocolates</div> 
                </Link>
                <Link to="/cookies" className="side-nav-segments">
                    <div className="product-text">Cookies</div> 
                </Link>
                <Link to="/pies" className="side-nav-segments">
                    <div className="product-text">Pies</div> 
                </Link>
                <Link to="/tarts" className="side-nav-segments">
                    <div className="product-text">Tarts</div> 
                </Link>
                <Link to="/others" className="side-nav-segments">
                    <div className="product-text">Others</div> 
                </Link>
            </div>
        </>
    )
}

export default SideNav;