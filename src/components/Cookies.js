import chococookie from "../assets/choco.jpg";
import cookie from "../assets/cookies.jpg";
import star from "../assets/star.png";

function Cookies() {
    return (
        <>
            <div className="product-container">
                <div className="content-container">
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
                        <img className="product-image-cover" src={cookie} alt=""></img>
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
                </div>
            </div>
        </>
    )
}

export default Cookies;