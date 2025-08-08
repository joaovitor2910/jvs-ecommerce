import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addProduct, getProductsByCategory } from "../../services/getData";
import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";
import { UserContext } from "../../contexts/globalContexts";
import Cart from "../../Components/cart";

function CategoryProducts() {
  const { id } = useParams();
  const [products, setProducts] = useState();
  const {setNewImage, setProductById, setCategory, setUserMenu} = useContext(UserContext)
  const navigate = useNavigate()
  useEffect(() => {
    async function getProducts() {
      setProducts(await getProductsByCategory(id));
      setCategory(false)
      setUserMenu(false)

    }
    getProducts();
  }, [products]);
  return (
    <div className="">
      <Header />
      <div className="w-full md:flex">
      <Sidebar />
      <Cart />
      {products && (
        <div className="bg-white w-full grid grid-cols-2 justify-center md:gap-2 md:bg-gray-200 gap-2 place-items-start ">
          {products.map((item) => (
            <div className="text-xl w-[400px] pt-1 p-4 rounded-md md:m-2 bg-white md:flex">
              <div
                style={{ backgroundImage: `url(${item.images[0]})`, margin: '8px' }}
                className="h-70 md:h-50 md:w-50 bg-cover bg-center md:bg-white bg-gray-100 bg-no-repeat cursor-pointer"
                onClick={() => {
                  navigate(`/detalhes/${item.id}`);
                  setNewImage(item.images[0]);
                }}
              ></div>

              <div className="flex flex-col pt-3">
                <p
                  className="hover:text-gray-700 cursor-pointer"
                  onClick={() => {
                    navigate(`/detalhes/${item.id}`);
                    setNewImage(item.images[0]);
                  }}
                >
                  {item.title.length > 14
                    ? item.title.slice(0, 14) + "..."
                    : item.title}
                </p>

                <p className="text-xl font-bold mb-1">{`${(item.price * 5).toLocaleString(
                  "pt-BR",
                  {
                    style: "currency",
                    currency: "BRL",
                  }
                )}`}</p>

                <button
                  onClick={() => {
                    setNewImage(item.images[0])
                    addProduct(item.id, setProductById)
                  } 

                  }
                  className="bg-gray-800 flex justify-evenly items-center text-white px-2 py-2 rounded-md font-semibold hover:bg-gray-700 md:mt-15 transition-colors cursor-pointer"
                >
                  Adicionar ao Carrinho
                </button>
                <button
                  onClick={() => {
                    setNewImage(item.images[0])
                    navigate(`/detalhes/${item.id}`)
                  } 
                }
                  className="bg-gray-800 flex justify-evenly items-center text-white px-2 py-2 rounded-md font-semibold hover:bg-gray-700 md:mt-5 transition-colors cursor-pointer"

                >
                  Comprar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
  );
}

export default CategoryProducts;
