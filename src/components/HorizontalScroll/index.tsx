import { Swiper } from "swiper/react";
import { Mousewheel } from "swiper";

import "swiper/css";

interface iPropsHorizontalScroll {
  children: React.ReactNode;
}

export const HorizontalScroll = ({ children }: iPropsHorizontalScroll) => {
  return (
    <div>
      <Swiper
        mousewheel={true}
        grabCursor={true}
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          460: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Mousewheel]}
      >
        {children}
      </Swiper>
    </div>
  );
};
