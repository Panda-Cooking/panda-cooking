import productImg from "../../../../assets/img/product.png";
import { Heading2, Heading3, Text2 } from "../../../../styles/typography";
import { SectionOnHighStyled } from "./style";

export const SectionOnHigh = () => {
  return (
    <SectionOnHighStyled>
      <div className="container">
        <Heading2>Em alta</Heading2>
        <ul className="list-products">
          <li className="card-product">
            <img src={productImg} alt="" />
            <Heading3>Lorem Ipsum</Heading3>
            <Text2 color="gray-2">
              Lorem Ipsum is simply text of the printing and typesett ing
              industry.
            </Text2>
          </li>
          <li className="card-product">
            <img src={productImg} alt="" />
            <Heading3>Lorem Ipsum</Heading3>
            <Text2 color="gray-2">
              Lorem Ipsum is simply text of the printing and typesett ing
              industry.
            </Text2>
          </li>
          <li className="card-product">
            <img src={productImg} alt="" />
            <Heading3>Lorem Ipsum</Heading3>
            <Text2 color="gray-2">
              Lorem Ipsum is simply text of the printing and typesett ing
              industry.
            </Text2>
          </li>
          <li className="card-product">
            <img src={productImg} alt="" />
            <Heading3>Lorem Ipsum</Heading3>
            <Text2 color="gray-2">
              Lorem Ipsum is simply text of the printing and typesett ing
              industry.
            </Text2>
          </li>
          <li className="card-product">
            <img src={productImg} alt="" />
            <Heading3>Lorem Ipsum</Heading3>
            <Text2 color="gray-2">
              Lorem Ipsum is simply text of the printing and typesett ing
              industry.
            </Text2>
          </li>
          <li className="card-product">
            <img src={productImg} alt="" />
            <Heading3>Lorem Ipsum</Heading3>
            <Text2 color="gray-2">
              Lorem Ipsum is simply text of the printing and typesett ing
              industry.
            </Text2>
          </li>
        </ul>
      </div>
    </SectionOnHighStyled>
  );
};
