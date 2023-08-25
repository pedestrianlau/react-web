import star from "../assets/star.png";
import chocologs from "../assets/Choco_Logs.jpg";
import choco from "../assets/assortedchoco.jpg";

function Chocolates() {
    return (
        <>
            <div className="product-container">
                <div className="content-container">
                <div className="card-container-product">
                    <div className="image-container">
                        <img className="product-image-cover" src={chocologs} alt=""></img>
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
                <div className="card-container-product">
                    <div className="image-container">
                        <img className="product-image-cover" src={choco} alt=""></img>
                        <h1 className="product-header">Chocolates</h1>
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
                </div>
            </div>
        </>
    )
}

export default Chocolates;