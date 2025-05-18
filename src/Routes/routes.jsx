import { Route, Routes } from "react-router-dom";
import Home from "../Containers/Home";
import Detalhes from "../Containers/Detalhes";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detalhes/:id" element={<Detalhes />} />
            <Route path="/category/smartphones" element={<Home />} />
            <Route path="/category/tablets" element={<Home />} />
            <Route path="/category/laptops" element={<Home />} />
            <Route path="/category/mobile-accessories" element={<Home />} />
            <Route path="/category/sports-accessories" element={<Home />} />
            <Route path="/category/mens-watches" element={<Home />} />
            <Route path="/category/womens-watches" element={<Home />} />
        </Routes>
    )
}

export default Router