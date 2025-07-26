import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsByCategory } from "../../services/getData";
import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";

function CategoryProducts() {
  const { id } = useParams();
  const [products, setProducts] = useState();

  useEffect(() => {
    async function getProducts() {
      setProducts(await getProductsByCategory(id));
    }
    getProducts();
  }, []);
  return (
    <>
      <Header />
      <div>
    <Sidebar />
      {products && (
        <div className="bg-white grid grid-cols-2 md:gap-0 md:bg-gray-200 gap-2 md:flex flex-col md:items-start place-items-center md:relative left-60">
          {products.map((item) => (
            <div className="text-xl w-[500px] pt-1 px-4 rounded-md md:m-4 bg-white md:flex justify-between">
              <div
                style={{ backgroundImage: `url(${item.images[1]})`, margin: '8px' }}
                className="h-70 md:h-60 md:w-50 bg-cover bg-center md:bg-white bg-gray-100 bg-no-repeat cursor-pointer"
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
                  onClick={() => setNewImage(item.images[0])}
                  className="bg-gray-800 flex justify-evenly items-center text-white px-2 py-2 rounded-md font-semibold hover:bg-gray-700 md:mt-15 transition-colors cursor-pointer"
                >
                  Adicionar ao Carrinho
                </button>
                <button
                  onClick={() => setNewImage(item.images[0])}
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
    </>
  );
}

export default CategoryProducts;
