import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/globalContexts";
import { useNavigate } from "react-router-dom";
import {
  getLaptops,
  getMobileAccessories,
  getProductById,
  getSmartphones,
  getSportsAccessories,
  getTablets,
  getWatches,
} from "../../services/getData";
import { Categorias } from "../Categorias";
import SlideCards from "../slideCards";

function Cards() {
  const navigate = useNavigate();
  const [smartphones, setSmartphones] = useState();
  const [tablets, setTablets] = useState();
  const [laptops, setLaptops] = useState();
  const [watches, setWatches] = useState();
  const [mobileAccess, setMobileAccess] = useState();
  const [sportsAccess, setSportsAccess] = useState();
  const { setNewImage } = useContext(UserContext);
  useEffect(() => {
    async function getProducts() {
      setSmartphones(await getSmartphones());
      setTablets(await getTablets());
      setLaptops(await getLaptops());
      setWatches(await getWatches());
      setMobileAccess(await getMobileAccessories());
      setSportsAccess(await getSportsAccessories());
    }

    getProducts();
  }, []);
  return (
    <div className=" flex flex-col pt-[50px] bg-gray-100">
      <Categorias />
      {smartphones && (
        <SlideCards title='Celulares mais vendidos' products={smartphones.slice(2, 6)} setNewImage={setNewImage} />
      )}

      {mobileAccess && (
        <SlideCards title='Acessórios' products={mobileAccess.slice(0, 4)} setNewImage={setNewImage}/>
      )}

      {tablets && (
        <SlideCards title='Telas maiores' products={tablets} setNewImage={setNewImage}/>
      )}

      {laptops && (
        <SlideCards title='Notebook Gamer' products={laptops.slice(0, 4)} setNewImage={setNewImage}/>
      )}

      {watches && (
         <SlideCards title='Adicione ao seu visual' products={watches.slice(0, 4)} setNewImage={setNewImage}/>
      )}

      {sportsAccess && (
         <SlideCards title='Esportes' products={sportsAccess.slice(0, 4)} setNewImage={setNewImage}/>
      )}

      <div className="w-full h-10 border-b-1 bg-gray-100 border-gray-400"></div>
    </div>
  );
}

export default Cards;
