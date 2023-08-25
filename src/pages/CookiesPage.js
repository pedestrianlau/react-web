import Cookies from "../components/Cookies";
import Footer from "../components/Footer.js";
import SideNav from "../components/SideNav.js"
import ScrollToTop from "../components/ScrollToTop";

function CookiesPage() {
    return (
        <>
            <ScrollToTop/>
            <SideNav/>
            <Cookies/>
            <Footer/>
        </>
    )
}

export default CookiesPage;