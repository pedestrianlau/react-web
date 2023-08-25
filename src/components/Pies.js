import pie from "../assets/pie.jpg";
import star from "../assets/star.png";

function Pies() {
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
                </div>
            </div>
        </>
    )
}

export default Pies;