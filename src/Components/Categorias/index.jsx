import { Link } from "react-router-dom"
import { useContext } from "react";
import { UserContext } from "../../contexts/globalContexts";

export function MenuCategorias() {
    const {category} = useContext(UserContext)
    return (
        <div className={`
          fixed top-20 z-999 left-0 w-full bg-white rounded shadow-lg
          overflow-hidden flex flex-col font-['League_Spartan'] text-xl gap-1 p-3
          ${category ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}
        `}>
           <Link className="hover:bg-gray-200 p-1.5" to={'/category/smartphones'}><p>Smartphones</p></Link>
           <Link className="hover:bg-gray-200 p-1.5" to={'/category/tablets'}><p>Tablets</p></Link>
           <Link className="hover:bg-gray-200 p-1.5" to={'/category/laptops'}><p>Laptops</p></Link>
           <Link className="hover:bg-gray-200 p-1.5" to={'/category/mobile-accessories'}><p>Acessórios para Celular</p></Link>
           <Link className="hover:bg-gray-200 p-1.5" to={'/category/mens-watches'}><p>Relógios</p></Link>
           <Link className="hover:bg-gray-200 p-1.5" to={'/category/sports-accessories'}><p>Acessórios Esportivos</p></Link>
        </div>
    )
}

export function Categorias() {
    return (
        <div className="w-[100%] flex justify-center ">
           <div className="w-full flex font-['League_Spartan justify-evenly">
           <Link className="bg-gray-800 text-white font-semibold hover:opacity-[0.9] text-xl px-4 py-2 rounded-md" to={'/category/smartphones'}><p>Smartphones</p></Link>
           <Link className="bg-gray-800 text-white font-semibold hover:opacity-[0.9] text-xl px-4 py-2 rounded-md" to={'/category/tablets'}><p>Tablets</p></Link>
           <Link className="bg-gray-800 text-white font-semibold hover:opacity-[0.9] text-xl px-4 py-2 rounded-md" to={'/category/laptops'}><p>Laptops</p></Link>
           <Link className="bg-gray-800 text-white font-semibold hover:opacity-[0.9] text-xl px-4 py-2 rounded-md" to={'/category/mobile-accessories'}><p>Acessórios para Celular</p></Link>
           <Link className="bg-gray-800 text-white font-semibold hover:opacity-[0.9] text-xl px-4 py-2 rounded-md" to={'/category/mens-watches'}><p>Relógios</p></Link>
           <Link className="bg-gray-800  text-white font-semibold hover:opacity-[0.9] text-xl px-4 py-2 rounded-md" to={'/category/sports-accessories'}><p>Acessórios Esportivos</p></Link>
           </div>
        </div>
    )
}