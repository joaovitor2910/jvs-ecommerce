import { useContext, useEffect } from "react"
import { UserContext } from "../../contexts/globalContexts"
import { useNavigate } from "react-router-dom"
import { getSmartphones } from "../../services/getData"
import { Categorias } from "../Categorias"

function Cards() {
    const navigate = useNavigate()
    const {itens, setItens, setNewImage} = useContext(UserContext)
    useEffect(() => {
    
    async function getProducts() {
        setItens(await getSmartphones())    
    }

    getProducts()
    }, [])
    console.log(itens)
    
    return (
        <div className=" flex flex-col pt-[50px] bg-gray-100"  >
        <Categorias />
        {itens && (
            <div className=" grid grid-cols-4 gap-15 my-15 justify-items-center ">
            {itens.map((item) => (
                <div className="text-xl w-[250px] pt-1 px-4 rounded-md flex flex-col justify-center" key={item.id}> 
                    <div style={{backgroundImage: `url(${item.images[2]})` }} className=" h-70 bg-[url(${item.images[2]})] bg-cover bg-center bg-gray-200 bg-no-repeat cursor-pointer"
                    onClick={() => {
                    navigate(`/detalhes/${item.id}`)
                    setNewImage(item.images[0])
                }}
                    >
                    </div>
                    <div className="flex flex-col pt-3">
                    
                    <p className="hover:text-gray-700 cursor-pointer" 
                    onClick={() => {
                    navigate(`/detalhes/${item.id}`)
                    setNewImage(item.images[0])
                }}
                    >{item.title}</p>
                    <p className="text-xl">{`${(item.price * 5).toLocaleString("pt-BR",{
                        style: "currency",
                        currency: "BRL"                        
                    })}`}</p>
                    <button onClick={() => setNewImage(item.images[0])}
                     className="border-2 border-gray-300 mt-2 p-2 rounded-2xl cursor-pointer">Adicionar ao carrinho</button>
                    </div>
                </div>
                ))}
            </div>
        )}
        <div className="border pt-5 bg-gray-100 border-gray-400">

        </div>
        </div>
        )
}

export default Cards