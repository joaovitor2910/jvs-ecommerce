import Logo from '../../assets/logo_size.jpg'

function Header() {
    return (
        <div className="w-full h-14 text-2xl flex ">
            <nav className="w-full">

            <ul className=" flex items-center justify-evenly h-full">
                <a href="/"><img src={Logo} /></a>
                <li>Ofertas</li>
                <li>Novidades</li>
                <input className="border-red-500 w-80 h-10 r " type="text" />
                <li>Contato</li>
                <li>Carrinho</li>
                <li>Login</li>
            </ul>
            </nav>
        </div>
    )
}

export default Header