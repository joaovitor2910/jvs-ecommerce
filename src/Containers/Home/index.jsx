import Header from "../../Components/Header"
import Footer from "../../Components/Footer"
import Cards from "../../Components/Cards"
import Slider from "../../Components/Slider"
import { MenuCategorias } from "../../Components/Categorias"


function Home() {
   
    return (
        <div className="w-full h-full bg-gray-100"  >
        <Header />
        <Slider />
        <MenuCategorias />
        <Cards />
        <Footer />
        </div>
        )
}

export default Home