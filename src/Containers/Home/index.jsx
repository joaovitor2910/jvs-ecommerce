import { useContext, useEffect } from "react"
import { UserContext } from "../../contexts/globalContexts"
import api from "../../services/api"
import { getCategories } from "../../services/getData"
import Header from "../../Components/Header"


function Home() {
    const {itens, setItens} = useContext(UserContext)
    useEffect(() => {
    
    async function getSmartphones() {
    const {data:
        {products}
    } = await api.get('/category/smartphones')

     setItens(products)
     console.log(products)
     return products
    }
    getSmartphones()
    getCategories()
    
}, [])
console.log(itens)
    
    return (
        <div className="w-full h-screen"  >
        <Header />
        <h1>Ofertas! </h1>
        {itens && (
            <div className="w-full h-full grid grid-cols-3 gap-5 mt-10 justify-items-center ">
            {itens.map((item) => (
                <div className="text-lg w-65 p-5 h-100 border-1 bg-gray-100 border-gray-300 rounded-md flex flex-col " key={item.id}>
                    <div style={{backgroundImage: `url(${item.images[2]})` }} className="w-full h-70 bg-cover bg-center bg-no-repeat">
                    </div>
                    <p className="text-center">{`${(item.price * 10).toLocaleString("pt-BR",{
                        style: "currency",
                        currency: "BRL"                        
                    })}`}</p>
                    <p className=" text-center" >{item.title}</p>
                </div>
                ))}
            </div>
        )}
        </div>
        )
}

export default Home