import Pies from "../components/Pies.js";
import Footer from "../components/Footer.js";
import SideNav from "../components/SideNav.js"
import ScrollToTop from "../components/ScrollToTop";

function PiesPage() {
    return (
        <>
            <ScrollToTop/>
            <SideNav/>
            <Pies/>
            <Footer/>
        </>
    )
}

export default PiesPage;