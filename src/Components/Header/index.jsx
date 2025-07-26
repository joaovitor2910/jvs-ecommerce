import { useContext, useEffect, useState } from "react";
import Logo from "../../assets/android-chrome-192x192.png";
import { UserContext } from "../../contexts/globalContexts";
import Hamburger from '../../assets/more.png'
import Profile from '../../assets/account.png'
import Search from '../../assets/search.png'
import { useNavigate } from "react-router-dom";
import { loginUser, logout, user } from "../../firebaseConfig";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { initializeApp } from "firebase/app";

function Header() {
  const {category, setCategory, menu, setMenu, userMenu, setUserMenu, userInfo, setUserInfo} = useContext(UserContext)
  const navigate = useNavigate()

  const provider = new GoogleAuthProvider()
  
  const firebaseConfig = {
      apiKey: "AIzaSyBf4OE9QAW43u0_zdGst7yBcllUrV3WbsA",
    authDomain: "auth-jvstore.firebaseapp.com",
    projectId: "auth-jvstore",
    storageBucket: "auth-jvstore.firebasestorage.app",
    messagingSenderId: "830940760430",
    appId: "1:830940760430:web:202647a1afe9cac126597f",
    measurementId: "G-4GY9EDJQFM"
  }
  
  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)

  useEffect(() => {
    const reload = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserInfo(user)
      } else {
        setUserInfo(null)
      }
    })

    return () => reload()
  }, [])

  const loginUser = () => { 
      signInWithPopup(auth, provider).then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const token = credential.accessToken
      const user = result.user
      setUserInfo(user)
  }).catch((err) => {
          const errorCode = err.code
          const errorMessage = err.message
          const email = err.customData.email
          const credential = err.customData.credentialFromError(err)
      })
  }
  return (
    <header className=" bg-white z-99 md:sticky top-0 font w-full h-[80px] text-2xl flex ">
      <div className="md:hidden w-full flex justify-center items-center">
        <img className="w-6 h-6 mr-2" src={Hamburger} onClick={() => setMenu(!menu)} alt="" />
        <input
            border
            placeholder="Pesquise..."
            className="bg-gray-200 rounded-4xl outline-0 p-2 w-[90%] h-[50px] text-xl"
            type="text"
            />
        <div 
      className={`bg-white absolute z-999 rounded-md font-medium text-lg w-50 h-auto p-2 top-20 left-0 ${menu ? 'block' : 'hidden'}`}>
        <p className="cursor-pointer m-2 h:bg-gray-300" onClick={() => setCategory(!category)}>Categorias</p>
        <p className="cursor-pointer m-2 h:bg-gray-300">Contato</p>
        <p className="cursor-pointer m-2 h:bg-gray-300">Login</p>
      </div>
      </div>

      <div className="hidden md:block w-full">
      <nav className="w-full">
        <ul className=" flex items-center select-none font-['Montserrat'] text-xl font-medium justify-between p-4 md:p-2 h-full">
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
          <li className="cursor-pointer w-7"><img src={Profile} onClick={() => setUserMenu(!userMenu)} alt="" /></li>
          
          </div>
          <div 
      className={`bg-gray-800 text-white p-2 text-sm w-50 rounded-sm h-[90px] fixed top-20 right-1 ${userMenu ? 'block' : 'hidden'}`}>
        
    {userInfo ? (
      <div>
        <p>{userInfo.displayName}</p>
        <p>{userInfo.email}</p>
        <button className="p-2 text-lg cursor-pointer" onClick={() => {
          logout()
          setUserInfo('')
          }}>Sair</button>

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
