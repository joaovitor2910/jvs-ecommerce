import { useContext } from "react";
import Logo from "../../assets/JVStore.png";
import { UserContext } from "../../contexts/globalContexts";

function Header() {
  const {category, setCategory} = useContext(UserContext)
  return (
    <div className=" bg-emerald-500 z-99 fixed top-0  text-white font w-full h-[100px] text-2xl flex ">
      <nav className="w-full">
        <ul className=" flex items-center select-none font-['League_Spartan'] justify-between p-4 h-full">
          <a href="/">
            <img className="h-full" src={Logo} />
          </a>
          <li className="cursor-pointer">Ofertas</li>
          <li className="cursor-pointer" onClick={() => setCategory(!category)}><p>Categorias</p></li>
          <input
            border
            placeholder="Pesquise..."
            className="border-gray-100 text-white bg-white outline-0 p-2 rounded-md border-1 w-80 h-10 text-base placeholder: text-emerald-500 "
            type="text"
          />
          <li className="cursor-pointer">Contato</li>
          <li className="cursor-pointer">Carrinho</li>
          <li className="cursor-pointer">Login</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
