import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const CarouselComponent = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://img.freepik.com/fotos-gratis/filas-de-assentos-vermelhos-em-um-teatro_53876-64709.jpg?size=626&ext=jpg&ga=GA1.2.919827366.1654137405"
            alt="Imagem"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/fotos-gratis/equipamento-de-iluminacao-profissional-no-cenario-do-filme-com-fumaca-no-ar_1268-17216.jpg?t=st=1656423479~exp=1656424079~hmac=a6eee92ac035504c69c6661bd6c028fd7d493442e08f9c86fe9c534d296e3f72&w=1380"
            alt="Imagem"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/fotos-gratis/close-up-de-gravacao-de-video-com-smartphone-durante-um-show_1153-7311.jpg?t=st=1656423510~exp=1656424110~hmac=e30a5e1087c844587d5c665e85f807c1ba5db78d6d60d1541ba5ab3a9249950d&w=1380"
            alt="Imagem"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/fotos-gratis/parque-verde_1417-1592.jpg?t=st=1656423600~exp=1656424200~hmac=94e54f5a672c051ec72db5c57562f294ff2a12b7c12613a9fa923482011510b8&w=1380"
            alt="Imagem"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
