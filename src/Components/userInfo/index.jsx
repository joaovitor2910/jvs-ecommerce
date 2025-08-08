import { useNavigate } from "react-router-dom"
import { logout } from "../../firebaseConfig"

function UserInfo() {
    const navigate = useNavigate()
    return (
        <div className="w-full h-[100vh] flex flex-col items-center justify-center">
        <button className="p-5 rounded-md cursor-pointer bg-gray-800 text-white" onClick={() => {
            navigate('/')
            logout()
        }}>Sair da Conta</button>
            Em Desenvolvimento: Informações do Usuário</div>
    )
}

export default UserInfo