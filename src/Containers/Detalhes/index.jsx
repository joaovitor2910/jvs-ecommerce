import { useContext, useEffect, useState } from "react"
import { getDetalhes, getImages } from "../../services/getData"
import { useParams } from "react-router-dom"
import { UserContext } from "../../contexts/globalContexts"


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
            {detalhes && images && (
                <div className="bg-gray-100 h-screen w-full p-5">
                    <div className="rounded-md shadow-2xl flex h-full bg-white">
                        <div className="flex flex-col gap-2 p-2">
                        {images.map((image) => (
                            <div key={image} onClick={() => setNewImage(image)} style={{backgroundImage: `url(${image})`}} className="w-[90px] h-[120px] bg-contain bg-no-repeat bg-center border rounded-md cursor-pointer border-gray-400"></div>
                        ))}
                        </div>
                        <div  style={{backgroundImage: `url(${newImage})` }} className="w-[500px] h-[500px] bg-contain bg-no-repeat bg-center"></div>
                    <div>
                         
                    </div>
                    {detalhes.title}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Detalhes