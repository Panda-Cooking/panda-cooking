import { Link } from "react-router-dom";
import { Heading3, Text1 } from "../../../../styles/typography";
import { SectionPresentationsStyled } from "./styles";
import pandaLogo from "../../../../assets/img/ilustração.png";

export const SectionPresentations = () => {
  return (
    <SectionPresentationsStyled>
      <div className="container">
        <img src={pandaLogo} alt="logo" />
        <div className="box-infos">
          <Text1 color="white">Não há ingrediente secreto. É só você.</Text1>

          <Heading3 color="white">Acessar receitas agora</Heading3>

          <Link to="/dashboard">Acessar</Link>
        </div>
      </div>
    </SectionPresentationsStyled>
  );
};
