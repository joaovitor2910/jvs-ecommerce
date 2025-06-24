import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

function SlideCards({title, products, setNewImage}) {
  const navigate = useNavigate();

  if (!products || products.length === 0) return null;

  return (
    <div className="w-full p-5">
      <h1 className="text-2xl p-4">{title}</h1>
      <Swiper
        modules={[Navigation]}
        spaceBetween={250}
        slidesPerView={2}
        navigation={false}
        breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
            }}
      >
        {products.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="text-xl w-[250px] pt-1 px-4 rounded-md flex flex-col justify-between">
              <div
                style={{ backgroundImage: `url(${item.images[0]})` }}
                className="h-70 bg-cover bg-center bg-gray-200 bg-no-repeat cursor-pointer"
                onClick={() => {
                  navigate(`/detalhes/${item.id}`);
                  setNewImage(item.images[0]);
                }}
              ></div>

              <div className="flex flex-col pt-3">
                <p
                  className="hover:text-gray-700 cursor-pointer"
                  onClick={() => {
                    navigate(`/detalhes/${item.id}`);
                    setNewImage(item.images[0]);
                  }}
                >
                  {item.title}
                </p>

                <p className="text-xl mb-1">{`${(
                  item.price * 5
                ).toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}`}</p>

                <button
                  onClick={() => setNewImage(item.images[0])}
                  className="bg-gray-800 flex justify-evenly items-center text-white px-2 py-4 rounded-md font-semibold hover:bg-gray-700 transition-colors cursor-pointer"
                >
                  Adicionar ao Carrinho
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SlideCards;