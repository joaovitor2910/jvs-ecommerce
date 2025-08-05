import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/globalContexts";
import { auth, loginUser } from "../../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import Trash from '../../assets/delete.png'
import { getProductById } from "../../services/getData";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { userInfo, openCart, setUserInfo, productById, setProductById } =
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

  useEffect(() => {
    const saveLogin = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserInfo(user);
      } else {
        setUserInfo(null);
      }
    });

    return () => saveLogin();
  }, []);
  return (
    <>
      <div className={`fixed z-9 p-2 top-20 right-0 border-gray-800 border-3 bg-gray-800 text-white w-80 h-[87vh] flex flex-col  ${openCart ? 'block' : 'hidden'}`}>
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
                className="h-30 md:h-20 md:w-20 bg-cover bg-center bg-gray-800 bg-no-repeat cursor-pointer"
                ></div>

              <div className="flex flex-col pl-2 pt-3">
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
              <img src={Trash} className="w-7 h-7 relative right-2 mt-2 cursor-pointer" onClick={() => removeItem(item.id)} alt="trash-image"/>
              
        </div>
        ))}
        </>
    )}
        </div>
        <div className="flex justify-center pt-2  text-gray-800 ">
        <button className="cursor-pointer bg-white w-full h-full p-2 rounded-sm hover:bg-gray-800 hover:text-white mt-auto transition duration-300 border-1"
        onClick={() => handleCheckout(userInfo)}
        >Finalizar Carrinho</button>
        </div>
      </div>
    </>
  );
}

export default Cart;
