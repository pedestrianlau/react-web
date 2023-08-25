import baklava from "../assets/baklava.jpg";
import eclair from "../assets/eclair2.jpg";
import applejelly from "../assets/apple_jelly.jpg";
import star from "../assets/star.png";

function Others() {
    return (
        <>
            <div className="product-container">
                <div className="content-container">
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
                        <img className="product-image-cover" src={eclair} alt=""></img>
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
                        <img className="product-image-cover" src={applejelly} alt=""></img>
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
                </div>
            </div>
        </>
    )
}

export default Others;