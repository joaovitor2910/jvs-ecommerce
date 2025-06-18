import { useContext } from "react";
import Logo from "../../assets/android-chrome-192x192.png";
import { UserContext } from "../../contexts/globalContexts";

function Header() {
  const {category, setCategory} = useContext(UserContext)
  return (
    <div className=" bg-[#F25C05] z-99 sticky top-0  text-white font w-full h-[80px] text-2xl flex ">
      <nav className="w-full">
        <ul className=" flex items-center select-none font-['League_Spartan'] justify-between p-4 h-full">
          <a href="/">
            <img className="w-[100px] h-[70px]" src={Logo} />
          </a>
          <li className="cursor-pointer  transition">Ofertas</li>
          <li className="cursor-pointer transition" onClick={() => setCategory(!category)}><p>Categorias</p></li>
          <input
            border
            placeholder="Pesquise..."
            className="border-gray-100 bg-white outline-0 p-2 rounded-md border-1 w-[400px] h-[50px] text-lg text-black"
            type="text"
          />
          <li className="cursor-pointer ">Contato</li>
          <li className="cursor-pointer ">Carrinho</li>
          <li className="cursor-pointer ">Login</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
