import Products from "../components/Products.js";
import Footer from "../components/Footer.js";
import SideNav from "../components/SideNav.js";
import ScrollToTop from "../components/ScrollToTop.js";

function ProductsPage() {
    return (
        <>
            <ScrollToTop/>
            <SideNav/>
            <Products/>
            <Footer/>
        </>
    )
}

export default ProductsPage;