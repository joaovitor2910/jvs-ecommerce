import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/globalContexts";
import { auth, loginUser } from "../../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import Trash from '../../assets/delete.png'
import { getProductById } from "../../services/getData";
import { useNavigate } from "react-router-dom";
import js from "@eslint/js";

function Cart() {
  const { userInfo, openCart, setUserInfo, productById, setProductById, setOpenCart } =
    useContext(UserContext);
    const navigate = useNavigate()

    const handleCheckout = (user) => {
      if (user !== null) {
        navigate('/checkout')
      }
      else {
        loginUser()
      }
    }

  async function decrementItem(id) {
    const res = await getProductById(id)
  
    setProductById(prev => {
    const itemExist = prev.find(item => item.id === res.id)
  
    if (itemExist) {
      return prev.map(item =>
        item.id === res.id
          ? { ...item, quantity: (item.quantity || 1) - 1 }
          : item
      )
    } else {
      return [...prev, { ...res, quantity: 1 }]
    }
  })
    }

    async function incrementItem(id) {
    const res = await getProductById(id)
  
    setProductById(prev => {
    const itemExist = prev.find(item => item.id === res.id)
  
    if (itemExist) {
      return prev.map(item =>
        item.id === res.id
          ? { ...item, quantity: (item.quantity || 0) + 1 }
          : item
      )
    } else {
      return [...prev, { ...res, quantity: 1 }]
    }
  })
    }

    const removeItem = (id) => {
      setProductById(prev => prev.filter(item => item.id !== id))
    }

    const totalValue = productById.reduce((sum, item) => {
      return sum + (item.price * 5) * item.quantity 
      
    }, 0).toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })
 

  useEffect(() => {
    const saveLogin = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserInfo(user);
      } else {
        setUserInfo(null);
      }
    })

    const savedCart = localStorage.getItem('productById')
    if (savedCart) {
      setProductById(JSON.parse(savedCart))
    }


    return saveLogin
  }, []);

  useEffect(() => {
    localStorage.setItem('productById', JSON.stringify(productById))
  }, [productById])
  return (
    <>
      <div className={`fixed z-99 p-2 top-0 right-0 border-gray-800 border-3 bg-gray-800 text-white w-80 h-[100vh] flex flex-col   ${openCart ? 'block' : 'hidden'}`}>
        <button className="bg-white text-gray-800 rounded-full w-6 cursor-pointer mb-4"
        onClick={() => setOpenCart(false)}
        >X</button>
        <div className="overflow-y-auto">
          {productById.length === 0 ? (
            <p className="text-lg">Seu carrinho está vazio... Adicione mais itens</p>
          ) :
          (
          <>
        {productById.map((item) => (
          <div key={item.id} className="flex border-b-1 border-white">
          <div
                style={{ backgroundImage: `url(${item.images[0]})` }}
                className="h-30 md:h-15 md:w-15 bg-contain bg-gray-800 bg-no-repeat cursor-pointer"
                ></div>

              <div className="flex flex-col pl-2 pt-1">
                <p
                  className="hover:text-gray-200 cursor-pointer"
                  >
                  {item.title.length > 14 ? item.title.slice(0, 14) + '...' : item.title}
                </p>

                <p className="text-xl mb-1">{`${(
                  item.price * 5
                ).toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}`}</p>

              <div className="flex gap-10 items-center">
                <p className="text-lg">Quantidade: {item.quantity}</p>
                <button className="text-3xl cursor-pointer disabled:invisible" onClick={() => 
                  decrementItem(item.id)
                }
                disabled={item.quantity === 1}
                >-</button>
                <button className="text-3xl cursor-pointer" onClick={() => incrementItem(item.id)}>+</button>
              </div>
              </div>
              <img src={Trash} className="w-7 h-7 relative right-2 mt-3 cursor-pointer" onClick={() => removeItem(item.id)} alt="trash-image"/>
              
        </div>
        ))
        }
        </>
    )}
        </div>
        <div className=" pt-2 mt-auto text-gray-800 ">
    <p className="text-blue-500">Total: {totalValue}</p>
        <button className="cursor-pointer bg-white w-full py-2 rounded-sm hover:bg-gray-800 hover:text-white transition duration-300 border-1"
        onClick={() => handleCheckout(userInfo)}
        >Finalizar Carrinho</button>
        </div>
      </div>
    </>
  );
}

export default Cart;
