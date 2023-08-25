import cake from "../assets/cake.jpg";
import cheesecake from "../assets/raspberrycheesecake.jpg";
import chococake from "../assets/chococake.jpg";
import star from "../assets/star.png";

function Cakes() {
    return (
        <>
            <div className="product-container">
                <div className="content-container">
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
                        <img className="product-image-cover" src={chococake} alt=""></img>
                        <h1 className="product-header">Choco Cake</h1>
                        <div className="product-description">
                            <p className="product-price">50.00AUD</p>
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

export default Cakes;