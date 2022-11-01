import { Link } from "react-router-dom";
import productEmphasisImg from "../../../../assets/img/product-Emphasis.png";
import { Heading3, Text1 } from "../../../../styles/typography";
import { SectionEmphasisStyled } from "./styles";

export const SectionEmphasis = () => {
  return (
    <SectionEmphasisStyled>
      <div className="container">
        <Heading3 color="white">Receita mais acessada</Heading3>
        <img src={productEmphasisImg} alt="" />
        <div className="box-infos">
          <Text1 color="white">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book t has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </Text1>
          <Link to="">Acessar receita</Link>
        </div>
      </div>
    </SectionEmphasisStyled>
  );
};
