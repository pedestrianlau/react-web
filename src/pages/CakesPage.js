import Cakes from "../components/Cakes.js";
import Footer from "../components/Footer.js";
import SideNav from "../components/SideNav.js"
import ScrollToTop from "../components/ScrollToTop";

function CakesPage() {
    return (
        <>
            <ScrollToTop/>
            <SideNav/>
            <Cakes/>
            <Footer/>
        </>
    )
}

export default CakesPage;