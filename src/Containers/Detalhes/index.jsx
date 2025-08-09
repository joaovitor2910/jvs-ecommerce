import { useContext, useEffect } from "react"
import { addProduct, getDetalhes, getImages } from "../../services/getData"
import { useNavigate, useParams } from "react-router-dom"
import { UserContext } from "../../contexts/globalContexts"
import Header from "../../Components/Header"
import { MenuCategorias } from "../../Components/Categorias"
import Cart from "../../Components/cart"


function Detalhes() {
    const { detalhes, setDetalhes, images, setImages, newImage, setNewImage, setProductById } = useContext(UserContext)
    const {id} = useParams()
    const navigate = useNavigate()
    
    useEffect(() => {
        async function getDataDetalhes() {   
           setDetalhes(await getDetalhes(id))
           setImages(await getImages(id))
        }
        getDataDetalhes()
    }, [id])
    return (
      <div>
        <Header />
        <MenuCategorias />
        <Cart />
        {detalhes && images && (
          <div className="md:bg-gray-100 bg-white absolute z-5 w-full md:h-full md:p-4 p-2">
            <div className="md: rounded-md md:shadow-2xl flex flex-col md:flex-row w-full md:h-full md:px-2 md:justify-evenly bg-white">
              <div className="flex order-2 md:order-1 p-6 flex-row md:flex-col w-full md:w-[100px] md:h-full justify-center md:justify-start gap-2 md:p-1">
                {images.map((image) => (
                  <div
                    key={image}
                    onClick={() => setNewImage(image)}
                    style={{ backgroundImage: `url(${image})` }}
                    className="w-12 h-8 md:w-[90px] md:h-[120px] bg-contain bg-no-repeat bg-center border rounded-md cursor-pointer border-gray-400"
                  ></div>
                ))}
              </div>
              <div
                style={{ backgroundImage: `url(${newImage})` }}
                className="w-full md:w-[500px] h-[400px] md:h-[500px] bg-contain bg-no-repeat order-1 md:order-2 bg-center"
              ></div>

              <div className=" flex flex-col order-3 w-full md:w-[500px] ">
                <p>Vendido por: {detalhes.brand}</p>
                <p>Estoque: {detalhes.stock}</p>
                <h1 className="text-4xl md:text-5xl flex flex-wrap">{detalhes.title}</h1>
                <div className="flex flex-col gap-4 md:gap-1">
                  <p className="text-xl md:p-1"> ★★★★★{detalhes.rating}</p>
                  <p className="text-2xl">{detalhes.description}</p>
                  <button className="cursor-pointer md:m-2 md:p-5 md:text-2xl p-3 text-white rounded-lg bg-gray-800"
                  onClick={() => navigate('/checkout')}
                  >
                    
                    Comprar
                  </button>
                  <button className="cursor-pointer md:m-2 p-3 md:text-xl bg-white rounded-lg text-gray-800 border-2 border-gray-800"
                  onClick={() => addProduct(detalhes.id, setProductById)}
                  > 
                    Adicionar ao carrinho
                  </button>
                </div>
                <p className="text-lg">
                  Chegará em {detalhes.shippingInformation.slice(8, 11)}semanas
                </p>
                <p className="text-lg">1 ano de garantia</p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
}

export default Detalhes