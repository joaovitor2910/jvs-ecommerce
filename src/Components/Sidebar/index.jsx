import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      className="hidden md:flex  top-20 left-0 h-auto w-60 bg-gray-200 border-r border-gray-400 rounded-none shadow-lg flex-col font-['League_Spartan'] text-xl gap-2 px-3 py-8 ">
      <Link className="hover:bg-gray-300 p-1.5" to={"/category/smartphones"}>
        <p>Smartphones</p>
      </Link>
      <Link className="hover:bg-gray-300 p-1.5" to={"/category/tablets"}>
        <p>Tablets</p>
      </Link>
      <Link className="hover:bg-gray-300 p-1.5" to={"/category/laptops"}>
        <p>Laptops</p>
      </Link>
      <Link
        className="hover:bg-gray-300 p-1.5"
        to={"/category/mobile-accessories"}
      >
        <p>Acessórios para Celular</p>
      </Link>
      <Link className="hover:bg-gray-300 p-1.5" to={"/category/mens-watches"}>
        <p>Relógios</p>
      </Link>
      <Link
        className="hover:bg-gray-300 p-1.5"
        to={"/category/sports-accessories"}
      >
        <p>Acessórios Esportivos</p>
      </Link>
    </div>
  );
}

export default Sidebar;
