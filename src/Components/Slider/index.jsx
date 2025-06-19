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
    <Swiper className="w-full h-full flex justify-center items-center"
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
      <SwiperSlide className="w-[100vw]">
        <img
        className="w-[100vw] h-[90vh] bg-cover "
          src={poster1}
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide ><img className="w-[100vw] h-[90vh] bg-cover"  src={poster2} alt="" /></SwiperSlide>
    </Swiper>

    <button className="swiper-button-prev-custom absolute w-10 h-15 text-2xl top-1/2 left-2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full z-9 cursor-pointer">
      &#8592;
    </button>
    
    <button className="swiper-button-next-custom absolute w-10 h-15 text-2xl top-1/2 right-2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full bg-center z-9 cursor-pointer">
      &#8594;
    </button>
    </>
  );
}

export default Slider;
