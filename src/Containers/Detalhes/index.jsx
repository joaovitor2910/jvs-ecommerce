import { useContext, useEffect, useState } from "react"
import { getDetalhes, getImages } from "../../services/getData"
import { useParams } from "react-router-dom"
import { UserContext } from "../../contexts/globalContexts"
import Header from "../../Components/Header"


function Detalhes() {
    const { detalhes, setDetalhes, images, setImages, newImage, setNewImage } = useContext(UserContext)
    const {id} = useParams()
    
    useEffect(() => {
        async function getDataDetalhes() {   
           setDetalhes(await getDetalhes(id))
           setImages(await getImages(id))
        }
        getDataDetalhes()
    }, [])
    return (
        <div>
            <Header />
            {detalhes && images && (
                <div className="bg-gray-100 absolute z-99 h-full w-full p-5">
                    <div className="rounded-md shadow-2xl flex h-full bg-white">
                        <div className="flex flex-col gap-2 p-2">
                        {images.map((image) => (
                            <div key={image} onClick={() => setNewImage(image)} style={{backgroundImage: `url(${image})`}} className="w-[90px] h-[120px] bg-contain bg-no-repeat bg-center border rounded-md cursor-pointer border-gray-400"></div>
                        ))}
                        </div>
                        <div  style={{backgroundImage: `url(${newImage})` }} className="w-[500px] h-[500px] bg-contain bg-no-repeat bg-center"></div>
                        <div className=" flex flex-col w-[500px] ">
                        <p>Estoque: {detalhes.stock}</p>
                        <h1 className="text-4xl">{detalhes.title}</h1>
                        <div className="flex flex-col gap-4">

                        <p className="text-xl"> ★★★★★{detalhes.rating}</p>
                        <p className="text-lg">{detalhes.description}</p>
                        <button className="cursor-pointer  p-3 text-white rounded-lg bg-gray-800">Comprar</button>
                        <button className="cursor-pointer p-3 bg-white rounded-lg text-gray-800 border-2 border-gray-800">Adicionar ao carrinho</button>
                        </div>
                        <p className="text-lg">Chegará em {detalhes.shippingInformation.slice(8, 11)}semanas</p>
                        <p className="text-lg">1 ano de garantia</p>
                        </div>
                        
                       
                        
                        </div>
                        
                    </div>
            )}
        </div>
    )
}

export default Detalhes