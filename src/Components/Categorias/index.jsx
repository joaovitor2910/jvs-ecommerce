import { Link } from "react-router-dom"
import { useContext } from "react";
import { UserContext } from "../../contexts/globalContexts";

function Categorias() {
    const {category} = useContext(UserContext)
    return (
        <div className={ `w-full overflow-hidden p-[15px] text-emerald-800 font-['League_Spartan'] gap-[5px] flex flex-col bg-white relative top-[100px] shadow-lg rounded ${
          category ? 'opacity-100 max-h-[200px]' : 'opacity-0 max-h-0'} transition-all duration-300 ease-linear`}>
           <Link to={'/category/smartphones'}><p>Smartphones</p></Link>
           <Link to={'/category/tablets'}><p>Tablets</p></Link>
           <Link to={'/category/laptops'}><p>Laptops</p></Link>
           <Link to={'/category/mobile-accessories'}><p>Acessórios para Celular</p></Link>
           <Link to={'/category/mens-watches'}><p>Relógios</p></Link>
           <Link to={'/category/sports-accessories'}><p>Acessórios Esportivos</p></Link>
        </div>
    )
}

export default Categorias