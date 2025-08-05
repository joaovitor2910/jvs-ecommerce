import { Route, Routes } from "react-router-dom";
import Home from "../Containers/Home";
import Detalhes from "../Containers/Detalhes";
import CategoryProducts from "../Containers/CategoryProducts";
import Checkout from "../Containers/Checkout/checkout";

function Router() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detalhes/:id" element={<Detalhes />} />
        <Route path="/category/:id" element={<CategoryProducts />} />
        <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}

export default Router;
