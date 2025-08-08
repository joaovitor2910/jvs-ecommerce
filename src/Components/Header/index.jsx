import { useContext, useEffect, useState } from "react";
import Logo from "../../assets/android-chrome-192x192.png";
import { UserContext } from "../../contexts/globalContexts";
import Hamburger from '../../assets/more.png'
import Profile from '../../assets/account.png'
import Search from '../../assets/search.png'
import { useNavigate } from "react-router-dom";
import { auth, loginUser } from "../../firebaseConfig";
import { onAuthStateChanged,  } from "firebase/auth";
import cart from '../../assets/grocery-store.png'
import { searchProduct } from "../../services/getData";

function Header() {
  const {category, setCategory, menu, setMenu, userInfo, setUserInfo, openCart, setOpenCart, search, setSearch, setResultSearch } = useContext(UserContext)
  const [token, setToken] = useState()
  const navigate = useNavigate()

  const handleSearch = async () => {
    setResultSearch(await searchProduct(search))
  }

  useEffect(() => {
    const reload = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserInfo(user)
        setToken(await user.getIdToken())
      } else {
        setUserInfo(null)
      }
    })

    return () => reload()
  }, [])

  return (
    <header className=" bg-white z-99 md:sticky top-0 font w-full h-[70px] text-2xl flex ">
      <div className="md:hidden w-full flex justify-around items-center">
        <img className="w-6 h-6 mr-2" src={Hamburger} onClick={() => setMenu(!menu)} alt="" />
        <input
            border
            placeholder="Pesquise..."
            className="bg-gray-200 rounded-4xl outline-0 p-2 w-[90%] h-[50px] text-xl"
            type="text"
            onChange={e => setSearch(e.target.value)}
            />
        <div 
      className={`bg-white absolute z-999 rounded-md font-medium text-lg w-50 h-auto p-2 top-20 left-0 ${menu ? 'block' : 'hidden'}`}>
        <p className="cursor-pointer m-2 h:bg-gray-300" onClick={() => setCategory(!category)}>Categorias</p>
        <p className="cursor-pointer m-2 h:bg-gray-300">Contato</p>
        <p className="cursor-pointer m-2 h:bg-gray-300">Login</p>
      </div>
      </div>

      <div className="hidden md:flex w-full">
      <nav className="w-full flex justify-between">
        <ul className="w-full flex items-center select-none font-['Montserrat'] text-xl font-medium justify-around p-4 md:p-0 h-full">
          <img  onClick={() => navigate('/')} className="w-[70px] h-full cursor-pointer" src={Logo} />
          <li className="cursor-pointer transition" onClick={() => setCategory(!category)}><p>Categorias</p></li>
          <div className={`flex w-[450px] bg-gray-200 rounded-4xl items-center`}>
          <input
            border
            placeholder="Pesquise..."
            onChange={(e) => setSearch(e.target.value)}
            className="bg-gray-200 rounded-4xl outline-0 p-2 w-[90%] h-[50px] text-xl"
            type="text"
            />
            <img src={Search} alt="lupa" onClick={() => {
              navigate('/search')
              handleSearch()
              }} className="w-6 h-6 m-2 cursor-pointer" />
            </div>
          <div className="flex w-40 items-center justify-between">
          <img src={cart} className="cursor-pointer w-6 h-6" onClick={() => setOpenCart(!openCart)}/>

          {userInfo ? (
          <div className="flex flex-col items-center px-4 cursor-pointer"
          onClick={() => navigate(`/user-info/${token}`)}
          >
        <img className="w-5 " src={Profile} alt="" />
        <p>{userInfo.displayName.split(" ")[0]}</p>
        

      </div>
          )
        :
        (
        <button className="p-2 text-lg cursor-pointer" onClick={() => {
        loginUser()
        }}
        >Login</button>
        )
        }
          </div>
        </ul>
      </nav>
      </div>
    </header>
  );
}

export default Header;