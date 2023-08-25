import tart from "../assets/fruit_tart.jpg";
import star from "../assets/star.png";

function Tarts() {
   return (
    <>
         <div className="product-container">
                <div className="content-container">
                <div className="card-container-product">
                    <div className="image-container">
                        <img className="product-image-cover" src={tart} alt=""></img>
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
                </div>
            </div>
    </>
   ) 
}

export default Tarts;