import { useContext } from "react";
import Logo from "../../assets/android-chrome-192x192.png";
import { UserContext } from "../../contexts/globalContexts";
import Hamburger from '../../assets/more.png'
import Profile from '../../assets/account.png'
import Search from '../../assets/search.png'
import { useNavigate } from "react-router-dom";

function Header() {
  const {category, setCategory, menu, setMenu} = useContext(UserContext)
  const navigate = useNavigate()
  return (
    <div className=" bg-white z-99 sticky top-0 font w-full h-[80px] text-2xl flex ">
      <nav className="w-full">
        <ul className=" flex items-center select-none font-['Montserrat'] text-xl font-medium justify-between p-4 h-full">
          <img  onClick={() => navigate('/')} className="w-[70px] h-[70px] cursor-pointer" src={Logo} />
          <li className="cursor-pointer transition" onClick={() => setCategory(!category)}><p>Categorias</p></li>
          <div className="flex w-[450px] bg-gray-200 rounded-4xl items-center">
          <input
            border
            placeholder="Pesquise..."
            className="bg-gray-200 rounded-4xl outline-0 p-2 w-[90%] h-[50px] text-xl"
            type="text"
            />
            <img src={Search} alt="lupa" className="w-6 h-6 m-2 cursor-pointer" />
            </div>
          <div className="flex gap-6">
            <li className="cursor-pointer" onClick={() => navigate('/')}>Home</li>
          <li className="cursor-pointer">Carrinho</li>
          <li className="cursor-pointer w-7"><img src={Profile} alt="" /></li>
          <li className="cursor-pointer w-7" onClick={() => setMenu(!menu)}><img src={Hamburger} alt="" /></li>
          </div>
        </ul>
      </nav>
      <div 
      className={`bg-gray-800 text-white  rounded-md font-medium text-lg w-50 h-[80px] fixed top-20 right-0 ${menu ? 'block' : 'hidden'}`}>
        <p className="cursor-pointer m-2">Contato</p>
        <p className="cursor-pointer m-2">Login</p>
      </div>
    </div>
  );
}

export default Header;
