import { useContext } from "react"
import { UserContext } from "../../contexts/globalContexts"
import { addProduct } from "../../services/getData";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header";

function Search() {
    const { resultSearch, setOpenCart, setNewImage, setProductById }  = useContext(UserContext)
    const navigate = useNavigate()
    return (
        <div className="w-full bg-gray-200 h-full">
            <Header />
            {resultSearch && (
                <div className="w-full">
                    {resultSearch.map((item) => (
                    <div className="text-xl w-full py-2 px-4 border-gray-500 border-b-1 flex gap-8 ">
                                  <div
                                    style={{ backgroundImage: `url(${item.images[0]})` }}
                                    className="h-70 md:h-50 md:w-40 bg-cover bg-center bg-gray-200 bg-no-repeat cursor-pointer"
                                    onClick={() => {
                                      navigate(`/detalhes/${item.id}`);
                                      setNewImage(item.images[0]);
                                    }}
                                  ></div>
                    
                                  <div className="flex flex-col gap-2 pt-3">
                                    <p
                                      className="hover:text-gray-700 cursor-pointer"
                                      onClick={() => {
                                        navigate(`/detalhes/${item.id}`);
                                        setNewImage(item.images[0]);
                                      }}
                                    >
                                      {item.title}
                                    </p>
                    
                                    <p className="text-4xl mb-1">{`${(
                                      item.price * 5
                                    ).toLocaleString('pt-BR', {
                                      style: 'currency',
                                      currency: 'BRL',
                                    })}`}</p>
                    
                                    <button
                                      onClick={() => {
                                        setNewImage(item.images[0])
                                        addProduct(item.id, setProductById)
                                        setOpenCart(true)
                                      }
                                      } 
                                      className="bg-gray-800 flex justify-evenly items-center text-white p-2 rounded-md font-semibold hover:bg-gray-700 transition-colors cursor-pointer"
                                    >
                                      Adicionar ao Carrinho
                                    </button>
                                    <button className="bg-gray-800 font-semibold rounded-md text-white cursor-pointer hover:bg-gray-700 transition-colors p-2">Comprar</button>
                                  </div>
                                </div>
                ))}
                </div>
            )}
        </div>
    )
}

export default Search