import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage.js";
import ProductsPage from "./pages/ProductPage.js";
import ServicesPage from "./pages/ServicesPage.js";
import CakesPage from "./pages/CakesPage.js";
import ChocolatesPage from "./pages/ChocolatesPage.js";
import CookiesPage from "./pages/CookiesPage.js";
import PiesPage from "./pages/PiesPage.js";
import TartsPage from "./pages/TartsPage.js";
import OthersPage from "./pages/OthersPage.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<HomePage/>}/>
          <Route path="/products" exact element={<ProductsPage/>}/>
          <Route path="/services" exact element={<ServicesPage/>}/>
          <Route path="/cakes" exact element={<CakesPage/>}/>
          <Route path="/chocolates" exact element={<ChocolatesPage/>}/>
          <Route path="/cookies" exact element={<CookiesPage/>}/>
          <Route path="/pies" exact element={<PiesPage/>}/>
          <Route path="/tarts" exact element={<TartsPage/>}/>
          <Route path="/others" exact element={<OthersPage/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
