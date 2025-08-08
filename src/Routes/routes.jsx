import { Route, Routes } from "react-router-dom";
import Home from "../Containers/Home";
import Detalhes from "../Containers/Detalhes";
import CategoryProducts from "../Containers/CategoryProducts";
import Checkout from "../Containers/Checkout/checkout";
import UserInfo from "../Components/userInfo";
import Search from "../Containers/Search";

function Router() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detalhes/:id" element={<Detalhes />} />
        <Route path="/category/:id" element={<CategoryProducts />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/user-info/:id" element={<UserInfo />} />
        <Route path="/search" element={<Search />} />
    </Routes>
  );
}

export default Router;
