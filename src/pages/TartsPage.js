import Tarts from "../components/Tarts";
import Footer from "../components/Footer.js";
import SideNav from "../components/SideNav.js"
import ScrollToTop from "../components/ScrollToTop";

function TartsPage() {
    return (
        <>
            <ScrollToTop/>
            <SideNav/>
            <Tarts/>
            <Footer/>
        </>
    )
}

export default TartsPage;