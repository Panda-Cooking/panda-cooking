import { Link } from "react-router-dom";
import { Heading3, Text1 } from "../../../../styles/typography";
import { SectionPresentationsStyled } from "./styles";

export const SectionPresentations = () => {
  return (
    <SectionPresentationsStyled>
      <div className="container">
        <div className="box-infos">
          <Text1 color="white">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text1>

          <Heading3 color="white">Acessar receitas agora</Heading3>

          <Link to="/dashboard">Acessar</Link>
        </div>
      </div>
    </SectionPresentationsStyled>
  );
};
