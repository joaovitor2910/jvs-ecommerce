import { createContext, useState } from "react";

export const UserContext = createContext()

export function ContextStorage({children}) {
    const [itens, setItens] = useState()
    return (
        <UserContext.Provider value={{itens, setItens}}>
            { children }
        </UserContext.Provider>
    )
}