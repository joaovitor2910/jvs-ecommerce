import { createContext, useState } from "react";

export const UserContext = createContext()

export function ContextStorage({children}) {
    const [itens, setItens] = useState()
    const [category, setCategory] = useState(false)
    const [menu, setMenu] = useState(false)
    const [detalhes, setDetalhes] = useState()
    const [images, setImages] = useState()
    const [newImage, setNewImage] = useState()
    const [userMenu, setUserMenu] = useState(false)
    const [userInfo, setUserInfo] = useState()
    return (
        <UserContext.Provider value={{itens, setItens, menu, setMenu, category, setCategory, detalhes, setDetalhes, images, setImages, newImage, setNewImage, userMenu, setUserMenu, userInfo, setUserInfo}}>
            { children }
        </UserContext.Provider>
    )
}