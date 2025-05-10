import { Route, Routes } from "react-router-dom";
import Home from "../Containers/Home";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    )
}

export default Router