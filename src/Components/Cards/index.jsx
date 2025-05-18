import { useContext, useEffect } from "react"
import { UserContext } from "../../contexts/globalContexts"
import api from "../../services/api"
import { useNavigate } from "react-router-dom"
import { getDetalhes } from "../../services/getData"

function Cards() {
    const navigate = useNavigate()
    const {itens, setItens, setNewImage} = useContext(UserContext)
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
}, [])
console.log(itens)
    
    return (
        <div className="w-full h-full pt-[130px] bg-gray-100"  >
        {itens && (
            <div className="w-full h-full grid grid-cols-4 gap-5 my-10 justify-items-center ">
            {itens.map((item) => (
                <div className="text-lg w-[250px] p-[20px] h-[vh] border shadow-lg bg-white border-gray-200 rounded-md flex flex-col justify-center " key={item.id}>
                    <div style={{backgroundImage: `url(${item.images[2]})` }} className="w-full h-70 bg-[url(${item.images[2]})] bg-cover bg-center bg-no-repeat">
                    </div>
                    <div className="flex flex-col py-[10px]">
                    <p className="text-center text-xl font-bold text-gray-900">{`${(item.price * 5).toLocaleString("pt-BR",{
                        style: "currency",
                        currency: "BRL"                        
                    })}`}</p>
                    <p className=" text-center text-emerald-800" >{item.title}</p>
                    <button onClick={() => {
                        navigate(`/detalhes/${item.id}`)
                        setNewImage(item.images[0])
                        }}
                     className="bg-emerald-500 text-white px-4 py-2 rounded hover:bg-emerald-600 transition cursor-pointer">Compre agora</button>
                    </div>
                </div>
                ))}
            </div>
        )}
        <div className="w-full h-[50px] border pt-5 bg-gray-100 border-gray-400">

        </div>
        </div>
        )
}

export default Cards