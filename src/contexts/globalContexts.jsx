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
    const [openCart, setOpenCart] = useState()
    const [search, setSearch] = useState()
    const [resultSearch, setResultSearch] = useState()

    const [productById, setProductById] = useState(() => {
        const saved = localStorage.getItem("productById");
        return saved ? JSON.parse(saved) : []})

    const [cartItems, setCartItems] = useState([])
    return (
        <UserContext.Provider value={{itens, setItens, menu, setMenu, category, setCategory, detalhes, setDetalhes, images, setImages, newImage, setNewImage, userMenu, setUserMenu, userInfo, setUserInfo, openCart, setOpenCart, productById, setProductById, cartItems, setCartItems, search, setSearch, resultSearch, setResultSearch}}>
            { children }
        </UserContext.Provider>
    )
}