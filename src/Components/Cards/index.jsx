import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../contexts/globalContexts"
import { useNavigate } from "react-router-dom"
import { getLaptops, getMobileAccessories, getSmartphones, getSportsAccessories, getTablets, getWatches } from "../../services/getData"
import { Categorias } from "../Categorias"

function Cards() {
    const navigate = useNavigate()
    const [smartphones, setSmartphones] = useState()
    const [tablets, setTablets] = useState();
    const [laptops, setLaptops] = useState();
    const [watches, setWatches] = useState();
    const [mobileAccess, setMobileAccess] = useState();
    const [sportsAccess, setSportsAccess] = useState();
    const {setNewImage} = useContext(UserContext)
    useEffect(() => {
    
    async function getProducts() {
        setSmartphones(await getSmartphones())    
        setTablets(await getTablets())    
        setLaptops(await getLaptops())    
        setWatches(await getWatches())    
        setMobileAccess(await getMobileAccessories())    
        setSportsAccess(await getSportsAccessories())    
    }

    getProducts()
    }, [])
    console.log(smartphones)
    
    return (
        <div className=" flex flex-col pt-[50px] bg-gray-100"  >
        <Categorias />
        {smartphones && (
        <div className="flex flex-col p-4">
        <h1 className="text-2xl p-5">Celulares mais vendidos</h1>
            <div className=" grid grid-cols-4 gap-15 justify-items-center ">
            {smartphones.slice(2, 6).map((item) => (
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
            </div>
        )}

        {mobileAccess && (
            <div className="flex flex-col p-5">
            <h1 className="text-2xl p-4">Acessórios para o seu celular </h1>
            <div className=" grid grid-cols-4 gap-15 justify-items-center ">
            {mobileAccess.slice(0, 4).map((item) => (
                <div className="text-xl w-[250px] pt-1 px-4 rounded-md flex flex-col justify-center" key={item.id}> 
                    <div style={{backgroundImage: `url(${item.images[0]})` }} className=" h-70 bg-[url(${item.images[2]})] bg-cover bg-center bg-gray-200 bg-no-repeat cursor-pointer"
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
            </div>
        )}

        {tablets && (
            <div className="flex flex-col p-5">
            <h1 className="text-2xl p-4">Precisa de telas maiores?</h1>
            <div className=" grid grid-cols-4 gap-15 justify-items-center ">
            {tablets.map((item) => (
                <div className="text-xl w-[250px] pt-1 px-4 rounded-md flex flex-col justify-center" key={item.id}> 
                    <div style={{backgroundImage: `url(${item.images[0]})` }} className=" h-70 bg-[url(${item.images[2]})] bg-cover bg-center bg-gray-200 bg-no-repeat cursor-pointer"
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
            </div>
        )}

        {laptops && (
            <div className="flex flex-col p-5">
            <h1 className="text-2xl p-4">Notebooks Gamer</h1>
            <div className=" grid grid-cols-4 gap-15 justify-items-center ">
            {laptops.slice(0, 4).map((item) => (
                <div className="text-xl w-[250px] pt-1 px-4 rounded-md flex flex-col justify-center" key={item.id}> 
                    <div style={{backgroundImage: `url(${item.images[0]})` }} className=" h-70 bg-[url(${item.images[2]})] bg-cover bg-center bg-gray-200 bg-no-repeat cursor-pointer"
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
            </div>
        )}

        {watches && (
            <div className="flex flex-col p-5">
            <h1 className="text-2xl p-4">Talvez você goste</h1>
            <div className=" grid grid-cols-4 gap-15 justify-items-center ">
            {watches.slice(0, 4).map((item) => (
                <div className="text-xl w-[250px] pt-1 px-4 rounded-md flex flex-col justify-center" key={item.id}> 
                    <div style={{backgroundImage: `url(${item.images[0]})` }} className=" h-70 bg-[url(${item.images[2]})] bg-cover bg-center bg-gray-200 bg-no-repeat cursor-pointer"
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
            </div>
        )}

        {sportsAccess && (
            <div className="flex flex-col p-5">
            <h1 className="text-2xl p-4">Você gosta de esportes?</h1>
            <div className=" grid grid-cols-4 gap-15 justify-items-center ">
            {sportsAccess.slice(0, 4).map((item) => (
                <div className="text-xl w-[250px] pt-1 px-4 rounded-md flex flex-col justify-center" key={item.id}> 
                    <div style={{backgroundImage: `url(${item.images[0]})` }} className=" h-70 bg-[url(${item.images[2]})] bg-cover bg-center bg-gray-200 bg-no-repeat cursor-pointer"
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
            </div>
        )}




        <div className="border pt-5 bg-gray-100 border-gray-400">

        </div>
        </div>
        )
}

export default Cards