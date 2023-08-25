import HeroSection from "../components/HeroSection.js";
import MainSection from "../components/MainSection.js";
import Footer from "../components/Footer.js";
import ScrollToTop from "../components/ScrollToTop.js";

function HomePage() {
    return(
        <>
            <ScrollToTop/>
            <HeroSection/>
            <MainSection/>
            <Footer/>
        </>
    );
}

export default HomePage;