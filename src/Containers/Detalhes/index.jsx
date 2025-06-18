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
                <>
                <div className="bg-gray-100 absolute z-99 h-full w-full p-5">
                    <div className="rounded-md shadow-2xl flex h-full bg-white">
                        <div className="flex flex-col gap-2 p-2">
                        {images.map((image) => (
                            <div key={image} onClick={() => setNewImage(image)} style={{backgroundImage: `url(${image})`}} className="w-[90px] h-[120px] bg-contain bg-no-repeat bg-center border rounded-md cursor-pointer border-gray-400"></div>
                        ))}
                        </div>
                        <div  style={{backgroundImage: `url(${newImage})` }} className="w-[500px] h-[500px] bg-contain bg-no-repeat bg-center"></div>
                        <div className=" flex flex-col w-[500px] ">
                        <p>Disponibilidade: {detalhes.availabilityStatus}</p>
                        <p>Estoque: {detalhes.stock}</p>
                        <h1 className="text-4xl">{detalhes.title}</h1>
                        <div className="flex flex-col gap-4">

                        <p>Avaliação {detalhes.rating}</p>
                        <p>{detalhes.description}</p>
                        <button className="cursor-pointer  p-3 text-white rounded-lg bg-orange-600">Comprar</button>
                        <button className="cursor-pointer p-3 bg-white rounded-lg text-orange-600 border-2 border-orange-600">Adicionar ao carrinho</button>
                        </div>
                        <p>Chegará em {detalhes.shippingInformation.slice(8, 11)}semana</p>
                        <p>1 ano de garantia</p>
                        </div>
                        
                       
                        
                        </div>
                        
                    </div>
            <div className=" flex flex-col m-5">
                            <h1 className="text-3xl">Comentários</h1>
                            <h1>{detalhes.reviews.map((coment) => (
                                <div className="flex w-[200px] flex-col bg-gray-200 rounded-md p-4 m-4 ">
                                    <p>{coment.reviewerName}</p>
                                    <p>{coment.rating} Estrelas</p>
                                    <p>{coment.comment}</p>
                                </div>
                            ) )}</h1>
                        </div>
            
            </>
            )}
        </div>
    )
}

export default Detalhes