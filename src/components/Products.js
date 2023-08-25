import React from "react";
import "./Products.css";
import pie from "../assets/pie.jpg";
import baklava from "../assets/baklava.jpg";
import cake from "../assets/cake.jpg";
import eclair2 from "../assets/eclair2.jpg";
import cookies from "../assets/cookies.jpg";
import madeleines from "../assets/madeleines.jpg";
import chococookie from "../assets/choco.jpg";
import apple from "../assets/apple_jelly.jpg";
import cookies2 from "../assets/cookies2.jpg";
import fruit from "../assets/fruit_tart.jpg";
/*import cakee from "../assets/cakee.png";*/
import star from "../assets/star.png"
import cheesecake from "../assets/raspberrycheesecake.jpg";
import logs from "../assets/Choco_Logs.jpg";

function Products() {
    return (
        <>
            <div className="product-container">
                <div className="content-container">
                <div className="card-container-product">
                    <div className="image-container">
                        <img className="product-image-cover" src={pie} alt=""></img>
                        <h1 className="product-header">Cherry Pie</h1>
                        <div className="product-description">
                            <p className="product-price">20.00AUD</p>
                            <img className="product-star" src={star} alt=""></img>
                            <img className="product-star" src={star} alt=""></img>
                            <img className="product-star" src={star} alt=""></img>
                            <img className="product-star" src={star} alt=""></img>
                        </div>
                    </div>
                </div>
                <div className="card-container-product">
                    <div className="image-container">
                        <img className="product-image-cover" src={baklava} alt=""></img>
                        <h1 className="product-header">Baklava</h1>
                        <div className="product-description">
                            <p className="product-price">25.00AUD</p>
                            <img className="product-star" src={star} alt=""></img>
                            <img className="product-star" src={star} alt=""></img>
                            <img className="product-star" src={star} alt=""></img>
                            <img className="product-star" src={star} alt=""></img>
                            <img className="product-star" src={star} alt=""></img>
                        </div>
                    </div>
                </div>
                <div className="card-container-product">
                    <div className="image-container">
                        <img className="product-image-cover" src={cake} alt=""></img>
                        <h1 className="product-header">Sponge Cake</h1>
                        <div className="product-description">
                            <p className="product-price">50.00AUD</p>
                            <img className="product-star" src={star} alt=""></img>
                            <img className="product-star" src={star} alt=""></img>
                            <img className="product-star" src={star} alt=""></img>
                            <img className="product-star" src={star} alt=""></img>
                        </div>
                    </div>
                </div>
                <div className="card-container-product">
                    <div className="image-container">
                        <img className="product-image-cover" src={eclair2} alt=""></img>
                        <h1 className="product-header">Éclair</h1>
                        <div className="product-description">
                            <p className="product-price">5.00AUD/pc</p>
                            <img className="product-star" src={star} alt=""></img>
                            <img className="product-star" src={star} alt=""></img>
                            <img className="product-star" src={star} alt=""></img>
                        </div>
                    </div>
                </div>
                <div className="card-container-product">
                    <div className="image-container">
                        <img className="product-image-cover" src={cookies} alt=""></img>
                        <h1 className="product-header">Cookies</h1>
                        <div className="product-description">
                            <p className="product-price">3.00AUD/pc</p>
                            <img className="product-star" src={star} alt=""></img>
                            <img className="product-star" src={star} alt=""></img>
                            <img className="product-star" src={star} alt=""></img>
                            <img className="product-star" src={star} alt=""></img>
                        </div>
                    </div>
                </div>
                <div className="card-container-product">
                    <div className="image-container">
                        <img className="product-image-cover" src={madeleines} alt=""></img>
                        <h1 className="product-header">Madeleines</h1>
                        <div className="product-description">
                            <p className="product-price">5.00AUD/pc</p>
                            <img className="product-star" src={star} alt=""></img>
                            <img className="product-star" src={star} alt=""></img>
                            <img className="product-star" src={star} alt=""></img>
                        </div>
                    </div>
                </div>
                <div className="card-container-product">
                    <div className="image-container">
                        <img className="product-image-cover" src={fruit} alt=""></img>
                        <h1 className="product-header">Fruit Tart</h1>
                        <div className="product-description">
                            <p className="product-price">30.00AUD</p>
                            <img className="product-star" src={star} alt=""></img>
                            <img className="product-star" src={star} alt=""></img>
                            <img className="product-star" src={star} alt=""></img>
                            <img className="product-star" src={star} alt=""></img>
                        </div>
                    </div>
                </div>
                <div className="card-container-product">
                    <div className="image-container">
                        <img className="product-image-cover" src={chococookie} alt=""></img>
                        <h1 className="product-header">Choco Cookie</h1>
                        <div className="product-description">
                            <p className="product-price">5.00AUD/pc</p>
                            <img className="product-star" src={star} alt=""></img>
                            <img className="product-star" src={star} alt=""></img>
                            <img className="product-star" src={star} alt=""></img>
                            <img className="product-star" src={star} alt=""></img>
                            <img className="product-star" src={star} alt=""></img>
                        </div>
                    </div>
                </div>
                <div className="card-container-product">
                    <div className="image-container">
                        <img className="product-image-cover" src={cookies2} alt=""></img>
                        <h1 className="product-header">Cookies</h1>
                        <div className="product-description">
                            <p className="product-price">5.00AUD/pc</p>
                            <img className="product-star" src={star} alt=""></img>
                            <img className="product-star" src={star} alt=""></img>
                            <img className="product-star" src={star} alt=""></img>
                            <img className="product-star" src={star} alt=""></img>
                        </div>
                    </div>
                </div>
                <div className="card-container-product">
                    <div className="image-container">
                        <img className="product-image-cover" src={apple} alt=""></img>
                        <h1 className="product-header">Apple Jelly</h1>
                        <div className="product-description">
                            <p className="product-price">30.00AUD</p>
                            <img className="product-star" src={star} alt=""></img>
                            <img className="product-star" src={star} alt=""></img>
                            <img className="product-star" src={star} alt=""></img>
                            <img className="product-star" src={star} alt=""></img>
                            <img className="product-star" src={star} alt=""></img>
                        </div>
                    </div>
                </div>
                <div className="card-container-product">
                    <div className="image-container">
                        <img className="product-image-cover" src={cheesecake} alt=""></img>
                        <h1 className="product-header">Cheesecake</h1>
                        <div className="product-description">
                            <p className="product-price">20.00AUD</p>
                            <img className="product-star" src={star} alt=""></img>
                            <img className="product-star" src={star} alt=""></img>
                            <img className="product-star" src={star} alt=""></img>
                            <img className="product-star" src={star} alt=""></img>
                            <img className="product-star" src={star} alt=""></img>
                        </div>
                    </div>
                </div>
                <div className="card-container-product">
                    <div className="image-container">
                        <img className="product-image-cover" src={logs} alt=""></img>
                        <h1 className="product-header">Choco Logs</h1>
                        <div className="product-description">
                            <p className="product-price">5.00AUD/pc</p>
                            <img className="product-star" src={star} alt=""></img>
                            <img className="product-star" src={star} alt=""></img>
                            <img className="product-star" src={star} alt=""></img>
                            <img className="product-star" src={star} alt=""></img>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Products;