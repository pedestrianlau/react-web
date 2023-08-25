import "./Services.css";
import retail from "../assets/retail.png";
import custom from "../assets/clipboard.png";
import supply from "../assets/supply.png";
import catering from "../assets/catering.png";

function Services () {
    return (
        <>
            <div className="services-page-container">
                <div className="services-container">
                    <div className="services-card-container">
                        <h1>Retail</h1>
                        <div className="services-image-container">
                            <img className="image-cover" src={retail} alt=""/>
                        </div>
                        <p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum....
                        </p>
                    </div>
                    <div className="services-card-container">
                        <h1>Custom Orders</h1>
                        <div className="services-image-container">
                            <img className="image-cover" src={custom} alt=""/>
                        </div>
                        <p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum....
                        </p>
                    </div>
                    <div className="services-card-container">
                        <h1>Wholesale Supply</h1>
                        <div className="services-image-container">
                            <img className="image-cover" src={supply} alt=""/>
                        </div>
                        <p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum....
                        </p>
                    </div>
                    <div className="services-card-container">
                        <h1>Catering</h1>
                        <div className="services-image-container">
                            <img className="image-cover" src={catering} alt=""/>
                        </div>
                        <p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum....
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services;