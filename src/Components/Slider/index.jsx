import poster1 from "../../assets/iphone.png";
import poster2 from "../../assets/sale.png";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import { Navigation, Autoplay } from "swiper/modules";

function Slider() {
  return (
    <Swiper className="w-full h-full flex justify-center items-center"
    modules={[Navigation, Autoplay]}
      navigation={true}
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
  );
}

export default Slider;
