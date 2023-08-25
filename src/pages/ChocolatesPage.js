import Chocolates from "../components/Chocolates.js";
import Footer from "../components/Footer.js";
import SideNav from "../components/SideNav.js"
import ScrollToTop from "../components/ScrollToTop";

function ChocolatesPage() {
    return (
        <>
            <ScrollToTop/>
            <SideNav/>
            <Chocolates/>
            <Footer/>
        </>
    )
}

export default ChocolatesPage;