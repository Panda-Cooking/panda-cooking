import { SwiperSlide } from "swiper/react";
import productImg from "../../../../assets/img/product.png";
import { Heading2, Heading3 } from "../../../../styles/typography";
import { HorizontalScroll } from "../../../HorizontalScroll";
import { SectionOnHighStyled } from "./style";

export const SectionOnHigh = () => {
  return (
    <SectionOnHighStyled>
      <div className="container">
        <Heading2>Em alta</Heading2>

        <HorizontalScroll>
          <SwiperSlide>
            <img src={productImg} alt="" />
            <Heading3>Lorem Ipsum 1</Heading3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={productImg} alt="" />
            <Heading3>Lorem Ipsum 2</Heading3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={productImg} alt="" />
            <Heading3>Lorem Ipsum 3</Heading3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={productImg} alt="" />
            <Heading3>Lorem Ipsum 4</Heading3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={productImg} alt="" />
            <Heading3>Lorem Ipsum 5</Heading3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={productImg} alt="" />
            <Heading3>Lorem Ipsum 6</Heading3>
          </SwiperSlide>
        </HorizontalScroll>
      </div>
    </SectionOnHighStyled>
  );
};
