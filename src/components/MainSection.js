import React from "react";
import "./MainSection.css";
import pie from "../assets/pie.jpg";
import baklava from "../assets/baklava.jpg";
import cake from "../assets/cake.jpg";
import eclair from "../assets/eclair.jpg";
import eclair2 from "../assets/eclair2.jpg";
import cookies from "../assets/cookies.jpg";
import madeleines from "../assets/madeleines.jpg";
import choco from "../assets/choco.jpg";
import apple from "../assets/apple_jelly.jpg";
import cookies2 from "../assets/cookies2.jpg";
import fruit from "../assets/fruit_tart.jpg";
import fruit2 from "../assets/fruit_tart2.jpg";
import bear from "../assets/bear.png";
import { Link } from "react-router-dom";

function MainSection() {
    return(
        <>
        <div className="main-container">
            <div className="card-container">
                <div className="card-1">    
                    <img class="image-cover" src={baklava} alt=""></img>
                </div>
                <div className="card-2">
                    <img class="image-cover" src={cake} alt=""></img>
                </div>
                <div className="card-3">
                    <img class="image-cover" src={eclair} alt=""></img>
                </div>
                <div className="card-4">
                    <img class="image-cover" src={cookies} alt=""></img>
                </div>
                <div className="card-5">
                    <img class="image-cover" src={pie} alt=""></img>
                </div>
                <div className="card-6">
                    <img class="image-cover" src={madeleines} alt=""></img>
                </div>
                <div className="card-7">
                    <img class="image-cover" src={choco} alt=""></img>
                </div>
                <div className="card-8">
                    <img class="image-cover" src={apple} alt=""></img>
                </div>
                <div className="card-9">
                    <img class="image-cover" src={eclair2} alt=""></img>
                </div>
                <div className="card-10">
                    <img class="image-cover" src={cookies2} alt=""></img>
                </div>
                <div className="card-11">
                    <img class="image-cover" src={fruit} alt=""></img>
                </div>
                <div className="card-12">
                    <img class="image-cover" src={fruit2} alt=""></img>
                </div>
                <div className="card-13">
                    <img class="image" src={bear} alt=""></img>
                </div>
                <Link to="/products" className="button">See all products</Link>
            </div>
        </div>
        </>
    );
}

export default MainSection;