import { createContext, useState } from "react";

export const UserContext = createContext()

export function ContextStorage({children}) {
    const [itens, setItens] = useState()
    const [category, setCategory] = useState(false)
    const [detalhes, setDetalhes] = useState()
    const [images, setImages] = useState()
    const [newImage, setNewImage] = useState()
    return (
        <UserContext.Provider value={{itens, setItens, category, setCategory, detalhes, setDetalhes, images, setImages, newImage, setNewImage}}>
            { children }
        </UserContext.Provider>
    )
}