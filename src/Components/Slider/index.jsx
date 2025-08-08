import poster1 from "../../assets/iphone.png";
import poster2 from "../../assets/watch.png";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import { Navigation, Autoplay } from "swiper/modules";

function Slider() {
  return (
    <>
    <Swiper className="w-[80%] h-full mt-5 md:w-full md:-full md:hidden flex justify-center items-center"
    modules={[Navigation, Autoplay]}
      navigation={{
        nextEl: '.swiper-button-next-custom',
        prevEl: '.swiper-button-prev-custom'
      }}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{delay: 3000, disableOnInteraction: false}}
      loop
    >
      <SwiperSlide className="w-full h-full">
        <img
        className="md:w-[100vw] md:h-[90vh] bg-cover "
          src={poster1}
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide ><img className="w-full h-full md:w-[100vw] md:h-[90vh] bg-cover"  src={poster2} alt="" /></SwiperSlide>
    </Swiper>

    <button className="swiper-button-prev-custom hidden md:block md:absolute w-10 h-15 text-2xl top-1/2 left-2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full z-9 cursor-pointer">
      &#8592;
    </button>
    
    <button className="swiper-button-next-custom hidden md:block md:absolute w-10 h-15 text-2xl top-1/2 right-2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full bg-center z-9 cursor-pointer">
      &#8594;
    </button>
    </>
  );
}

export default Slider;
